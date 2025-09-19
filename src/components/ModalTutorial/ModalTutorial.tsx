import { useModalManagerStore } from "@/lib/stores/useModalManagerStore";
import { Modal } from "../organisms/Modal/Modal";

export const ModalTutorial = () => {
  const modal = useModalManagerStore((state) => state.modal);

  const handleCloseModal = useModalManagerStore(
    (state) => state.handleCloseModal
  );

  return (
    <Modal.Root open={modal === "tutorial"} onClose={handleCloseModal}>
      <Modal.Content>
        <Modal.Header title="Tutorial do Jogo" />
        <Modal.Body>
          <div className="flex flex-col gap-4">Tutorial</div>
        </Modal.Body>
        <Modal.ContentButtons>
          <Modal.ButtonClose onClick={handleCloseModal} />
        </Modal.ContentButtons>
      </Modal.Content>
    </Modal.Root>
  );
};
