import { positionsColorsMaps } from "@/constants";
import { RigidBody } from "@react-three/rapier";

const Maps = () => {
  return positionsColorsMaps.map((map) => (
    <RigidBody key={map.color} type="fixed">
      <mesh position={map.position} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={map.color} />
      </mesh>
    </RigidBody>
  ));
};

export default Maps;
