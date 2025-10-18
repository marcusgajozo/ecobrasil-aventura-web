import { ProximityInteractable } from '@/components/proximity-interactable'
import { useBuildIsland } from '@/lib/hooks/use-build-island'
import { degToRad } from 'three/src/math/MathUtils.js'

import { FixedElement } from '@/components/fixed-element'
import { InteractionPrompt } from '@/components/interaction-prompt'
import { ModelBush } from '@/components/model-bush'
import { ModelFlower } from '@/components/model-flower'
import { ModelBushStone } from '../../model-bush-stone'
import { ModelTree1 } from '../../model-tree-1'
import { ModelGoldenLionTamarin } from '../model-golden-lion-tamarin'
import { ModelRufousRumpedThrush } from '../model-rufous-rumped-thrush'
import { ModelTapir } from '../model-tapir/model-tapir'
import { ModelToucan } from '../model-toucan'

export const IslandMataAtlantica = () => {
  const { handlePositionRelative } = useBuildIsland({
    nameIsland: 'mata-atlantica',
  })

  return (
    <>
      <ProximityInteractable
        position={handlePositionRelative({ x: 8, y: 7.1, z: -7 })}
        rotation={[0, degToRad(-40), 0]}
        type="fixed"
        interactionPrompt={<InteractionPrompt title="Mico-leão-dourado" />}
        billboardPosition={[0, 2, 0]}
        colliderPosition={[0, 1.5, 0]}
      >
        <ModelGoldenLionTamarin scale={1.2} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -7, y: 6.4, z: -11 })}
        rotation={[0, degToRad(-70), 0]}
        type="fixed"
        interactionPrompt={<InteractionPrompt title="Sabiá da laranjeira" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelRufousRumpedThrush scale={0.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 6, y: 6.6, z: 8 })}
        rotation={[0, degToRad(120), 0]}
        type="fixed"
        interactionPrompt={<InteractionPrompt title="Anta" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelTapir scale={1.4} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -3, y: 7.1, z: 11 })}
        rotation={[0, degToRad(-100), 0]}
        type="fixed"
        interactionPrompt={<InteractionPrompt title="Tucano" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelToucan scale={1} />
      </ProximityInteractable>

      <FixedElement position={handlePositionRelative({ x: 1, y: 14, z: 8 })}>
        <ModelToucan scale={1} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 10, y: 12, z: -5 })}>
        <ModelTree1 scale={5} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -10, y: 12, z: 6 })}>
        <ModelTree1 scale={5} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 3, y: 12, z: 10 })}>
        <ModelTree1 scale={5} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 10, y: 6, z: 12 })}>
        <ModelBushStone scale={1.5} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 3, y: 6, z: -14 })}>
        <ModelBushStone scale={1.5} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -12, y: 6, z: -3 })}>
        <ModelBushStone scale={1.5} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -8, y: 6, z: 10 })}>
        <ModelBushStone scale={1.5} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 14, y: 6, z: 1 })}>
        <ModelBushStone scale={1.5} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -1, y: 6, z: 9 })}>
        <ModelBushStone scale={1.5} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -1, y: 6, z: 9 })}>
        <ModelBushStone scale={1.5} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 12, y: 6, z: -8 })}>
        <ModelBush scale={1} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -12, y: 6, z: 8 })}>
        <ModelBush scale={1} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 10, y: 6, z: 5 })}>
        <ModelBush scale={1} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -9, y: 6, z: -11 })}>
        <ModelFlower scale={0.7} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -2, y: 6, z: -15 })}>
        <ModelFlower scale={0.7} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: 3, y: 6, z: 3 })}>
        <ModelFlower scale={0.7} />
      </FixedElement>
    </>
  )
}
