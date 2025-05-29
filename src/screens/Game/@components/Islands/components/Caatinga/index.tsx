import { POSITIONS_MAPS } from "@/lib/constants";
import { BigIsland } from "../BigIsland";
import { BushStone } from "../BushStone";
import { DryTree } from "../DryTree";
import { Tree1 } from "../Tree1";
import { Tree2 } from "../Tree2";
import { positionRelative } from "@/lib/utils/positionRelative";
import { Vector3 } from "three";
import { QuestionBox } from "../QuestionBox";
import { useMapsManager } from "@/lib/hooks/useMapsManager";
import { TeleportPlatform } from "../TeleportPlatform";

export const Caatinga = () => {
  const positionMap = POSITIONS_MAPS["caatinga"];
  const { savedMap } = useMapsManager();
  const saved = savedMap["caatinga"].saved;

  const handlePositionRelative = (newPosition: Vector3) => {
    return positionRelative({
      newPosition,
      position: positionMap,
    });
  };

  return (
    <>
      <TeleportPlatform
        positionPlatformA={handlePositionRelative(new Vector3(-12, 6, 1))}
        positionPlatformB={handlePositionRelative(new Vector3(-12, 6, -8))}
      />
      <BushStone
        scale={1}
        position={handlePositionRelative(new Vector3(10, 6, 0))}
      />
      <BushStone
        scale={1}
        position={handlePositionRelative(new Vector3(0, 6, 0))}
      />
      <DryTree
        scale={1}
        position={handlePositionRelative(new Vector3(3, 8, 0))}
      />
      <Tree2
        scale={4}
        position={handlePositionRelative(new Vector3(10, 11, 0))}
      />
      <Tree2
        scale={4}
        position={handlePositionRelative(new Vector3(10, 11, 13))}
      />
      <Tree2
        scale={4}
        position={handlePositionRelative(new Vector3(10, 11, 13))}
      />
      <Tree1
        scale={4}
        position={handlePositionRelative(new Vector3(0, 11, 10))}
      />
      {!saved && (
        <QuestionBox position={handlePositionRelative(new Vector3(-8, 8, 7))} />
      )}
      <Tree1
        scale={4}
        position={handlePositionRelative(new Vector3(5, 11, 10))}
      />
      <BigIsland color="#C96F03" positionMap={positionMap} />
    </>
  );
};
