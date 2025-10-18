import { NAME_ISLAND_FORMATED } from '@/lib/constants/island'
import { TELEPORT_PLATFORM } from '@/lib/constants/teleport-plataform'
import { useTeleportCharacter } from '@/lib/hooks/use-teleport-character'
import { useManagerIslandStore } from '@/lib/stores/use-manager-island-store'
import { useCallback } from 'react'
import { TeleportPlatformProps } from '../types/teleport-platform.type'

export function useTeleportPlatform({ nameMap }: TeleportPlatformProps) {
  const islandsInformation = useManagerIslandStore(
    state => state.islandsInformation
  )
  const { handleTeleportCharacter } = useTeleportCharacter()

  const handleTeleport = useCallback(
    (pathIsland: 'A' | 'B') => {
      if (islandsInformation[nameMap].saved === false) {
        return
      }

      const destinationIsland =
        TELEPORT_PLATFORM[nameMap][pathIsland].destinationIsland

      handleTeleportCharacter(
        destinationIsland.name,
        TELEPORT_PLATFORM[destinationIsland.name][
          destinationIsland.teleportPlatform
        ].position
      )
    },
    [handleTeleportCharacter, islandsInformation, nameMap]
  )

  const handleCharacterObjectInteraction = (pathIsland: 'A' | 'B') => {
    return {
      control: 'action',
      action: () => handleTeleport(pathIsland),
    }
  }

  const positionTeleportPlatformA = TELEPORT_PLATFORM[nameMap].A.position
  const positionTeleportPlatformB = TELEPORT_PLATFORM[nameMap].B.position
  const islandNameA =
    NAME_ISLAND_FORMATED[TELEPORT_PLATFORM[nameMap].A.destinationIsland.name]
  const islandNameB =
    NAME_ISLAND_FORMATED[TELEPORT_PLATFORM[nameMap].B.destinationIsland.name]
  const isSaved = islandsInformation[nameMap].saved

  const descriptionAction = isSaved
    ? 'Para teletransportar'
    : 'Primeiro salve a ilha!'

  const keyboardKey = isSaved ? 'F' : undefined
  const billboardPosition = [0, 5, 0] as [number, number, number]

  return {
    handleCharacterObjectInteraction,
    positionTeleportPlatformA,
    positionTeleportPlatformB,
    islandNameA,
    islandNameB,
    descriptionAction,
    keyboardKey,
    billboardPosition,
  }
}
