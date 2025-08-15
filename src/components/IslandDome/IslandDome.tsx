import { NAME_ISLAND, POSITIONS_ISLAND_DATA } from "@/lib/constants/island";
import { calculateWorldPosition } from "@/lib/utils/calculateWorldPosition";
import { Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export const IslandDome = ({
  islandName,
}: {
  islandName: (typeof NAME_ISLAND)[number];
}) => {
  const islandPosition = POSITIONS_ISLAND_DATA[islandName];
  const domePosition = calculateWorldPosition({
    basePosition: islandPosition,
    relativeOffset: { x: 0, y: 8, z: 0 },
  });

  return (
    <RigidBody type="fixed" colliders="trimesh" position={domePosition}>
      <Sphere args={[17.5, 10, 10]} renderOrder={-1}>
        <meshStandardMaterial
          color={"#7acbeb"}
          side={THREE.BackSide}
          transparent
          opacity={0.35}
          emissive={"#7acbeb"}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </RigidBody>
  );
};
