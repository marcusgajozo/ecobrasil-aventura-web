import { ModelDeer } from '@/components/pampa/model-deer'
import { ProximityInteractable } from '@/components/proximity-interactable'
import { useBuildIsland } from '@/lib/hooks/use-build-island'
import { usePlayAudio } from '@/lib/hooks/use-play-audio'
import { degToRad } from 'three/src/math/MathUtils.js'

import { InteractionPrompt } from '@/components/interaction-prompt'
import { ModelBush } from '@/components/model-bush'
import { ModelFlower } from '@/components/model-flower'
import { ModelRhea } from '@/components/pampa/model-rhea'
import { ModelWantWant } from '@/components/pampa/model-want-want'
import { ModelZorrilho } from '@/components/pampa/model-zorrilho'
import deerMp3 from '@audios/pampa/deer.mp3'
import emaMp3 from '@audios/pampa/rhea.mp3'
import { ModelBushStone } from '../../model-bush-stone'
import { ModelTree1 } from '../../model-tree-1'
import { FixedElement } from '@/components/fixed-element'

export const IslandPampa = () => {
  const { handlePositionRelative } = useBuildIsland({
    nameIsland: 'pampa',
  })

  const { playAudio, stopAudio, isLoading } = usePlayAudio()

  const actionPlayEmaSound = {
    control: 'action',
    action: () => playAudio(emaMp3),
  }

  const actionPlayDeerSound = {
    control: 'action',
    action: () => playAudio(deerMp3),
  }

  return (
    <>
      <ProximityInteractable
        position={handlePositionRelative({ x: -6, y: 6, z: -12 })}
        rotation={[0, degToRad(27), 0]}
        billboardPosition={[0, 5.2, 0]}
        interactionPrompt={
          <InteractionPrompt
            title="Veado campeiro"
            keyboardKey="F"
            descriptionAction="Para ouvir o animal"
            isLoading={isLoading}
          />
        }
        characterObjectInteraction={actionPlayDeerSound}
        onStopCollide={stopAudio}
      >
        <ModelDeer scale={0.8} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 5, y: 9, z: -10 })}
        rotation={[0, degToRad(-130), 0]}
        billboardPosition={[0, 2, 0]}
        interactionPrompt={
          <InteractionPrompt
            title="Ema"
            keyboardKey="F"
            descriptionAction="Para ouvir o animal"
          />
        }
        characterObjectInteraction={actionPlayEmaSound}
        onStopCollide={stopAudio}
      >
        <ModelRhea scale={2.5} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: 6, y: 6.6, z: 8 })}
        rotation={[0, degToRad(-140), 0]}
        interactionPrompt={<InteractionPrompt title="Quero-quero" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelWantWant scale={1.4} />
      </ProximityInteractable>

      <ProximityInteractable
        position={handlePositionRelative({ x: -3, y: 6.6, z: 11 })}
        rotation={[0, degToRad(90), 0]}
        interactionPrompt={<InteractionPrompt title="Zorrilho" />}
        billboardPosition={[0, 2, 0]}
      >
        <ModelZorrilho scale={1.4} />
      </ProximityInteractable>

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
