import Character from '@/components/character'
import { HUD } from '@/components/hud'
import { Islands } from '@/components/islands'
import { Lighting } from '@/components/lighting'
import { ModalConfigGame } from '@/components/modal-config-game'
import { ModalEndOfGame } from '@/components/modal-end-of-game'
import { ModalHelp } from '@/components/modal-help'
import { ModalMapScreen } from '@/components/modal-map-screen'
import { ModalQuiz } from '@/components/modal-quiz'
import { ModalShowControls } from '@/components/modal-show-controls'
import { ModalTutorial } from '@/components/modal-tutorial'
import { ModalAboutGame } from '@/components/modal-about-game'
import { GameProviders } from './contexts/game-providers'

import { Suspense, useState, useEffect } from 'react'
import {
  Stars,
  Preload,
  useProgress,
  PerformanceMonitor,
  AdaptiveDpr,
  AdaptiveEvents,
  Bvh,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { LoadingScreen } from '@/components/loading-screen'

export const Game = () => {
  const [started, setStarted] = useState(false)
  const { active, progress } = useProgress()

  const [dpr, setDpr] = useState(1.5)

  useEffect(() => {
    if (!active && progress === 100) {
      const timeout = setTimeout(() => {
        setStarted(true)
      }, 1500)
      return () => clearTimeout(timeout)
    }
  }, [active, progress])

  return (
    <GameProviders>
      <LoadingScreen started={started} progress={progress} />

      {started && (
        <>
          <HUD />
          <ModalMapScreen />
          <ModalQuiz />
          <ModalConfigGame />
          <ModalEndOfGame />
          <ModalHelp />
          <ModalTutorial />
          <ModalShowControls />
          <ModalAboutGame />
        </>
      )}

      <Canvas
        shadows
        dpr={dpr}
        camera={{ position: [10, 10, -10], fov: 30 }}
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
      >
        <PerformanceMonitor
          onDecline={() => setDpr(1)}
          onIncline={() => setDpr(2)}
        />

        <AdaptiveDpr pixelated />

        <AdaptiveEvents />

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

        <Preload all />

        <Suspense fallback={null}>
          <Physics>
            <Bvh firstHitOnly>
              <Islands />
              <Character />
            </Bvh>
          </Physics>
        </Suspense>
      </Canvas>
    </GameProviders>
  )
}
