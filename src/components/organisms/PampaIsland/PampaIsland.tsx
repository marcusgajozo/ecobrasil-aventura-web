import { DeerModel } from "@/components/atoms/animals/DeerModel";
import { EmuModel } from "@/components/atoms/animals/EmuModel";
import { ProximityInteractable } from "@/components/templates/ProximityInteractable";
import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { useControls } from "leva";
import { degToRad } from "three/src/math/MathUtils.js";
import { BigIsland } from "../../atoms/BigIsland";
import { QuestionBox } from "../../atoms/QuestionBox";
import { TeleportPlatform } from "../../atoms/TeleportPlatform";
import { IslandDome } from "@/components/IslandDome/IslandDome";

export const PampaIsland = () => {
  const { handlePositionRelative, positionIsland, saved } = useBuildIsland({
    nameIsland: "pampa",
  });

  const { deerRotationY } = useControls("Veado", {
    deerRotationY: {
      value: 27,
      min: -180,
      max: 180,
      step: 1,
      label: "Rotação Y (graus)",
    },
  });

  return (
    <>
      <TeleportPlatform nameMap="pampa" />
      {!saved && (
        <QuestionBox position={handlePositionRelative({ x: -8, y: 8, z: 7 })} />
      )}

      <ProximityInteractable
        position={handlePositionRelative({ x: -6, y: 6, z: -12 })}
        rotation={[0, degToRad(deerRotationY), 0]}
        type="fixed"
        billboardText="Veado Campeiro"
        colliderPosition={[0, 1.5, 0]}
        colliderArgs={[0.4, 1.6, 1.0]}
      >
        <DeerModel scale={0.8} />
      </ProximityInteractable>

      <IslandDome
        radius={17.5}
        opacity={0.35}
        position={handlePositionRelative({ x: 0, y: 8, z: 0 })}
      />

      <ProximityInteractable
        position={handlePositionRelative({ x: 5, y: 8.7, z: -10 })}
        type="fixed"
        billboardText="Ema"
        billboardTextPosition={[0, 3.5, 0]}
        colliderPosition={[0, -1, 0]}
        colliderArgs={[1, 2, 1.0]}
        sensorRadius={4}
      >
        <EmuModel scale={0.026} />
      </ProximityInteractable>

      <BigIsland color="#41A92E" positionMap={positionIsland} />
    </>
  );
};
