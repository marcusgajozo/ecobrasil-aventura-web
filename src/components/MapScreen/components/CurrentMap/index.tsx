import { IMG_ISLAND, NAME_ISLAND_FORMATED } from "@/lib/constants/island";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import * as S from "./styles";
import { TELEPORT_PLATFORM } from "@/lib/constants/teleportPlataform";

export const CurrentMap = () => {
  const currentIsland = useManagerIslandStore((state) => state.currentIsland);
  const islandsInformation = useManagerIslandStore(
    (state) => state.islandsInformation
  );

  const pathAIsland = TELEPORT_PLATFORM[currentIsland].A.destinationIsland.name;
  const pathBIsland = TELEPORT_PLATFORM[currentIsland].B.destinationIsland.name;

  const pathAIslandVisited = islandsInformation[pathAIsland].visited;
  const pathBIslandVisited = islandsInformation[pathBIsland].visited;
  const isCurrentIslandSaved = islandsInformation[currentIsland].saved;

  return (
    <S.Container>
      <div className="badge-map-current">Mapa Atual</div>
      <div className="content">
        <h2 className="current-name-map">
          {NAME_ISLAND_FORMATED[currentIsland]}
        </h2>
        <img
          className="current-map"
          src={IMG_ISLAND[currentIsland]}
          alt={"mapa atual"}
        />
        {!isCurrentIslandSaved && (
          <p className="current-map-description">
            Salve a ilha da {NAME_ISLAND_FORMATED[currentIsland]} para continuar
            sua aventura e desbloquear os caminhos!
          </p>
        )}
        {isCurrentIslandSaved && (
          <>
            <h3 className="path-description path-a">Caminho A</h3>
            <h3 className="path-description path-b">Caminho B</h3>
          </>
        )}
        {isCurrentIslandSaved && (
          <div className="content-maps-paths">
            {pathAIslandVisited && (
              <div className="map-path">
                <img src={IMG_ISLAND[pathAIsland]} />
                <h4>{NAME_ISLAND_FORMATED[pathAIsland]}</h4>
              </div>
            )}
            {pathBIslandVisited && (
              <div className="map-path">
                <img src={IMG_ISLAND[pathBIsland]} />
                <h4>{NAME_ISLAND_FORMATED[pathBIsland]}</h4>
              </div>
            )}
            {pathAIsland === undefined && (
              <span className="unknown-map">?</span>
            )}
            {pathBIsland === undefined && (
              <span className="unknown-map">?</span>
            )}
          </div>
        )}
      </div>
    </S.Container>
  );
};
