import { useControllerMap } from "@/lib/hooks/useControllerMap";
import { CurrentMap } from "./CurrentMap";
import { MapsVisited } from "./MapsVisited";
import * as S from "./styles";

export const MapScreen = () => {
  const { openMap, setOpenMap } = useControllerMap();

  const handleCloseQuiz = () => {
    setOpenMap(false);
  };

  return (
    <S.Container openMap={openMap}>
      <S.Content>
        <img
          className="close-svg"
          src="/close.svg"
          alt="Fechar"
          onClick={handleCloseQuiz}
        />
        <img className="mapa-svg" src="/mapa.svg" alt="mapa" />
        <span className="subtitle">EcoBrasil Aventura</span>
        <div className="content-maps">
          <MapsVisited />
          <CurrentMap />
        </div>
      </S.Content>
    </S.Container>
  );
};
