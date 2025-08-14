import { IMG_MAPS, NAME_ISLAND_FORMATED } from "@/lib/constants/island";
import { useMapsManager } from "@/lib/hooks/useMapsManager";
import * as S from "./styles";

export const CurrentMap = () => {
  const { currrentMap, savedMap } = useMapsManager();

  const mapaPathA = savedMap[currrentMap].pathA;
  const mapaPathB = savedMap[currrentMap].pathB;
  const isCurrentMapSaved = savedMap[currrentMap].saved;

  return (
    <S.Container>
      <div className="badge-map-current">Mapa Atual</div>
      <div className="content">
        <h2 className="current-name-map">
          {NAME_ISLAND_FORMATED[currrentMap]}
        </h2>
        <img
          className="current-map"
          src={IMG_MAPS[currrentMap]}
          alt={"mapa atual"}
        />
        {!isCurrentMapSaved && (
          <p className="current-map-description">
            Salve a ilha da {NAME_ISLAND_FORMATED[currrentMap]} para continuar
            sua aventura e desbloquear os caminhos!
          </p>
        )}
        {isCurrentMapSaved && (
          <>
            <h3 className="path-description path-a">Caminho A</h3>
            <h3 className="path-description path-b">Caminho B</h3>
          </>
        )}
        {isCurrentMapSaved && (
          <div className="content-maps-paths">
            {mapaPathA && (
              <div className="map-path">
                <img src={IMG_MAPS[mapaPathA]} />
                <h4>{NAME_ISLAND_FORMATED[mapaPathA]}</h4>
              </div>
            )}
            {mapaPathB && (
              <div className="map-path">
                <img src={IMG_MAPS[mapaPathB]} />
                <h4>{NAME_ISLAND_FORMATED[mapaPathB]}</h4>
              </div>
            )}
            {mapaPathA === undefined && <span className="unknown-map">?</span>}
            {mapaPathB === undefined && <span className="unknown-map">?</span>}
          </div>
        )}
      </div>
    </S.Container>
  );
};
