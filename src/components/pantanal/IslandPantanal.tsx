import { useBuildIsland } from "@/lib/hooks/useBuildIsland";
import { usePlayAudio } from "@/lib/hooks/usePlayAudio";
import { degToRad } from "three/src/math/MathUtils.js";
import { ProximityInteractable } from "../ProximityInteractable";
import { ModelAlligator } from "./ModelAlligator";
import { ModelCapybara } from "./ModelCapybara";
import { ModelPinkIpe } from "./ModelPinkIpe";
import { ModelSnake } from "./ModelSnake";
import { ModelTuiuiu } from "./ModelTuiuiu";
import emaMp3 from "@audios/pampa/rhea.mp3";

export const IslandPantanal = () => {
  const { handlePositionRelative } = useBuildIsland({
    nameIsland: "pantanal",
  });

  const { playAudio, stopAudio } = usePlayAudio();

  return (
    <>
      <ProximityInteractable
        position={handlePositionRelative({ x: 5, y: 6.8, z: -10 })}
        rotation={[0, degToRad(-40), 0]}
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
        <ModelCapybara scale={1} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 2, y: 6.8, z: -10 })}
        rotation={[0, degToRad(-40), 0]}
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
        <ModelCapybara scale={1} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 2, y: 7.4, z: -7 })}
        rotation={[0, degToRad(-40), 0]}
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
        <ModelCapybara scale={1.6} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 2, y: 8, z: 10 })}
        rotation={[0, degToRad(180), 0]}
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
        <ModelTuiuiu scale={1.9} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 12, y: 6.9, z: 2 })}
        rotation={[0, degToRad(180), 0]}
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
        <ModelAlligator scale={3} />
      </ProximityInteractable>

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

      <ProximityInteractable
        position={handlePositionRelative({ x: 8, y: 6, z: 9 })}
        rotation={[0, degToRad(140), 0]}
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
        <ModelPinkIpe scale={0.08} />
      </ProximityInteractable>
    </>
  );
};
