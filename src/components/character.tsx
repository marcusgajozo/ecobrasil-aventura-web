import { Sphere } from "@react-three/drei";

const Character = () => {
  return (
    <Sphere position={[0, 5, 0]} args={[0.5, 16, 12]}>
      <meshStandardMaterial color="blue" />
    </Sphere>
  );
};

export default Character;
