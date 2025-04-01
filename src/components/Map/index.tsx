import { IMG_MAPS, NAME_MAPS_FORMATED } from "@/constants";
import { useControllerMap } from "@/hooks/useControllerMap";
import { useControllerQuiz } from "@/hooks/useControllerQuiz";
import { useMapsManager } from "@/hooks/useMapsManager";
import * as S from "./styles";
import { useMemo } from "react";
import { useCharacterTeleport } from "@/hooks/useCharacterTeleport";

// TODO: Colocar o titulo no Mapa que nem no protótipo
// TODO: Mudar o styles do mapa caso a variavel hasVisitedMap seja true ou false
// TODO: ajustar o styles dos mapas visitados
// TODO: Colocar nome em cima dos mapas caminho A e B

export const Map = () => {
  const { openMap, setOpenMap } = useControllerMap();
  const { setOpenQuiz } = useControllerQuiz();

  const { currrentMap, savedMap, mapsPaths } = useMapsManager();
  const { teleportCharacter } = useCharacterTeleport();

  const handleOpenQuiz = () => {
    setOpenMap(false);
    setOpenQuiz(true);
  };

  const handleCloseQuiz = () => {
    setOpenMap(false);
  };

  const mapaPathA = savedMap[currrentMap].pathA;
  const mapaPathB = savedMap[currrentMap].pathB;
  const isCurrentMapSaved = savedMap[currrentMap].saved;

  const mapsVisited = useMemo(() => {
    return mapsPaths.filter((map) => {
      return savedMap[map.name].saved && map.name !== currrentMap;
    });
  }, [mapsPaths, savedMap, currrentMap]);

  const hasVisitedMap = mapsVisited.length > 0;

  return (
    <S.Container openMap={openMap}>
      <S.Content>
        <img
          className="close-svg"
          src="/close.svg"
          alt="Fechar"
          onClick={handleCloseQuiz}
        />
        {hasVisitedMap && (
          <div className="maps-visited">
            <div className="badge-maps-visited">Mapas visitados</div>
            {mapsVisited.map((map, index) => (
              <div
                key={`${map.name}-${index}`}
                onClick={() => teleportCharacter(map.name)}
              >
                <img src={IMG_MAPS[map.name]} width={80} height="auto" />
              </div>
            ))}
          </div>
        )}
        <div className="container-map-current">
          <div className="badge-map-current">Mapa Atual</div>
          <div>
            <h1>{NAME_MAPS_FORMATED[currrentMap]}</h1>
            <img src={IMG_MAPS[currrentMap]} width={150} height="auto" />
            {!isCurrentMapSaved && (
              <div className="button-save-map" onClick={handleOpenQuiz}>
                Salvar Mapa
              </div>
            )}
            {isCurrentMapSaved && (
              <div className="maps-paths">
                {mapaPathA ? (
                  <img src={IMG_MAPS[mapaPathA]} width={130} />
                ) : (
                  <span>?</span>
                )}
                {mapaPathB ? (
                  <img src={IMG_MAPS[mapaPathB]} width={130} />
                ) : (
                  <span>?</span>
                )}
              </div>
            )}
          </div>
        </div>
      </S.Content>
    </S.Container>
  );
};
