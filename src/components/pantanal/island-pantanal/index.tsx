import { InteractionPrompt } from '@/components/interaction-prompt'
import { useBuildIsland } from '@/lib/hooks/use-build-island'
import { degToRad } from 'three/src/math/MathUtils.js'
import { FixedElement } from '../../fixed-element'
import { ModelBushStone } from '../../model-bush-stone'
import { ModelCattail2 } from '../../model-cattail-2'
import { ModelTree2 } from '../../model-tree-2'
import { ProximityInteractable } from '../../proximity-interactable'
import { ModelAlligator } from '../model-alligator'
import { ModelCapybara } from '../model-capybara'
import { ModelPinkIpe } from '../model-pink-ipe'
import { ModelSnake } from '../model-snake'
import { ModelTuiuiu } from '../model-tuiuiu'

export const IslandPantanal = () => {
  const { handlePositionRelative } = useBuildIsland({
    nameIsland: 'pantanal',
  })

  return (
    <>
      <ProximityInteractable
        position={handlePositionRelative({ x: 2, y: 7.4, z: -7 })}
        rotation={[0, degToRad(-40), 0]}
        interactionPrompt={<InteractionPrompt title="Capivara" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelCapybara scale={1.6} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 2, y: 8, z: 10 })}
        rotation={[0, degToRad(180), 0]}
        interactionPrompt={<InteractionPrompt title="Tuiuiu" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelTuiuiu scale={1.9} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 12, y: 6.9, z: 2 })}
        rotation={[0, degToRad(180), 0]}
        interactionPrompt={<InteractionPrompt title="Jacaré-do-pantanal" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelAlligator scale={3} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 12, y: 6.2, z: -6 })}
        rotation={[0, degToRad(20), 0]}
        interactionPrompt={<InteractionPrompt title="Sucuri-amarela" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelSnake scale={2} />
      </ProximityInteractable>

      <FixedElement
        position={handlePositionRelative({ x: 5, y: 6.8, z: -10 })}
        rotation={[0, degToRad(-40), 0]}
      >
        <ModelCapybara scale={1} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: 2, y: 6.8, z: -10 })}
        rotation={[0, degToRad(-40), 0]}
      >
        <ModelCapybara scale={1} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: 8, y: 6, z: 9 })}
        rotation={[0, degToRad(140), 0]}
      >
        <ModelPinkIpe scale={0.08} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: -5, y: 6, z: -11 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelPinkIpe scale={0.08} />
      </FixedElement>

      <FixedElement
        position={handlePositionRelative({ x: 10, y: 11.1, z: -9 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelTree2 scale={3} />
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

      <FixedElement position={handlePositionRelative({ x: 10, y: 6, z: 6 })}>
        <ModelCattail2 scale={0.2} />
      </FixedElement>

      <FixedElement position={handlePositionRelative({ x: -4, y: 6, z: 14 })}>
        <ModelCattail2 scale={0.3} />
      </FixedElement>
    </>
  )
}
