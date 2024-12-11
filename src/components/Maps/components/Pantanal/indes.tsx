import { RigidBody } from "@react-three/rapier";
import { BigIsland } from "../BigIsland";
import { positionsColorsMaps } from "@/constants";
import { Tree1 } from "../Tree1";
import { Tree2 } from "../Tree2";
import { DryTree } from "../DryTree";

export const Pantanal = () => {
  const positionMap = positionsColorsMaps.find(
    (map) => map.name === "pantanal"
  );

  return (
    <RigidBody type="fixed" position={positionMap?.position} colliders="hull">
      <DryTree scale={1} position={[3, 8, 0]} />
      <Tree2 scale={4} position={[10, 11, 0]} />
      <Tree2 scale={4} position={[10, 11, 13]} />
      <Tree1 scale={4} position={[0, 11, 10]} />
      <Tree1 scale={4} position={[5, 11, 10]} />
      <BigIsland />
    </RigidBody>
  );
};
