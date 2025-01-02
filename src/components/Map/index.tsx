import { useCharacterTeleport } from "@/hooks/useCharacterTeleport";
import { useControllerMap } from "@/hooks/useControllerMap";
import * as S from "./styles";
import { generateRandomMapsPaths } from "./functions";
import { useMemo } from "react";
import { IMG_MAPS, NAME_MAPS, NAME_MAPS_FORMATED } from "@/constants";
import { useControllerQuiz } from "@/hooks/useControllerQuiz";

export const Map = () => {
  const { openMap, setOpenMap } = useControllerMap();
  const { setOpenQuiz } = useControllerQuiz();
  const { teleportCharacter, currrentMap, savedMap } = useCharacterTeleport();

  const mapsPaths = useMemo(() => generateRandomMapsPaths(), []);

  const handleTeleport = (map: (typeof NAME_MAPS)[number] | undefined) => {
    if (!map) return;
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
          .filter((map) => savedMap[map.name].saved && map.name !== currrentMap)
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
            onClick={() =>
              handleTeleport(
                mapsPaths.find((map) => map.name === currrentMap)?.path.A
              )
            }
          >
            <S.Image src="/plate.svg" width={70} />
            Caminho B
          </S.MapPathButton>
          <S.MapPathButton
            disabled={!savedMap[currrentMap].saved}
            onClick={() =>
              handleTeleport(
                mapsPaths.find((map) => map.name === currrentMap)?.path.B
              )
            }
          >
            <S.Image src="/plate.svg" width={70} />
            Caminho B
          </S.MapPathButton>
        </S.MapPath>
      </S.CurrentMap>
      {!savedMap[currrentMap].saved && (
        <button onClick={handleOpenQuiz}>Salvar ilha</button>
      )}
    </S.Container>
  );
};
