import { POSITIONS_MAPS } from "@/constants";
import { BigIsland } from "../BigIsland";
import { BushStone } from "../BushStone";
import { DryTree } from "../DryTree";
import { Tree1 } from "../Tree1";
import { Tree2 } from "../Tree2";
import { Billboard, Box, Text, useKeyboardControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useState } from "react";
import { Controls } from "@/components/Game/constants/keyboardMap";
import { useMapsManager } from "@/hooks/useMapsManager";
import { useCharacterTeleport } from "@/hooks/useCharacterTeleport";

// TODO: adiciona plataforma de teleporte
// TODO: colocar uma transição de teletransporte bonitinha
// TODO: criar um componente para teletransporte(para add nos outros mapas)
// TODO: teleportar personagem para outro mapa somente de mapa atual estiver salvo

export const Amazonia = () => {
  const [isCloseA, setIsCloseA] = useState(false);
  const [isCloseB, setIsCloseB] = useState(false);

  const { mapsPaths, currrentMap } = useMapsManager();
  const { teleportCharacter } = useCharacterTeleport();

  const [sub] = useKeyboardControls<Controls>();

  useEffect(() => {
    return sub(
      (state) => state.action,
      (press) => {
        if (press) {
          if (isCloseA) {
            const map = mapsPaths.find((map) => map.name === currrentMap);
            if (!map) return;
            teleportCharacter(map.path.A);
          }
          if (isCloseB) {
            const map = mapsPaths.find((map) => map.name === currrentMap);
            if (!map) return;
            teleportCharacter(map.path.B);
          }
        }
      }
    );
  }, [currrentMap, isCloseA, isCloseB, mapsPaths, sub, teleportCharacter]);

  return (
    <>
      <RigidBody
        type="fixed"
        colliders="ball"
        position={[-12, 8, 1]}
        onIntersectionEnter={() => setIsCloseA((prev) => !prev)}
        onIntersectionExit={() => setIsCloseA((prev) => !prev)}
        sensor
      >
        <Box>
          <Billboard>
            <Text
              position={[0, 1.2, 0]}
              fontSize={0.5}
              color="black"
              anchorX="center"
              anchorY="bottom"
            >
              {isCloseA ? "Caminho A" : ""}
            </Text>
          </Billboard>
        </Box>
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="ball"
        position={[-12, 8, -3]}
        onIntersectionEnter={() => setIsCloseB((prev) => !prev)}
        onIntersectionExit={() => setIsCloseB((prev) => !prev)}
        sensor
      >
        <Box>
          <Billboard>
            <Text
              position={[0, 1.2, 0]}
              fontSize={0.5}
              color="black"
              anchorX="center"
              anchorY="bottom"
            >
              {isCloseB ? "Caminho B" : ""}
            </Text>
          </Billboard>
        </Box>
      </RigidBody>
      <BushStone scale={1} position={[10, 6, 0]} />
      <BushStone scale={1} position={[0, 6, 0]} />
      <DryTree scale={1} position={[3, 8, 0]} />
      <Tree2 scale={4} position={[10, 11, 0]} />
      <Tree2 scale={4} position={[10, 11, 13]} />
      <Tree1 scale={4} position={[0, 11, 10]} />
      <Tree1 scale={4} position={[5, 11, 10]} />
      <BigIsland positionMap={POSITIONS_MAPS["amazonia"]} />
    </>
  );
};
