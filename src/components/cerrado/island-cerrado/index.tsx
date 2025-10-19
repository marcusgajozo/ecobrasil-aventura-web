import { InteractionPrompt } from '@/components/interaction-prompt'
import { ModelBush } from '@/components/model-bush'
import { useBuildIsland } from '@/lib/hooks/use-build-island'
import { degToRad } from 'three/src/math/MathUtils.js'
import { FixedElement } from '../../fixed-element'
import { ModelBushStone } from '../../model-bush-stone'
import { ModelTree1 } from '../../model-tree-1'
import { ModelTree2 } from '../../model-tree-2'
import { ProximityInteractable } from '../../proximity-interactable'
import { ModelJaguar } from '../jaguar'
import { ModelAnteater } from '../model-anteater'
import { ModelBlueAndYellowMacaw } from '../model-blue-and-yellow-macaw'
import { ModelGiantArmadillo } from '../model-giant-armadillo'

export const IslandCerrado = () => {
  const { handlePositionRelative } = useBuildIsland({
    nameIsland: 'cerrado',
  })

  return (
    <>
      <ProximityInteractable
        position={handlePositionRelative({ x: 12, y: 6.6, z: -6 })}
        rotation={[0, degToRad(180), 0]}
        interactionPrompt={<InteractionPrompt title="Tatu-canastra" />}
        billboardPosition={[0, 2, 0]}
        colliderPosition={[0, -1, 0]}
      >
        <ModelGiantArmadillo scale={1.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -5, y: 7.2, z: -12 })}
        rotation={[0, degToRad(-40), 0]}
        interactionPrompt={<InteractionPrompt title="Onça-pintada" />}
        billboardPosition={[0, 2, 0]}
        colliderPosition={[0, -1, 0]}
      >
        <ModelJaguar scale={2} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 3, y: 6.7, z: 6 })}
        rotation={[0, degToRad(160), 0]}
        interactionPrompt={<InteractionPrompt title="Tamanduá-bandeira" />}
        billboardPosition={[0, 2, 0]}
        colliderPosition={[0, -1, 0]}
      >
        <ModelAnteater scale={2.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 2, y: 10, z: -11 })}
        rotation={[0, degToRad(100), 0]}
        interactionPrompt={<InteractionPrompt title="Arara-canindé" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelBlueAndYellowMacaw scale={0.7} />
      </ProximityInteractable>

      <FixedElement
        position={handlePositionRelative({ x: 10, y: 11.1, z: -9 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelTree2 scale={3} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: 6, y: 11.1, z: 12 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelTree2 scale={3} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: 2, y: 8.4, z: -12 })}
        rotation={[0, degToRad(1), 0]}
      >
        <ModelTree2 scale={1.6} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: 12, y: 12, z: -11 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelBlueAndYellowMacaw scale={0.7} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: 10, y: 12.5, z: -6 })}
        rotation={[0, degToRad(70), 0]}
      >
        <ModelBlueAndYellowMacaw scale={0.7} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: 9, y: 13, z: -9 })}
        rotation={[0, degToRad(1), 0]}
      >
        <ModelBlueAndYellowMacaw scale={0.7} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: -8, y: 11.8, z: -10 })}
        rotation={[0, degToRad(80), 0]}
      >
        <ModelBlueAndYellowMacaw scale={0.7} />
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
        <ModelBush scale={1} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 10, y: 6, z: -12 })}>
        <ModelBush scale={1} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 13, y: 6, z: 8 })}>
        <ModelBush scale={1} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -4, y: 6, z: 14 })}>
        <ModelBush scale={1} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: 14, y: 6, z: -2 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelBush scale={1} />
      </FixedElement>
    </>
  )
}
