import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

const positionsColors = [
  { position: new Vector3(0, 0, 0), color: "pink" },
  { position: new Vector3(18, 0, -4), color: "red" },
  { position: new Vector3(3, 0, 15), color: "blue" },
  { position: new Vector3(-20, 0, 0), color: "black" },
  { position: new Vector3(3, 0, -17), color: "green" },
];

const Maps = () => {
  return positionsColors.map((map) => (
    <RigidBody key={map.color} type="fixed">
      <mesh position={map.position} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={map.color} />
      </mesh>
    </RigidBody>
  ));
};

export default Maps;
