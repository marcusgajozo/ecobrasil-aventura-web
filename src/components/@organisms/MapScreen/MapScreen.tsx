import { useControllerMap } from "@/lib/hooks/useControllerMap";
import { CurrentMap } from "./components/CurrentMap";
import { MapsVisited } from "./components/MapsVisited";
import * as S from "./styles";
import { Modal } from "../Modal/Modal";

export const MapScreen = () => {
  const { openMap, setOpenMap } = useControllerMap();

  const handleCloseQuiz = () => {
    setOpenMap(false);
  };

  return (
    <Modal.Root open={openMap} onClose={handleCloseQuiz}>
      <Modal.Content>
        <Modal.Header title="Visite as ilhas" />
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
