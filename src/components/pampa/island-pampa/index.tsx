import { ModelDeer } from "@/components/pampa/model-deer";
import { ProximityInteractable } from "@/components/proximity-interactable";
import { useBuildIsland } from "@/lib/hooks/use-build-island";
import { usePlayAudio } from "@/lib/hooks/use-play-audio";
import { degToRad } from "three/src/math/MathUtils.js";

import { ModelBush } from "@/components/model-bush";
import { ModelFlower } from "@/components/model-flower";
import { ModelRhea } from "@/components/pampa/model-rhea";
import { ModelWantWant } from "@/components/pampa/model-want-want";
import { ModelZorrilho } from "@/components/pampa/model-zorrilho";
import deerMp3 from "@audios/pampa/deer.mp3";
import emaMp3 from "@audios/pampa/rhea.mp3";
import { ModelBushStone } from "../../model-bush-stone";
import { ModelTree1 } from "../../model-tree-1";

export const IslandPampa = () => {
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
          action: () => playAudio(deerMp3),
        }}
        onStopCollide={() => stopAudio()}
        colliderPosition={[0, 1.5, 0]}
      >
        <ModelDeer scale={0.8} />
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
          action: () => playAudio(emaMp3),
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
          action: () => playAudio(emaMp3),
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
          action: () => playAudio(emaMp3),
        }}
        onStopCollide={() => stopAudio()}
      >
        <ModelZorrilho scale={1.4} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 10, y: 12, z: -5 })}
        type="fixed"
      >
        <ModelTree1 scale={5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -10, y: 12, z: 6 })}
        type="fixed"
      >
        <ModelTree1 scale={5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 3, y: 12, z: 10 })}
        type="fixed"
      >
        <ModelTree1 scale={5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 10, y: 6, z: 12 })}
        type="fixed"
      >
        <ModelBushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 3, y: 6, z: -14 })}
        type="fixed"
      >
        <ModelBushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -12, y: 6, z: -3 })}
        type="fixed"
      >
        <ModelBushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -8, y: 6, z: 10 })}
        type="fixed"
      >
        <ModelBushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 14, y: 6, z: 1 })}
        type="fixed"
      >
        <ModelBushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -1, y: 6, z: 9 })}
        type="fixed"
      >
        <ModelBushStone scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -1, y: 6, z: 9 })}
        type="fixed"
      >
        <ModelBushStone scale={1.5} />
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
