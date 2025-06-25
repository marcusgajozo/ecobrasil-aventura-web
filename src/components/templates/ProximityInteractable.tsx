import { useCharacterObjectInteraction } from "@/lib/hooks/useCharacterObjectInteraction";
import { Billboard, Text } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";

type ProximityInteractableProps = {
  children: React.ReactNode;
  colliderArgs?: [number, number, number];
  colliderPosition?: [number, number, number];
  sensorRadius?: number;
  billboardText?: string;
  billboardTextPosition?: [number, number, number];
} & RigidBodyProps;

export const ProximityInteractable = ({
  billboardText,
  children,
  colliderArgs = [0.5, 0.5, 0.5],
  colliderPosition = [0, 0.5, 0],
  sensorRadius = 3,
  billboardTextPosition = [0, 3.5, 0],
  ...props
}: ProximityInteractableProps) => {
  const { isClose, setIsClose } = useCharacterObjectInteraction();

  return (
    <RigidBody {...props} colliders={false}>
      {children}
      <CuboidCollider args={colliderArgs} position={colliderPosition} />

      <BallCollider
        args={[sensorRadius]}
        onIntersectionEnter={() => setIsClose(true)}
        onIntersectionExit={() => setIsClose(false)}
        position={colliderPosition}
        sensor
      />

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
    </RigidBody>
  );
};
