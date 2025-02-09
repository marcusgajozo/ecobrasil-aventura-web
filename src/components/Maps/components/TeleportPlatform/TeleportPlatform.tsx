import { RigidBody } from "@react-three/rapier";
import { TeleportPlatformModel } from "./TeleportPlatformModel";
import { Billboard, Box, Text, useKeyboardControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Controls } from "@/components/Game/constants/keyboardMap";
import { useMapsManager } from "@/hooks/useMapsManager";
import { useCharacterTeleport } from "@/hooks/useCharacterTeleport";
import { Vector3 } from "three";

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
      <RigidBody type="fixed" colliders="trimesh" position={positionPlatformA}>
        <TeleportPlatformModel />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="ball"
        position={positionPlatformA}
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
      <RigidBody type="fixed" colliders="trimesh" position={positionPlatformB}>
        <TeleportPlatformModel />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="ball"
        position={positionPlatformB}
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
    </>
  );
};
