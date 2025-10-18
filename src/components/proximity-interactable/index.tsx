import { useCharacterObjectInteraction } from "@/lib/hooks/use-character-object-interaction";
import { Billboard, Text } from "@react-three/drei";
import { BallCollider, RigidBody, RigidBodyProps } from "@react-three/rapier";

type ProximityInteractableProps = {
  children: React.ReactNode;
  colliderPosition?: [number, number, number];
  sensorRadius?: number;
  billboardText?: string;
  billboardTextPosition?: [number, number, number];
  onCollide?: () => void;
  onStopCollide?: () => void;
  characterObjectInteraction?: Parameters<
    typeof useCharacterObjectInteraction
  >[0];
} & RigidBodyProps;

export const ProximityInteractable = ({
  billboardText,
  children,
  colliderPosition = [0, 0.5, 0],
  sensorRadius = 3,
  billboardTextPosition = [0, 3.5, 0],
  onCollide,
  onStopCollide,
  characterObjectInteraction,
  ...props
}: ProximityInteractableProps) => {
  const { isClose, setIsClose } = useCharacterObjectInteraction(
    characterObjectInteraction
  );

  return (
    <RigidBody colliders={"hull"} {...props}>
      {children}

      <BallCollider
        args={[sensorRadius]}
        onIntersectionEnter={() => {
          setIsClose(true);
          onCollide?.();
        }}
        onIntersectionExit={() => {
          setIsClose(false);
          onStopCollide?.();
        }}
        position={colliderPosition}
        sensor
      />

      {billboardText && (
        <Billboard>
          <Text
            position={billboardTextPosition}
            fontSize={0.4}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineColor="black"
            outlineWidth={0.05}
          >
            {isClose ? billboardText : undefined}
          </Text>
        </Billboard>
      )}
    </RigidBody>
  );
};
