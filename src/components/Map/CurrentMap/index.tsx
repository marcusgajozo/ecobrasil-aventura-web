import { IMG_MAPS, NAME_MAPS_FORMATED } from "@/constants";
import { useControllerMap } from "@/hooks/useControllerMap";
import { useControllerQuiz } from "@/hooks/useControllerQuiz";
import { useMapsManager } from "@/hooks/useMapsManager";
import * as S from "./styles";

export const CurrentMap = () => {
  const { setOpenQuiz } = useControllerQuiz();
  const { setOpenMap } = useControllerMap();

  const { currrentMap, savedMap } = useMapsManager();

  const handleOpenQuiz = () => {
    setOpenMap(false);
    setOpenQuiz(true);
  };

  const mapaPathA = savedMap[currrentMap].pathA;
  const mapaPathB = savedMap[currrentMap].pathB;
  const isCurrentMapSaved = savedMap[currrentMap].saved;

  return (
    <S.Container>
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
          <>
            <span className="path-description-a">Caminho A</span>
            <span className="path-description-b">Caminho B</span>
          </>
        )}
        {isCurrentMapSaved && (
          <div className="content-maps-paths">
            {mapaPathA ? (
              <div className="map-path">
                <img src={IMG_MAPS[mapaPathA]} width={130} />
                <span>{NAME_MAPS_FORMATED[mapaPathA]}</span>
              </div>
            ) : (
              <span className="unknown-map">?</span>
            )}
            {mapaPathB ? (
              <div className="map-path">
                <img src={IMG_MAPS[mapaPathB]} width={130} />
                <span>{NAME_MAPS_FORMATED[mapaPathB]}</span>
              </div>
            ) : (
              <span className="unknown-map">?</span>
            )}
          </div>
        )}
      </div>
    </S.Container>
  );
};
