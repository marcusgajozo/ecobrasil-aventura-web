import { InteractionPrompt } from '@/components/interaction-prompt'
import { ModelGrass2 } from '@/components/model-grass-2'
import { useBuildIsland } from '@/lib/hooks/use-build-island'
import { degToRad } from 'three/src/math/MathUtils.js'
import { FixedElement } from '../../fixed-element'
import { ModelBushStone } from '../../model-bush-stone'
import { ModelCattail2 } from '../../model-cattail-2'
import { ModelTree1 } from '../../model-tree-1'
import { ModelTree2 } from '../../model-tree-2'
import { ModelSnake } from '../../pantanal/model-snake'
import { ProximityInteractable } from '../../proximity-interactable'
import { ModelAlligator } from '../model-alligator'
import { ModelParrot } from '../model-parrot'
import { ModelSloth } from '../model-sloth'

export const IslandAmazonia = () => {
  const { handlePositionRelative } = useBuildIsland({
    nameIsland: 'amazonia',
  })

  return (
    <>
      <ProximityInteractable
        position={handlePositionRelative({ x: 12, y: 6.2, z: -6 })}
        rotation={[0, degToRad(20), 0]}
        interactionPrompt={<InteractionPrompt title="Sucuri" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelSnake scale={2} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -5, y: 7, z: -12 })}
        rotation={[0, degToRad(20), 0]}
        interactionPrompt={<InteractionPrompt title="Bicho-preguiça" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelSloth scale={1} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 12, y: 6.7, z: 6 })}
        rotation={[0, degToRad(-30), 0]}
        interactionPrompt={<InteractionPrompt title="Jacaré-açu" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelAlligator scale={2.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 2, y: 8.4, z: -12 })}
        rotation={[0, degToRad(-30), 0]}
        type="fixed"
        interactionPrompt={<InteractionPrompt title="Arara-vermelha" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelParrot scale={0.15} />
      </ProximityInteractable>

      <FixedElement
        position={handlePositionRelative({ x: 10, y: 6, z: 1 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelGrass2 scale={1} />
      </FixedElement>

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
        position={handlePositionRelative({ x: 10, y: 11, z: -9 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelParrot scale={0.15} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: 10, y: 11.5, z: -6 })}
        rotation={[0, degToRad(70), 0]}
      >
        <ModelParrot scale={0.15} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: 9, y: 12, z: -8 })}
        rotation={[0, degToRad(1), 0]}
      >
        <ModelParrot scale={0.15} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: -7, y: 11, z: -10 })}
        rotation={[0, degToRad(1), 0]}
      >
        <ModelParrot scale={0.15} />
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

      <FixedElement position={handlePositionRelative({ x: 2, y: 6, z: 9 })}>
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
  )
}
