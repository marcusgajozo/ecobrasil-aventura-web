import { useCharacterObjectInteraction } from "@/lib/hooks/useCharacterObjectInteraction";
import { Billboard, Text } from "@react-three/drei";
import { CuboidCollider, RigidBody, RigidBodyProps } from "@react-three/rapier";

// Adicionamos props para o tamanho e posição do colisor físico
type ProximityInteractableProps = {
  promptText: string;
  children: React.ReactNode;
  colliderArgs?: [number, number, number]; // Tamanho [largura/2, altura/2, profundidade/2]
  colliderPosition?: [number, number, number]; // Posição [x, y, z]
} & RigidBodyProps;

export const ProximityInteractable = ({
  promptText,
  children,
  colliderArgs = [0.5, 0.5, 0.5],
  colliderPosition = [0, 0.5, 0],
  ...props
}: ProximityInteractableProps) => {
  const { isClose, setIsClose } = useCharacterObjectInteraction();

  return (
    <RigidBody
      {...props}
      onIntersectionEnter={() => setIsClose(true)}
      onIntersectionExit={() => setIsClose(false)}
      colliders={false}
    >
      {children}
      <CuboidCollider args={colliderArgs} position={colliderPosition} />

      <CuboidCollider args={[2, 2, 2]} sensor />

      <Billboard>
        <Text
          position={[0, 2.0, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineColor="black"
          outlineWidth={0.05}
        >
          {isClose ? promptText : ""}
        </Text>
      </Billboard>
    </RigidBody>
  );
};
