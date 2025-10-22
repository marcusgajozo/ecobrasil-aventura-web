import { InteractionPrompt } from '@/components/interaction-prompt'
import { useBuildIsland } from '@/lib/hooks/use-build-island'
import { degToRad } from 'three/src/math/MathUtils.js'
import { FixedElement } from '../../fixed-element'
import { ModelBushStone } from '../../model-bush-stone'
import { ProximityInteractable } from '../../proximity-interactable'
import { ModelArmadillo } from '../model-armadillo'
import { ModelCactus } from '../model-cactus'
import { ModelCactus2 } from '../model-cactus-2'
import { ModelCactus3 } from '../model-cactus-3'
import { ModelCactus4 } from '../model-cactus-4'
import { ModelIguana } from '../model-iguana'
import { ModelPomp } from '../model-pomp'
import { ModelRattlesnake } from '../model-rattlesnake'
import { ModelRock } from '../model-rock'
import { ModelRock2 } from '../model-rock-2'
import { ModelRock3 } from '../model-rock-3'
import { ModelRock4 } from '../model-rock-4'

export const IslandCaatinga = () => {
  const { handlePositionRelative } = useBuildIsland({
    nameIsland: 'caatinga',
  })

  return (
    <>
      <ProximityInteractable
        position={handlePositionRelative({ x: -4, y: 6.5, z: -9 })}
        rotation={[0, degToRad(-40), 0]}
        interactionPrompt={<InteractionPrompt title="Tatu-bola" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelArmadillo scale={1} />
      </ProximityInteractable>
      <ProximityInteractable
        position={handlePositionRelative({ x: 2, y: 6.5, z: 10 })}
        rotation={[0, degToRad(130), 0]}
        interactionPrompt={<InteractionPrompt title="Iguana-verde" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelIguana scale={1} />
      </ProximityInteractable>
      <ProximityInteractable
        position={handlePositionRelative({ x: 12, y: 6.9, z: 2 })}
        rotation={[0, degToRad(1), 0]}
        interactionPrompt={<InteractionPrompt title="Jararaca-da-seca" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelRattlesnake scale={1.3} />
      </ProximityInteractable>
      <ProximityInteractable
        position={handlePositionRelative({ x: 3, y: 8.9, z: -13 })}
        rotation={[0, degToRad(280), 0]}
        interactionPrompt={<InteractionPrompt title="Asa-branca" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelPomp scale={0.6} />
      </ProximityInteractable>
      <FixedElement
        position={handlePositionRelative({ x: 5, y: 5.9, z: 13 })}
        rotation={[0, degToRad(140), 0]}
      >
        <ModelCactus scale={0.2} />
      </FixedElement>
      <FixedElement
        position={handlePositionRelative({ x: 7, y: 5.9, z: -13 })}
        rotation={[0, degToRad(140), 0]}
      >
        <ModelCactus scale={0.2} />
      </FixedElement>
      <FixedElement
        position={handlePositionRelative({ x: -1, y: 6.9, z: -15 })}
        rotation={[0, degToRad(140), 0]}
      >
        <ModelCactus2 scale={1} />
      </FixedElement>
      <FixedElement
        position={handlePositionRelative({ x: -12, y: 6.9, z: 8 })}
        rotation={[0, degToRad(140), 0]}
      >
        <ModelCactus2 scale={1} />
      </FixedElement>
      <FixedElement
        position={handlePositionRelative({ x: 12, y: 6.6, z: 8 })}
        rotation={[0, degToRad(140), 0]}
      >
        <ModelCactus4 scale={0.7} />
      </FixedElement>
      <FixedElement
        position={handlePositionRelative({ x: 8, y: 5.8, z: 9 })}
        rotation={[0, degToRad(140), 0]}
      >
        <ModelCactus3 scale={1} />
      </FixedElement>
      <FixedElement
        position={handlePositionRelative({ x: -5, y: 5.8, z: -11 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelCactus3 scale={1} />
      </FixedElement>
      a
      <FixedElement
        position={handlePositionRelative({ x: 10, y: 5.8, z: -9 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelCactus3 scale={1} />
      </FixedElement>
      <FixedElement
        position={handlePositionRelative({ x: -8, y: 5.8, z: 10 })}
        rotation={[0, degToRad(-70), 0]}
      >
        <ModelCactus3 scale={1} />
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
      <FixedElement position={handlePositionRelative({ x: 14, y: 6, z: -2 })}>
        <ModelRock4 scale={0.3} />
      </FixedElement>
      <FixedElement position={handlePositionRelative({ x: -14, y: 6, z: 6 })}>
        <ModelRock3 scale={0.3} />
      </FixedElement>
      <FixedElement position={handlePositionRelative({ x: 10, y: 6, z: 6 })}>
        <ModelRock2 scale={0.2} />
      </FixedElement>
      <FixedElement position={handlePositionRelative({ x: -4, y: 5, z: 14 })}>
        <ModelRock scale={1} />
      </FixedElement>
      <FixedElement position={handlePositionRelative({ x: 3, y: 5, z: -13 })}>
        <ModelRock scale={1} />
      </FixedElement>
    </>
  )
}
