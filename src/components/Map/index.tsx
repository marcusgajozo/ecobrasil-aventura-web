import { useControllerMap } from "@/hooks/useControllerMap";
import * as S from "./styles";
import { useCharacterTeleport } from "@/hooks/useCharacterTeleport";
import { positionsColorsMaps } from "@/constants";

export const Map = () => {
  const { openMap } = useControllerMap();
  const { character } = useCharacterTeleport();

  const handleTeleport = (nameMap: string) => {
    if (character.current) {
      const positionMap = positionsColorsMaps.find(
        (map) => map.name === nameMap
      );
      if (positionMap?.position) {
        positionMap.position.y = 5;
        character.current.setTranslation(positionMap.position, true);
      }
    }
  };

  return (
    <S.Container openMap={openMap}>
      <button onClick={() => handleTeleport("map1")}>Map 1</button>
      <button onClick={() => handleTeleport("map2")}>Map 2</button>
      <button onClick={() => handleTeleport("map3")}>Map 3</button>
      <button onClick={() => handleTeleport("map4")}>Map 4</button>
      <button onClick={() => handleTeleport("map5")}>Map 5</button>
    </S.Container>
  );
};
