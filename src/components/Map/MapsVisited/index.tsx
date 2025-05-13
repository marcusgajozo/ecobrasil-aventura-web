import { IMG_MAPS } from "@/constants";
import { useCharacterTeleport } from "@/hooks/useCharacterTeleport";
import { useMapsManager } from "@/hooks/useMapsManager";
import { useMemo } from "react";
import * as S from "./styles";

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
      {mapsVisited.map((map, index) => (
        <div
          key={`${map.name}-${index}`}
          onClick={() => teleportCharacter(map.name)}
        >
          <img src={IMG_MAPS[map.name]} width={80} height="auto" />
        </div>
      ))}
    </S.Container>
  );
};
