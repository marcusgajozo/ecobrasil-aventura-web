import Character from '@/components/character'
import { HUD } from '@/components/hud'
import { Islands } from '@/components/islands'
import { Lighting } from '@/components/lighting'
import { ModalConfigGame } from '@/components/modal-config-game'
import { ModalEndOfGame } from '@/components/modal-end-of-game'
import { ModalHelp } from '@/components/modal-help'
import { ModalMapScreen } from '@/components/modal-map-screen'
import { ModalQuiz } from '@/components/modal-quiz'
import { ModalTutorial } from '@/components/modal-tutorial'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { GameProviders } from './contexts/game-providers'

export const Game = () => {
  return (
    <GameProviders>
      <HUD />
      <ModalMapScreen />
      <ModalQuiz />
      <ModalConfigGame />
      <ModalEndOfGame />
      <ModalHelp />
      <ModalTutorial />

      <Canvas shadows camera={{ position: [10, 10, -10], fov: 30 }}>
        <color attach="background" args={['#000000']} />

        <Lighting />

        <Stars
          radius={100}
          depth={50}
          count={5500}
          factor={7}
          saturation={0}
          fade
          speed={1}
        />

        <Physics>
          <Islands />
          <Character />
        </Physics>
      </Canvas>
    </GameProviders>
  )
}
