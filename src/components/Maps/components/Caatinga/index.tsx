import { POSITIONS_MAPS } from "@/constants";
import { BigIsland } from "../BigIsland";
import { BushStone } from "../BushStone";
import { DryTree } from "../DryTree";
import { Tree1 } from "../Tree1";
import { Tree2 } from "../Tree2";

export const Caatinga = () => {
  return (
    <>
      <BushStone scale={1} position={[10, 6, 0]} />
      <BushStone scale={1} position={[0, 6, 0]} />
      <DryTree scale={1} position={[3, 8, 0]} />
      <Tree2 scale={4} position={[10, 11, 0]} />
      <Tree2 scale={4} position={[10, 11, 13]} />
      <Tree1 scale={4} position={[0, 11, 10]} />
      <Tree1 scale={4} position={[5, 11, 10]} />
      <BigIsland positionMap={POSITIONS_MAPS["caatinga"]} />
    </>
  );
};
