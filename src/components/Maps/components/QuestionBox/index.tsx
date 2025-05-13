import { useCharacterObjectInteraction } from "@/hooks/useCharacterObjectInteraction";
import { useControllerQuiz } from "@/hooks/useControllerQuiz";
import { Billboard, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useRef } from "react";
import { Quaternion, Vector3 } from "three";
import { Model } from "./model";

type QuestionBoxProps = {
  position: Vector3;
};

export const QuestionBox = ({ position }: QuestionBoxProps) => {
  const { setOpenQuiz } = useControllerQuiz();

  const { isClose, setIsClose } = useCharacterObjectInteraction({
    control: "action",
    action: () => setOpenQuiz(true),
  });

  const modelRef = useRef<RapierRigidBody>(null);
  const rotationSpeed = 0.8;

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

      if (!isClose) {
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
          setIsClose(true);
        }}
        onIntersectionExit={() => setIsClose(false)}
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
            {isClose ? "[F] Abrir Quiz" : ""}
          </Text>
        </Billboard>
      </RigidBody>
    </>
  );
};
