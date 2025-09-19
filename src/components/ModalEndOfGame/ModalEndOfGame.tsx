import { NAME_ISLAND } from "@/lib/constants/island";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import { useModalManagerStore } from "@/lib/stores/useModalManagerStore";
import { useEffect, useMemo } from "react";
import { Modal } from "../organisms/Modal/Modal";

export const ModalEndOfGame = () => {
  const modal = useModalManagerStore((state) => state.modal);
  const islandsInformation = useManagerIslandStore(
    (state) => state.islandsInformation
  );

  const handleCloseModal = useModalManagerStore(
    (state) => state.handleCloseModal
  );
  const handleOpenModal = useModalManagerStore(
    (state) => state.handleOpenModal
  );

  const endOfGame = useMemo(() => {
    return NAME_ISLAND.every((island) => islandsInformation[island].saved);
  }, [islandsInformation]);

  useEffect(() => {
    if (endOfGame) {
      handleOpenModal("end-of-game");
    }
  }, [endOfGame, handleCloseModal]);

  return (
    <Modal.Root open={modal === "end-of-game"} onClose={handleCloseModal}>
      <Modal.Content>
        <Modal.Header title="Fim de Jogo" />
        <Modal.Body>
          <div>Parabéns você completou sua missão</div>
        </Modal.Body>
        <Modal.ContentButtons>
          <Modal.ButtonClose onClick={handleCloseModal} />
        </Modal.ContentButtons>
      </Modal.Content>
    </Modal.Root>
  );
};
