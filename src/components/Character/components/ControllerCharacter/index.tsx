import { useCharacterTeleport } from "@/hooks/useCharacterTeleport";
import { useControllerMap } from "@/hooks/useControllerMap";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { MathUtils, Vector3 } from "three";
import { degToRad } from "three/src/math/MathUtils.js";
import { Controls } from "../../../Game/constants/keyboardMap";
import CharacterModel from "../CharacterModel";
import { useControllerQuiz } from "@/hooks/useControllerQuiz";

// TODO: corrigir o correr do personagem
// TODO: melhorar a movimentação do personagem w,s,a,d
// TODO: ler doc do useKeyboardControls
// TODO: adicionar a animação de ação do personagem (pegar/pertar o item)
// TODO: corrigir w,s,a,d não funcionam quando o capslock está ativado

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
      RUN_SPEED: { value: 1.6, min: 0.2, max: 12, step: 0.1 },
      ROTATION_SPEED: {
        value: degToRad(0.5),
        min: degToRad(0.1),
        max: degToRad(5),
        step: degToRad(0.1),
      },
    }
  );

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
  const [sub] = useKeyboardControls<Controls>();
  const { character: rb } = useCharacterTeleport();

  const forward = useKeyboardControls<Controls>((state) => state.forward);
  const backward = useKeyboardControls<Controls>((state) => state.backward);
  const left = useKeyboardControls<Controls>((state) => state.left);
  const right = useKeyboardControls<Controls>((state) => state.right);
  const run = useKeyboardControls<Controls>((state) => state.run);
  const rotateRight = useKeyboardControls<Controls>(
    (state) => state.rotateRight
  );
  const rotateLeft = useKeyboardControls<Controls>((state) => state.rotateLeft);

  const { setOpenMap } = useControllerMap();
  const { setOpenQuiz } = useControllerQuiz();

  useEffect(() => {
    return sub(
      (state) => state.map,
      (press) => {
        if (press) {
          setOpenMap((openMap) => !openMap);
          setOpenQuiz(false);
        }
      }
    );
  }, [setOpenMap, setOpenQuiz, sub]);

  useFrame(({ camera }) => {
    if (rb.current) {
      const vel = rb.current.linvel();

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

      const speed = run ? RUN_SPEED : WALK_SPEED;

      if (movement.x !== 0 || movement.z !== 0) {
        characterRotationTarget.current = Math.atan2(movement.x, movement.z);
        vel.x =
          Math.sin(rotationTarget.current + characterRotationTarget.current) *
          speed;
        vel.z =
          Math.cos(rotationTarget.current + characterRotationTarget.current) *
          speed;
        if (speed === RUN_SPEED) {
          setAnimation("RobotArmature|Robot_Running");
        } else {
          setAnimation("RobotArmature|Robot_Walking");
        }
      } else {
        setAnimation("RobotArmature|Robot_Idle");
      }

      if (character.current) {
        character.current.rotation.y = lerpAngle(
          character.current.rotation.y,
          characterRotationTarget.current,
          0.1
        );
      }

      rb.current.setLinvel(vel, true);
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
    <RigidBody colliders={false} lockRotations ref={rb} position={[2, 15, 2]}>
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
