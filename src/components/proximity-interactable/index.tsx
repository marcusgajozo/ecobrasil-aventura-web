import { useCharacterObjectInteraction } from '@/lib/hooks/use-character-object-interaction'
import { Billboard, Html } from '@react-three/drei'
import { BallCollider, RigidBody, RigidBodyProps } from '@react-three/rapier'

type ProximityInteractableProps = {
  children: React.ReactNode
  interactionPrompt?: JSX.Element
  colliderPosition?: [number, number, number]
  sensorRadius?: number
  billboardPosition?: [number, number, number]
  onCollide?: () => void
  onStopCollide?: () => void
  characterObjectInteraction?: Parameters<
    typeof useCharacterObjectInteraction
  >[0]
} & RigidBodyProps

export const ProximityInteractable = ({
  children,
  colliderPosition = [0, 0.5, 0],
  sensorRadius = 3,
  billboardPosition = [0, 3.5, 0],
  onCollide,
  onStopCollide,
  characterObjectInteraction,
  interactionPrompt,
  ...props
}: ProximityInteractableProps) => {
  const { isClose, setIsClose } = useCharacterObjectInteraction(
    characterObjectInteraction
  )

  return (
    <RigidBody colliders={'hull'} {...props}>
      {children}

      <BallCollider
        args={[sensorRadius]}
        onIntersectionEnter={() => {
          setIsClose(true)
          onCollide?.()
        }}
        onIntersectionExit={() => {
          setIsClose(false)
          onStopCollide?.()
        }}
        position={colliderPosition}
        sensor
      />

      {isClose && interactionPrompt && (
        <Billboard>
          <Html center position={billboardPosition} zIndexRange={[0, 0]}>
            {interactionPrompt}
          </Html>
        </Billboard>
      )}
    </RigidBody>
  )
}
