import { DeerModel } from "@/components/atoms/animals/DeerModel";
import { ProximityInteractable } from "@/components/templates/ProximityInteractable";
import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { usePlayAudio } from "@/lib/hooks/usePlayAudio";
import { degToRad } from "three/src/math/MathUtils.js";

import { Tree1 } from "@/components/atoms/Tree1";
import { BushStone } from "@/components/BushStone";
import { ModelBush } from "@/components/ModelBush";
import { ModelFlower } from "@/components/ModelFlower";
import { ModelRhea } from "@/components/ModelRhea";
import { ModelWantWant } from "@/components/ModelWantWant";
import { ModelZorrilho } from "@/components/ModelZorrilho";
import deerSrc from "@audios/animals/deer.mp3";
import emaSrc from "@audios/animals/ema.mp3";

export const PampaIsland = () => {
  const { handlePositionRelative } = useBuildIsland({
    nameIsland: "pampa",
  });

  const { playAudio, stopAudio } = usePlayAudio();

  return (
    <>
      <ProximityInteractable
        position={handlePositionRelative({ x: -6, y: 6, z: -12 })}
        rotation={[0, degToRad(27), 0]}
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
        position={handlePositionRelative({ x: 5, y: 9, z: -10 })}
        rotation={[0, degToRad(-130), 0]}
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
        <ModelRhea scale={2.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 6, y: 6.6, z: 8 })}
        rotation={[0, degToRad(-140), 0]}
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
        <ModelWantWant scale={1.4} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -3, y: 6.6, z: 11 })}
        rotation={[0, degToRad(90), 0]}
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
        <ModelZorrilho scale={1.4} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 10, y: 12, z: -5 })}
        type="fixed"
      >
        <Tree1 scale={5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -10, y: 12, z: 6 })}
        type="fixed"
      >
        <Tree1 scale={5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 3, y: 12, z: 10 })}
        type="fixed"
      >
        <Tree1 scale={5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 10, y: 6, z: 12 })}
        type="fixed"
      >
        <BushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 3, y: 6, z: -14 })}
        type="fixed"
      >
        <BushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -12, y: 6, z: -3 })}
        type="fixed"
      >
        <BushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -8, y: 6, z: 10 })}
        type="fixed"
      >
        <BushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 14, y: 6, z: 1 })}
        type="fixed"
      >
        <BushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -1, y: 6, z: 9 })}
        type="fixed"
      >
        <BushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -1, y: 6, z: 9 })}
        type="fixed"
      >
        <BushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 12, y: 6, z: -8 })}
        type="fixed"
      >
        <ModelBush scale={1} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -12, y: 6, z: 8 })}
        type="fixed"
      >
        <ModelBush scale={1} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 10, y: 6, z: 5 })}
        type="fixed"
      >
        <ModelBush scale={1} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -9, y: 6, z: -11 })}
        type="fixed"
      >
        <ModelFlower scale={0.7} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -2, y: 6, z: -15 })}
        type="fixed"
      >
        <ModelFlower scale={0.7} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 3, y: 6, z: 3 })}
        type="fixed"
      >
        <ModelFlower scale={0.7} />
      </ProximityInteractable>
    </>
  );
};
