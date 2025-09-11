import { ProximityInteractable } from "@/components/templates/ProximityInteractable";
import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { Quaternion, Vector3 } from "three";
import { QuestionBoxModel } from "./QuestionBoxModel";
import { QUESTION_BOX_POSITION } from "@/lib/constants/quiz";
import { NAME_ISLAND } from "@/lib/constants/island";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import { useModalManagerStore } from "@/lib/stores/useModalManagerStore";

type QuestionBoxProps = {
  islandName: (typeof NAME_ISLAND)[number];
};

export const QuestionBox = ({ islandName }: QuestionBoxProps) => {
  const [isClose, setIsClose] = useState(false);
  const modelRef = useRef<RapierRigidBody>(null);

  const islandsInformation = useManagerIslandStore(
    (state) => state.islandsInformation
  );

  const handleOpenModal = useModalManagerStore(
    (state) => state.handleOpenModal
  );

  const rotationSpeed = 0.8;
  const position = QUESTION_BOX_POSITION[islandName];
  const islandIsSaved = islandsInformation[islandName].saved;

  useFrame((_, delta) => {
    if (modelRef.current && !islandIsSaved) {
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

  if (islandIsSaved) {
    return null;
  }

  return (
    <ProximityInteractable
      type="fixed"
      billboardText="[F] Abrir o quiz"
      onCollide={() => setIsClose(true)}
      onStopCollide={() => setIsClose(false)}
      characterObjectInteraction={{
        control: "action",
        action: () => handleOpenModal("quiz"),
      }}
      sensor
      position={position}
    >
      <RigidBody type="kinematicPosition" colliders="cuboid" ref={modelRef}>
        <QuestionBoxModel scale={6} />
      </RigidBody>
    </ProximityInteractable>
  );
};
