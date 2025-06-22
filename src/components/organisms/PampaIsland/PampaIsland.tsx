import { DeerModel } from "@/components/atoms/animals/DeerModel";
import { ProximityInteractable } from "@/components/templates/ProximityInteractable";
import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { BigIsland } from "../../atoms/BigIsland";
import { QuestionBox } from "../../atoms/QuestionBox";
import { TeleportPlatform } from "../../atoms/TeleportPlatform";

export const PampaIsland = () => {
  const { handlePositionRelative, positionIsland, saved } = useBuildIsland({
    nameIsland: "pampa",
  });

  return (
    <>
      <TeleportPlatform
        positionPlatformA={handlePositionRelative({ x: -12, y: 6, z: 1 })}
        positionPlatformB={handlePositionRelative({ x: -12, y: 6, z: -8 })}
      />
      {!saved && (
        <QuestionBox position={handlePositionRelative({ x: -8, y: 8, z: 7 })} />
      )}

      <ProximityInteractable
        position={handlePositionRelative({ x: 5, y: 6, z: 8 })}
        type="fixed"
        promptText="Veado Campeiro"
        colliderPosition={[0, 1.5, 0]}
        colliderArgs={[0.4, 1.6, 1.0]}
      >
        <DeerModel scale={0.8} />
      </ProximityInteractable>

      <BigIsland color="#41A92E" positionMap={positionIsland} />
    </>
  );
};
