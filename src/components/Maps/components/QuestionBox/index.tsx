import { Controls } from "@/components/Game/constants/keyboardMap";
import { Billboard, Text, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Quaternion, Vector3 } from "three";
import { Model } from "./model";
import { useControllerQuiz } from "@/hooks/useControllerQuiz";

type QuestionBoxProps = {
  position: Vector3;
};

export const QuestionBox = ({ position }: QuestionBoxProps) => {
  const [isCloseA, setIsCloseA] = useState(false);
  const [sub] = useKeyboardControls<Controls>();
  const { setOpenQuiz } = useControllerQuiz();

  const modelRef = useRef<RapierRigidBody>(null);
  const rotationSpeed = 0.8;

  useEffect(() => {
    return sub(
      (state) => state.action,
      (press) => {
        if (press) {
          if (isCloseA) {
            setOpenQuiz(true);
          }
        }
      }
    );
  }, [isCloseA, setOpenQuiz, sub]);

  useFrame((_, delta) => {
    if (modelRef.current) {
      const angle = rotationSpeed * delta;
      const quatIncrement = new Quaternion().setFromAxisAngle(
        new Vector3(0, 1, 0),
        angle
      );

      const currentRotation = modelRef.current.rotation();
      const quat = new Quaternion(
        currentRotation.x,
        currentRotation.y,
        currentRotation.z,
        currentRotation.w
      );

      if (!isCloseA) {
        quat.multiply(quatIncrement);
      }

      modelRef.current.setNextKinematicRotation(quat);
    }
  });

  return (
    <>
      <RigidBody
        type="fixed"
        onIntersectionEnter={() => {
          setIsCloseA(true);
        }}
        onIntersectionExit={() => setIsCloseA(false)}
        sensor
        position={position}
      >
        <CuboidCollider args={[2, 2, 2]} />
        <RigidBody type="kinematicPosition" colliders="cuboid" ref={modelRef}>
          <Model scale={6} />
        </RigidBody>

        <Billboard>
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.4}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineColor="black"
            outlineWidth={0.05}
          >
            {isCloseA ? "[F] Abrir Quiz" : ""}
          </Text>
        </Billboard>
      </RigidBody>
    </>
  );
};
