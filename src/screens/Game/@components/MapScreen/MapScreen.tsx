import { Modal } from "@/components/organisms/Modal/Modal";
import { useControllerMap } from "@/lib/hooks/useControllerMap";
import mapaSvg from "@images/mapa.svg";
import { CurrentMap } from "./components/CurrentMap";
import { MapsVisited } from "./components/MapsVisited";
import * as S from "./styles";

export const MapScreen = () => {
  const { openMap, setOpenMap } = useControllerMap();

  const handleCloseQuiz = () => {
    setOpenMap(false);
  };

  return (
    <Modal.Root
      open={openMap}
      onClose={handleCloseQuiz}
      imageTitlePath={mapaSvg}
    >
      <Modal.Content>
        <Modal.Header>
          <S.Subtitle>Visite as ilhas</S.Subtitle>
        </Modal.Header>
        <Modal.Body>
          <S.Container>
            <MapsVisited />
            <CurrentMap />
          </S.Container>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
