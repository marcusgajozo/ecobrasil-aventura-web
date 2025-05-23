import { RigidBody } from "@react-three/rapier";
import { TeleportPlatformModel } from "./TeleportPlatformModel";
import { Billboard, Box, Text, useKeyboardControls } from "@react-three/drei";
import { useCallback, useEffect, useState } from "react";
import { Controls } from "@/screens/Game/constants/keyboardMap";
import { useMapsManager } from "@/lib/hooks/useMapsManager";
import { useCharacterTeleport } from "@/lib/hooks/useCharacterTeleport";
import { Vector3 } from "three";

// TODO: colocar uma transição de teletransporte bonitinha
// TODO: teleportar personagem para outro mapa somente de mapa atual estiver salvo
// TODO: colocar um tempinho extra para o teletransporte mostrando a animação

type TeleportPlatformProps = {
  positionPlatformA: Vector3;
  positionPlatformB: Vector3;
};

export const TeleportPlatform = ({
  positionPlatformA,
  positionPlatformB,
}: TeleportPlatformProps) => {
  const [isCloseA, setIsCloseA] = useState(false);
  const [isCloseB, setIsCloseB] = useState(false);

  const { mapsPaths, currrentMap, savePathName, savedMap } = useMapsManager();
  const { teleportCharacter } = useCharacterTeleport();

  const [sub] = useKeyboardControls<Controls>();

  const handleTeleport = useCallback(
    (mapPath: "A" | "B") => {
      if (savedMap[currrentMap].saved === false) return;
      const map = mapsPaths.find((map) => map.name === currrentMap);
      if (!map) return;
      savePathName(map.path[mapPath], mapPath);
      teleportCharacter(map.path[mapPath]);
    },
    [currrentMap, mapsPaths, savePathName, savedMap, teleportCharacter]
  );

  useEffect(() => {
    return sub(
      (state) => state.action,
      (press) => {
        if (press) {
          if (isCloseA) {
            handleTeleport("A");
          }
          if (isCloseB) {
            handleTeleport("B");
          }
        }
      }
    );
  }, [handleTeleport, isCloseA, isCloseB, sub]);

  return (
    <>
      <RigidBody type="fixed" colliders="trimesh" position={positionPlatformA}>
        <TeleportPlatformModel />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="ball"
        position={[
          positionPlatformA.x,
          positionPlatformA.y + 2,
          positionPlatformA.z,
        ]}
        onIntersectionEnter={() => setIsCloseA((prev) => !prev)}
        onIntersectionExit={() => setIsCloseA((prev) => !prev)}
        sensor
      >
        <Box>
          <meshStandardMaterial transparent opacity={0} />
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
      <RigidBody type="fixed" colliders="trimesh" position={positionPlatformB}>
        <TeleportPlatformModel />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="ball"
        position={[
          positionPlatformB.x,
          positionPlatformB.y + 2,
          positionPlatformB.z,
        ]}
        onIntersectionEnter={() => setIsCloseB((prev) => !prev)}
        onIntersectionExit={() => setIsCloseB((prev) => !prev)}
        sensor
      >
        <Box>
          <meshStandardMaterial transparent opacity={0} />
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
    </>
  );
};
