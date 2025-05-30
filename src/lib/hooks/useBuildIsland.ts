import { Vector3, Vector3Like } from "three";
import { NAME_ISLAND, POSITIONS_ISLAND_DATA } from "../constants";
import { useMapsManager } from "./useMapsManager";
import { calculateWorldPosition } from "../utils/calculateWorldPosition";

export const useBuildIsland = ({
  nameIsland,
}: {
  nameIsland: (typeof NAME_ISLAND)[number];
}) => {
  const positionIslandData = POSITIONS_ISLAND_DATA[nameIsland];
  const positionIsland = new Vector3().copy(positionIslandData);

  const { savedMap } = useMapsManager();
  const saved = savedMap[nameIsland].saved;

  const handlePositionRelative = (relativeOffset: Vector3Like) =>
    calculateWorldPosition({ basePosition: positionIsland, relativeOffset });

  return {
    positionIsland,
    saved,
    handlePositionRelative,
  };
};
