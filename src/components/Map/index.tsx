import { IMG_MAPS, NAME_MAPS_FORMATED } from "@/constants";
import { useCharacterTeleport } from "@/hooks/useCharacterTeleport";
import { useControllerMap } from "@/hooks/useControllerMap";
import { useControllerQuiz } from "@/hooks/useControllerQuiz";
import { useMapsManager } from "@/hooks/useMapsManager";
import * as S from "./styles";

// TODO: melhorar visualmente o mapa

export const Map = () => {
  const { openMap, setOpenMap } = useControllerMap();
  const { setOpenQuiz } = useControllerQuiz();
  const { teleportCharacter } = useCharacterTeleport();

  const { currrentMap, savedMap, savePathName, mapsPaths } = useMapsManager();

  const handleTeleport = (path: "A" | "B") => {
    const map = mapsPaths.find((map) => map.name === currrentMap)?.path.A;
    if (!map) return;
    savePathName(map, path);
    teleportCharacter(map);
    setOpenMap(false);
  };

  // const showSavedMap = (map: (typeof NAME_MAPS)[number]) => {
  //   const saved = savedMap[map].saved;
  //   return saved ? "Salvo" : "Não Salvo";
  // };

  const handleOpenQuiz = () => {
    setOpenMap(false);
    setOpenQuiz(true);
  };

  // TODO: mostrar imagens dos mapas

  return (
    <S.Container openMap={openMap}>
      <S.ListMap>
        {mapsPaths
          .filter((map) => {
            console.log(map.name, savedMap[map.name].saved);
            return savedMap[map.name].saved && map.name !== currrentMap;
          })
          .map((map, index) => (
            <S.MapContent key={`${map.name}-${index}`}>
              <S.MapName>{NAME_MAPS_FORMATED[map.name]}</S.MapName>
              <S.Image src={IMG_MAPS[map.name]} width={50} height={50} />
            </S.MapContent>
          ))}
      </S.ListMap>
      <S.CurrentMap>
        <h1>{NAME_MAPS_FORMATED[currrentMap]}</h1>
        <S.Image src={IMG_MAPS[currrentMap]} width={200} height={200} />
        <S.MapPath>
          <S.MapPathButton
            disabled={!savedMap[currrentMap].saved}
            onClick={() => handleTeleport("A")}
          >
            <S.Image src="/plate.svg" width={70} />
            {savedMap[currrentMap].pathA
              ? NAME_MAPS_FORMATED[savedMap[currrentMap].pathA]
              : "Caminho A"}
          </S.MapPathButton>
          <S.MapPathButton
            disabled={!savedMap[currrentMap].saved}
            onClick={() => handleTeleport("B")}
          >
            <S.Image src="/plate.svg" width={70} />
            {savedMap[currrentMap].pathB
              ? NAME_MAPS_FORMATED[savedMap[currrentMap].pathB]
              : "Caminho B"}
          </S.MapPathButton>
        </S.MapPath>
      </S.CurrentMap>
      {!savedMap[currrentMap].saved && (
        <button onClick={handleOpenQuiz}>Salvar ilha</button>
      )}
    </S.Container>
  );
};
