import { Vector3, Vector3Like } from "three";
import { NAME_ISLAND, POSITIONS_ISLAND_DATA } from "../constants/island";
import { useManagerIslandStore } from "../stores/use-manager-island-store";
import { calculateWorldPosition } from "../utils/calculate-world-position";

export const useBuildIsland = ({
  nameIsland,
}: {
  nameIsland: (typeof NAME_ISLAND)[number];
}) => {
  const islandsInformation = useManagerIslandStore(
    (state) => state.islandsInformation
  );

  const savedIsland = islandsInformation[nameIsland].saved;
  const positionIslandData = POSITIONS_ISLAND_DATA[nameIsland];
  const positionIsland = new Vector3().copy(positionIslandData);

  const handlePositionRelative = (relativeOffset: Vector3Like) =>
    calculateWorldPosition({ basePosition: positionIsland, relativeOffset });

  return {
    positionIsland,
    savedIsland,
    handlePositionRelative,
  };
};
