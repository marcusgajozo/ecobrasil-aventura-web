import { IMG_MAPS } from "@/lib/constants";
import { useCharacterTeleport } from "@/lib/hooks/useCharacterTeleport";
import { useMapsManager } from "@/lib/hooks/useMapsManager";
import { useMemo } from "react";
import * as S from "./styles";
import { NameMapsType } from "@/lib/types/types";

export const MapsVisited = () => {
  const { currrentMap, savedMap, mapsPaths } = useMapsManager();
  const { teleportCharacter } = useCharacterTeleport();
  const mapsVisited = useMemo(() => {
    return mapsPaths.filter((map) => {
      return savedMap[map.name].saved && map.name !== currrentMap;
    });
  }, [mapsPaths, savedMap, currrentMap]);

  const hasVisitedMap = mapsVisited.length > 0;

  if (!hasVisitedMap) {
    return null;
  }

  return (
    <S.Container>
      <div className="badge-maps-visited">Mapas visitados</div>
      <div className="maps">
        {mapsVisited.slice(5).map((map, index) => (
          <div
            className="map"
            key={`${map.name}-${index}`}
            onClick={() => teleportCharacter(map.name as NameMapsType)}
          >
            <img src={IMG_MAPS[map.name as NameMapsType]} />
          </div>
        ))}
      </div>
    </S.Container>
  );
};
