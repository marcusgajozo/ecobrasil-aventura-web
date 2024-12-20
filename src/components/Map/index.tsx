import { useCharacterTeleport } from "@/hooks/useCharacterTeleport";
import { useControllerMap } from "@/hooks/useControllerMap";
import * as S from "./styles";
import { generateRandomMapsPaths } from "./functions";
import { useMemo } from "react";
import { NAME_MAPS } from "@/constants";
import { useControllerQuiz } from "@/hooks/useControllerQuiz";

export const Map = () => {
  const { openMap, setOpenMap } = useControllerMap();
  const { setOpenQuiz } = useControllerQuiz();
  const { teleportCharacter, currrentMap, savedMap } = useCharacterTeleport();

  const mapsPaths = useMemo(() => generateRandomMapsPaths(), []);

  const handleTeleport = (map: (typeof NAME_MAPS)[number]) => {
    teleportCharacter(map);
    setOpenMap(false);
  };

  const showSavedMap = (map: (typeof NAME_MAPS)[number]) => {
    const saved = savedMap[map].saved;
    return saved ? "Salvo" : "Não Salvo";
  };

  const handleOpenQuiz = () => {
    setOpenMap(false);
    setOpenQuiz(true);
  };

  // const showButtonSave = (map: (typeof NAME_MAPS)[number]) => {

  // TODO: Somente mostrar no mapa ilhas salvas

  return (
    <S.Container openMap={openMap}>
      <h1>{currrentMap}</h1>
      <S.ContentMap>
        {mapsPaths.map((map, index) => (
          <S.Map key={`${map.name}-${index}`}>
            <S.MapSaved>{showSavedMap(map.name)}</S.MapSaved>
            <S.MapName>{map.name}</S.MapName>

            <S.MapPath>
              <S.MapPathButton
                disabled={map.name !== currrentMap}
                onClick={() => handleTeleport(map.path.A)}
              >
                Caminho A
              </S.MapPathButton>
              <S.MapPathButton
                disabled={map.name !== currrentMap}
                onClick={() => handleTeleport(map.path.B)}
              >
                Caminho B
              </S.MapPathButton>
            </S.MapPath>
          </S.Map>
        ))}
      </S.ContentMap>
      {!savedMap[currrentMap].saved && (
        <button onClick={handleOpenQuiz}>Salvar ilha</button>
      )}
    </S.Container>
  );
};
