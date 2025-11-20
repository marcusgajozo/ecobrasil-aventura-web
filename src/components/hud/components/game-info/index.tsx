import { NAME_ISLAND } from '@/lib/constants/island'
import { useManagerIslandStore } from '@/lib/stores/use-manager-island-store'
import { cn } from '@/lib/utils/utils'
import { useMemo } from 'react'

import SimpleSlider from '@/components/slider'
import { useManagerGameStore } from '@/lib/stores/use-manager-game-store'
import { SlidingNumberBasic } from '../sliding-number-basic'
import styles from './styles.module.css'

export const GameInfo = () => {
  const islandsInformation = useManagerIslandStore(
    state => state.islandsInformation
  )

  const hitRate = useManagerGameStore(state => state.hitRate)

  const numberIslandsSaved = useMemo(() => {
    const savedIslands = NAME_ISLAND.filter(
      island => islandsInformation[island].saved
    )
    return savedIslands.length
  }, [islandsInformation])

  const numberIslandsUnsaved = useMemo(() => {
    return Math.abs(numberIslandsSaved - NAME_ISLAND.length)
  }, [numberIslandsSaved])

  const numberIslandsTotal = NAME_ISLAND.length

  const percentageIslandsSaved = useMemo(() => {
    const percentage = (numberIslandsSaved / numberIslandsTotal) * 100

    return Math.round(percentage)
  }, [numberIslandsSaved, numberIslandsTotal])

  return (
    <div className={cn('font-primary w-80 px-4 text-2xl', styles.borderText)}>
      <div className="text-4xl">EcoBrasil Aventura</div>
      <div className="text-xl leading-4">Status da sua missão:</div>
      <div className="flex items-center gap-4">
        <SimpleSlider value={percentageIslandsSaved} />
        <SlidingNumberBasic value={percentageIslandsSaved} />
      </div>
      <div className="flex gap-4">
        <div>Ilhas totais: {numberIslandsTotal}</div>
        <div>Ilhas salvas: {numberIslandsSaved}</div>
      </div>
      <div>Ilhas não salvas: {numberIslandsUnsaved}</div>
      <div className="flex gap-4">Taxa de acertos: {hitRate}%</div>
    </div>
  )
}
