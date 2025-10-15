import { ProximityInteractable } from "@/components/proximity-interactable";
import { NAME_ISLAND, NAME_ISLAND_FORMATED } from "@/lib/constants/island";
import { TELEPORT_PLATFORM } from "@/lib/constants/teleport-plataform";
import { useTeleportCharacter } from "@/lib/hooks/use-teleport-character";
import { useToastCustom } from "@/lib/hooks/use-toast";
import { useManagerIslandStore } from "@/lib/stores/use-manager-island-store";
import theme from "@/styles/theme";
import { useCallback } from "react";
import { TeleportPlatformModel } from "./model-teleport-platform";

// TODO: colocar uma transição de teletransporte bonitinha
// TODO: teleportar personagem para outro mapa somente de mapa atual estiver salvo
// TODO: colocar um tempinho extra para o teletransporte mostrando a animação

type TeleportPlatformProps = {
  nameMap: (typeof NAME_ISLAND)[number];
};

export const TeleportPlatform = ({ nameMap }: TeleportPlatformProps) => {
  const islandsInformation = useManagerIslandStore(
    (state) => state.islandsInformation
  );
  const { handleTeleportCharacter } = useTeleportCharacter();

  const { showToast } = useToastCustom();

  const handleTeleport = useCallback(
    (pathIsland: "A" | "B") => {
      if (islandsInformation[nameMap].saved === false) {
        showToast({
          message: "Você precisa salvar o mapa atual antes de teletransportar!",
          backgroundColor: theme.colors.yallow,
        });
        return;
      }

      const destinationIsland =
        TELEPORT_PLATFORM[nameMap][pathIsland].destinationIsland;

      handleTeleportCharacter(
        destinationIsland.name,
        TELEPORT_PLATFORM[destinationIsland.name][
          destinationIsland.teleportPlatform
        ].position
      );
    },
    [handleTeleportCharacter, islandsInformation, nameMap, showToast]
  );

  return (
    <>
      <ProximityInteractable
        position={TELEPORT_PLATFORM[nameMap].A.position}
        billboardText={
          NAME_ISLAND_FORMATED[
            TELEPORT_PLATFORM[nameMap].A.destinationIsland.name
          ]
        }
        characterObjectInteraction={{
          control: "action",
          action: () => handleTeleport("A"),
        }}
        type="fixed"
        colliderPosition={[0, 2, 0]}
        sensorRadius={1}
      >
        <TeleportPlatformModel />
      </ProximityInteractable>

      <ProximityInteractable
        position={TELEPORT_PLATFORM[nameMap].B.position}
        billboardText={
          NAME_ISLAND_FORMATED[
            TELEPORT_PLATFORM[nameMap].B.destinationIsland.name
          ]
        }
        characterObjectInteraction={{
          control: "action",
          action: () => handleTeleport("B"),
        }}
        colliderPosition={[0, 2, 0]}
        sensorRadius={1}
        type="fixed"
      >
        <TeleportPlatformModel />
      </ProximityInteractable>
    </>
  );
};
