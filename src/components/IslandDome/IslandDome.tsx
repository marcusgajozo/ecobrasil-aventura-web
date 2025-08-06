import { Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export const IslandDome = ({
  position = new THREE.Vector3(0, 0, 0),
  radius = 50,
  color = "#7acbeb",
  opacity = 0.15,
}) => {
  return (
    <RigidBody type="fixed" colliders="trimesh" position={position}>
      <Sphere args={[radius, 10, 10]} renderOrder={-1}>
        <meshStandardMaterial
          color={color}
          side={THREE.BackSide}
          transparent
          opacity={opacity}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </RigidBody>
  );
};
