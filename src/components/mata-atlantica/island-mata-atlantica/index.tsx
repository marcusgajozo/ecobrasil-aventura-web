import { ProximityInteractable } from "@/components/proximity-interactable";
import { useBuildIsland } from "@/lib/hooks/use-build-island";
import { usePlayAudio } from "@/lib/hooks/use-play-audio";
import { degToRad } from "three/src/math/MathUtils.js";

import { ModelBush } from "@/components/model-bush";
import { ModelFlower } from "@/components/model-flower";
import deerMp3 from "@audios/pampa/deer.mp3";
import emaMp3 from "@audios/pampa/rhea.mp3";
import { ModelBushStone } from "../../model-bush-stone";
import { ModelTree1 } from "../../model-tree-1";
import { ModelGoldenLionTamarin } from "../model-golden-lion-tamarin";
import { ModelRufousRumpedThrush } from "../model-rufous-rumped-thrush";
import { ModelTapir } from "../model-tapir/model-tapir";
import { ModelToucan } from "../model-toucan";

export const IslandMataAtlantica = () => {
  const { handlePositionRelative } = useBuildIsland({
    nameIsland: "mata-atlantica",
  });

  const { playAudio, stopAudio } = usePlayAudio();

  return (
    <>
      <ProximityInteractable
        position={handlePositionRelative({ x: 8, y: 7.1, z: -7 })}
        rotation={[0, degToRad(-40), 0]}
        type="fixed"
        billboardText="Veado Campeiro"
        characterObjectInteraction={{
          control: "action",
          action: () => playAudio(deerMp3),
        }}
        onStopCollide={() => stopAudio()}
        colliderPosition={[0, 1.5, 0]}
      >
        <ModelGoldenLionTamarin scale={1.2} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -7, y: 6.4, z: -11 })}
        rotation={[0, degToRad(-70), 0]}
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
        <ModelRufousRumpedThrush scale={0.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 6, y: 6.6, z: 8 })}
        rotation={[0, degToRad(120), 0]}
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
        <ModelTapir scale={1.4} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -3, y: 7.1, z: 11 })}
        rotation={[0, degToRad(-100), 0]}
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
        <ModelToucan scale={1} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 1, y: 14, z: 8 })}
        type="fixed"
      >
        <ModelToucan scale={1} />
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
