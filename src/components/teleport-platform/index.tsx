import { ProximityInteractable } from '@/components/proximity-interactable'
import { InteractionPrompt } from '../interaction-prompt'
import { TeleportPlatformModel } from './components/model-teleport-platform'
import { useTeleportPlatform } from './hooks/use-teleport-platform'
import { TeleportPlatformProps } from './types/teleport-platform.type'

// TODO: colocar uma transição de teletransporte bonitinha
// TODO: teleportar personagem para outro mapa somente de mapa atual estiver salvo
// TODO: colocar um tempinho extra para o teletransporte mostrando a animação

export const TeleportPlatform = ({ nameMap }: TeleportPlatformProps) => {
  const {
    billboardPosition,
    positionTeleportPlatformA,
    positionTeleportPlatformB,
    islandNameA,
    islandNameB,
    descriptionAction,
    keyboardKey,
    handleCharacterObjectInteraction,
  } = useTeleportPlatform({ nameMap })

  return (
    <>
      <ProximityInteractable
        position={positionTeleportPlatformA}
        interactionPrompt={
          <InteractionPrompt
            title={`Teletransportar para ${islandNameA}`}
            keyboardKey={keyboardKey}
            descriptionAction={descriptionAction}
          />
        }
        billboardPosition={billboardPosition}
        characterObjectInteraction={handleCharacterObjectInteraction('A')}
        colliderPosition={[0, 2, 0]}
        sensorRadius={1}
      >
        <TeleportPlatformModel />
      </ProximityInteractable>

      <ProximityInteractable
        position={positionTeleportPlatformB}
        interactionPrompt={
          <InteractionPrompt
            title={`Teletransportar para ${islandNameB}`}
            keyboardKey={keyboardKey}
            descriptionAction={descriptionAction}
          />
        }
        billboardPosition={billboardPosition}
        characterObjectInteraction={handleCharacterObjectInteraction('B')}
        colliderPosition={[0, 2, 0]}
        sensorRadius={1}
      >
        <TeleportPlatformModel />
      </ProximityInteractable>
    </>
  )
}
