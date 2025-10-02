import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { degToRad } from "three/src/math/MathUtils.js";
import { FixedElement } from "../FixedElement";
import { ModelTree2 } from "../ModelTree2";
import { ModelCattail2 } from "../ModelCattail2";
import { ModelBushStone } from "../ModelBushStone";
import { ProximityInteractable } from "../ProximityInteractable";
import { ModelSnake } from "../pantanal/ModelSnake";
import { usePlayAudio } from "@/lib/hooks/usePlayAudio";
import { ModelTree1 } from "../ModelTree1";
import emaMp3 from "@audios/pampa/rhea.mp3";

export const IslandAmazonia = () => {
  const { handlePositionRelative } = useBuildIsland({
    nameIsland: "amazonia",
  });

  const { playAudio, stopAudio } = usePlayAudio();

  return (
    <>
      <ProximityInteractable
        position={handlePositionRelative({ x: 12, y: 6.2, z: -6 })}
        rotation={[0, degToRad(20), 0]}
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
        <ModelSnake scale={2} />
      </ProximityInteractable>

      <FixedElement
        position={handlePositionRelative({ x: 10, y: 11.1, z: -9 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelTree2 scale={3} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: -6, y: 11, z: -12 })}
        rotation={[0, degToRad(1), 0]}
      >
        <ModelTree1 scale={4} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: -8, y: 11.1, z: 10 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelTree2 scale={3} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 1, y: 6, z: -9 })}>
        <ModelBushStone scale={1} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 1, y: 6, z: 15 })}>
        <ModelBushStone scale={1} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -14, y: 6, z: -4 })}>
        <ModelBushStone scale={1} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -14, y: 6, z: 6 })}>
        <ModelCattail2 scale={0.3} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -14, y: 6, z: 6 })}>
        <ModelCattail2 scale={0.3} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 10, y: 6, z: 6 })}>
        <ModelCattail2 scale={0.2} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -4, y: 6, z: 14 })}>
        <ModelCattail2 scale={0.3} />
      </FixedElement>
    </>
  );
};
