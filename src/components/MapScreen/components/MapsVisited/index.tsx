import { IMG_MAPS, NAME_ISLAND } from "@/lib/constants/island";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import { useMemo } from "react";
import * as S from "./styles";

export const MapsVisited = () => {
  const currentIsland = useManagerIslandStore((state) => state.currentIsland);
  const islandsInformation = useManagerIslandStore(
    (state) => state.islandsInformation
  );

  const islandsVisited = useMemo(() => {
    return NAME_ISLAND.filter((name) => {
      return islandsInformation[name].saved && name !== currentIsland;
    });
  }, [currentIsland, islandsInformation]);

  const hasVisitedMap = islandsVisited.length > 0;

  if (!hasVisitedMap) {
    return null;
  }

  return (
    <S.Container>
      <div className="badge-maps-visited">Mapas visitados</div>
      <div className="maps">
        {islandsVisited.map((name, index) => (
          <div className="map" key={`${name}-${index}`}>
            <img src={IMG_MAPS[name]} />
          </div>
        ))}
      </div>
    </S.Container>
  );
};
