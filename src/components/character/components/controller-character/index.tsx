import { POSITIONS_ISLAND_DATA } from "@/lib/constants/island";
import { useManagerCharacterStore } from "@/lib/stores/use-manager-character-store";
import { useManagerIslandStore } from "@/lib/stores/use-manager-island-store";
import { calculateWorldPosition } from "@/lib/utils/calculate-world-position";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { MathUtils, Vector3 } from "three";
import { degToRad } from "three/src/math/MathUtils.js";
import { Controls } from "../../../../lib/constants/keyboard-map";
import { useModalManagerStore } from "@/lib/stores/use-modal-manager-store";
import CharacterModel from "../model-character";

const normalizeAngle = (angle: number) => {
  while (angle > Math.PI) angle -= 2 * Math.PI;
  while (angle < -Math.PI) angle += 2 * Math.PI;
  return angle;
};

const lerpAngle = (start: number, end: number, t: number) => {
  start = normalizeAngle(start);
  end = normalizeAngle(end);

  if (Math.abs(end - start) > Math.PI) {
    if (end > start) {
      start += 2 * Math.PI;
    } else {
      end += 2 * Math.PI;
    }
  }

  return normalizeAngle(start + (end - start) * t);
};

export const ControllerCharacter = () => {
  const { WALK_SPEED, RUN_SPEED, ROTATION_SPEED } = useControls(
    "Character Control",
    {
      WALK_SPEED: { value: 3.5, min: 0.1, max: 4, step: 0.1 },
      RUN_SPEED: { value: 6, min: 0.2, max: 12, step: 0.1 },
      ROTATION_SPEED: {
        value: degToRad(0.5),
        min: degToRad(0.1),
        max: degToRad(5),
        step: degToRad(0.1),
      },
    }
  );

  const characterRigidBody = useRef<RapierRigidBody>(null);
  const container = useRef<THREE.Group>(null);
  const character = useRef<THREE.Group>(null);

  const [animation, setAnimation] = useState("RobotArmature|Robot_Idle");

  const characterRotationTarget = useRef(0);
  const rotationTarget = useRef(0);
  const cameraTarget = useRef<THREE.Group>(null);
  const cameraPosition = useRef<THREE.Group>(null);
  const cameraWorldPosition = useRef(new Vector3());
  const cameraLookAtWorldPosition = useRef(new Vector3());
  const cameraLookAt = useRef(new Vector3());

  const forward = useKeyboardControls<Controls>((state) => state.forward);
  const backward = useKeyboardControls<Controls>((state) => state.backward);
  const left = useKeyboardControls<Controls>((state) => state.left);
  const right = useKeyboardControls<Controls>((state) => state.right);
  const run = useKeyboardControls<Controls>((state) => state.run);
  const rotateRight = useKeyboardControls<Controls>(
    (state) => state.rotateRight
  );
  const rotateLeft = useKeyboardControls<Controls>((state) => state.rotateLeft);
  const action = useKeyboardControls<Controls>((state) => state.action);

  const setCharacter = useManagerCharacterStore((state) => state.setCharacter);
  const currentIsland = useManagerIslandStore((state) => state.currentIsland);
  const modal = useModalManagerStore((state) => state.modal);

  const [positionInicial] = useState<Vector3>(() =>
    calculateWorldPosition({
      basePosition: POSITIONS_ISLAND_DATA[currentIsland],
      relativeOffset: new Vector3(0, 10, 0),
    })
  );

  useEffect(() => {
    setCharacter(characterRigidBody.current);
  }, [setCharacter]);

  useFrame(({ camera }) => {
    if (!!modal) return;
    if (characterRigidBody.current) {
      const vel = characterRigidBody.current.linvel();

      const movement = {
        x: 0,
        z: 0,
      };

      if (forward) {
        movement.z = 1;
      } else if (backward) {
        movement.z = -1;
      } else if (left) {
        movement.x = 1;
      } else if (right) {
        movement.x = -1;
      } else if (rotateRight) {
        rotationTarget.current -= ROTATION_SPEED;
      } else if (rotateLeft) {
        rotationTarget.current += ROTATION_SPEED;
      } else {
        movement.x = 0;
        movement.z = 0;
      }

      if (movement.x !== 0) {
        rotationTarget.current += ROTATION_SPEED * movement.x;
      }

      if (movement.x !== 0 || movement.z !== 0) {
        characterRotationTarget.current = Math.atan2(movement.x, movement.z);
        const currentSpeed = run ? RUN_SPEED : WALK_SPEED;

        vel.x =
          Math.sin(rotationTarget.current + characterRotationTarget.current) *
          currentSpeed;
        vel.z =
          Math.cos(rotationTarget.current + characterRotationTarget.current) *
          currentSpeed;

        if (run) {
          setAnimation("RobotArmature|Robot_Running");
        } else {
          setAnimation("RobotArmature|Robot_Walking");
        }
      } else {
        vel.x = 0;
        vel.z = 0;
        setAnimation("RobotArmature|Robot_Idle");
      }

      if (action) {
        setAnimation("RobotArmature|Robot_Punch");
      }

      if (character.current) {
        character.current.rotation.y = lerpAngle(
          character.current.rotation.y,
          characterRotationTarget.current,
          0.1
        );
      }

      characterRigidBody.current.setLinvel(vel, true);
    }

    // CAMERA
    if (container.current) {
      container.current.rotation.y = MathUtils.lerp(
        container.current.rotation.y,
        rotationTarget.current,
        0.1
      );
    }

    if (cameraPosition.current) {
      cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
      camera.position.lerp(cameraWorldPosition.current, 0.1);
    }

    if (cameraTarget.current) {
      cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
      cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);

      camera.lookAt(cameraLookAt.current);
    }
  });

  return (
    <RigidBody
      colliders={false}
      lockRotations
      ref={characterRigidBody}
      position={positionInicial}
    >
      <group ref={container} position={[0, -1.2, 0]}>
        <group ref={cameraTarget} position-z={1.5} />
        <group ref={cameraPosition} position-y={20} position-z={-30} />
        <group ref={character}>
          <CharacterModel animation={animation} />
        </group>
      </group>
      <CapsuleCollider args={[0.7, 0.6]} />
    </RigidBody>
  );
};
