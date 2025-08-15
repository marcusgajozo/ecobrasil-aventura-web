import { DeerModel } from "@/components/atoms/animals/DeerModel";
import { EmuModel } from "@/components/atoms/animals/EmuModel";
import { ProximityInteractable } from "@/components/templates/ProximityInteractable";
import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { usePlayAudio } from "@/lib/hooks/usePlayAudio";
import { useControls } from "leva";
import { degToRad } from "three/src/math/MathUtils.js";

import deerSrc from "@audios/animals/deer.mp3";
import emaSrc from "@audios/animals/ema.mp3";

export const PampaIsland = () => {
  const { handlePositionRelative } = useBuildIsland({
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

  const { playAudio, stopAudio } = usePlayAudio();

  return (
    <>
      <ProximityInteractable
        position={handlePositionRelative({ x: -6, y: 6, z: -12 })}
        rotation={[0, degToRad(deerRotationY), 0]}
        type="fixed"
        billboardText="Veado Campeiro"
        characterObjectInteraction={{
          control: "action",
          action: () => playAudio(deerSrc),
        }}
        onStopCollide={() => stopAudio()}
        colliderPosition={[0, 1.5, 0]}
      >
        <DeerModel scale={0.8} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 5, y: 8.7, z: -10 })}
        type="fixed"
        billboardText="Ema\nPressione [F] para emitir o som"
        billboardTextPosition={[0, 3.5, 0]}
        colliderPosition={[0, -1, 0]}
        sensorRadius={4}
        characterObjectInteraction={{
          control: "action",
          action: () => playAudio(emaSrc),
        }}
        onStopCollide={() => stopAudio()}
      >
        <EmuModel scale={0.026} />
      </ProximityInteractable>
    </>
  );
};
