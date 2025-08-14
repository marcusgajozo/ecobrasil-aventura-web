import { NAME_ISLAND } from "@/lib/constants";
import { Controls } from "@/lib/constants/keyboardMap";
import { TELEPORT_PLATFORM_CONFIG } from "@/lib/constants/teleportPlataform";
import { useCharacterTeleport } from "@/lib/hooks/useCharacterTeleport";
import { useMapsManager } from "@/lib/hooks/useMapsManager";
import { useToastCustom } from "@/lib/hooks/useToastCustom";
import theme from "@/styles/theme";
import { Billboard, Box, Text, useKeyboardControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useCallback, useEffect, useState } from "react";
import { TeleportPlatformModel } from "./TeleportPlatformModel";
import { ProximityInteractable } from "@/components/templates/ProximityInteractable";

// TODO: colocar uma transição de teletransporte bonitinha
// TODO: teleportar personagem para outro mapa somente de mapa atual estiver salvo
// TODO: colocar um tempinho extra para o teletransporte mostrando a animação

type TeleportPlatformProps = {
  nameMap: (typeof NAME_ISLAND)[number];
};

export const TeleportPlatform = ({ nameMap }: TeleportPlatformProps) => {
  const [isCloseA, setIsCloseA] = useState(false);
  const [isCloseB, setIsCloseB] = useState(false);

  const { savedMap } = useMapsManager();
  const { teleportCharacter } = useCharacterTeleport();

  const [sub] = useKeyboardControls<Controls>();
  const { showToast } = useToastCustom();

  const handleTeleport = useCallback(
    (mapPath: "A" | "B") => {
      if (savedMap[nameMap].saved === false) {
        showToast({
          message: "Você precisa salvar o mapa atual antes de teletransportar!",
          backgroundColor: theme.colors.yallow,
        });
        return;
      }

      const destinationIsland =
        TELEPORT_PLATFORM_CONFIG[nameMap][mapPath].destinationIsland;

      teleportCharacter(
        destinationIsland.name,
        TELEPORT_PLATFORM_CONFIG[destinationIsland.name][
          destinationIsland.teleportPlatform
        ].position
      );
    },
    [nameMap, savedMap, showToast, teleportCharacter]
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
      <ProximityInteractable
        position={TELEPORT_PLATFORM_CONFIG[nameMap].A.position}
        billboardText={isCloseA ? "Caminho A" : ""}
        onCollide={() => setIsCloseA(true)}
        onStopCollide={() => setIsCloseA(false)}
        type="fixed"
      >
        <TeleportPlatformModel />
      </ProximityInteractable>

      <RigidBody
        type="fixed"
        colliders="trimesh"
        position={TELEPORT_PLATFORM_CONFIG[nameMap].B.position}
      >
        <TeleportPlatformModel />
      </RigidBody>
      <RigidBody
        type="fixed"
        colliders="ball"
        position={TELEPORT_PLATFORM_CONFIG[nameMap].B.position}
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
