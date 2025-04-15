import { Controls } from "@/components/Game/constants/keyboardMap";
import { Billboard, Box, Text, useKeyboardControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useState } from "react";
import { Vector3 } from "three";
import { Model } from "./model";

type QuestionBoxProps = {
  position: Vector3;
};

// TODO: adicionar interação com a caixa de pergunta para abrir o quiz
// TODO: adicionar inimação na caixa de pergunta(girar)

export const QuestionBox = ({ position }: QuestionBoxProps) => {
  const [isCloseA, setIsCloseA] = useState(false);

  //   const { mapsPaths, currrentMap, savePathName, savedMap } = useMapsManager();
  //   const { teleportCharacter } = useCharacterTeleport();

  const [sub] = useKeyboardControls<Controls>();

  useEffect(() => {
    return sub(
      (state) => state.action,
      (press) => {
        if (press) {
          if (isCloseA) {
            console.log("Apertou o botão");
          }
        }
      }
    );
  }, [isCloseA, sub]);

  return (
    <>
      <RigidBody
        type="fixed"
        colliders="trimesh"
        onIntersectionEnter={() => {
          setIsCloseA((prev) => !prev);
          console.log("entrou");
        }}
        onIntersectionExit={() => setIsCloseA((prev) => !prev)}
        sensor
        position={position}
      >
        <RigidBody type="fixed" colliders="trimesh">
          <Model scale={6} />
        </RigidBody>
        {isCloseA && (
          <Box>
            <Billboard>
              <Text
                position={[0, 1.2, 0]}
                fontSize={0.5}
                color="black"
                anchorX="center"
                anchorY="bottom"
              >
                {"Caminho A"}
              </Text>
            </Billboard>
          </Box>
        )}
      </RigidBody>
    </>
  );
};
