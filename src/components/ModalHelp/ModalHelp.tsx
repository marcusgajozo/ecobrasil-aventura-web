import { useModalManagerStore } from "@/lib/stores/useModalManagerStore";
import { Button } from "../atoms/Button/Button";
import { Modal } from "../organisms/Modal/Modal";

export const ModalHelp = () => {
  const modal = useModalManagerStore((state) => state.modal);

  const handleCloseModal = useModalManagerStore(
    (state) => state.handleCloseModal
  );
  const handleOpenModal = useModalManagerStore(
    (state) => state.handleOpenModal
  );

  return (
    <Modal.Root open={modal === "help"} onClose={handleCloseModal}>
      <Modal.Content>
        <Modal.Header title="Precisa de ajuda?" />
        <Modal.Body>
          <div className="flex flex-col gap-4">
            <Button
              title="Mostrar tutorial"
              onClick={() => handleOpenModal("tutorial")}
              className="bg-primary-200"
              iconName="ClipboardPen"
            >
              Mostrar tutorial
            </Button>
            <Button
              title="Mostrar controles"
              iconName="Joystick"
              className="bg-warning-500"
            >
              Mostrar controles
            </Button>
            <Button
              title="Sobre o jogo"
              iconName="ScrollText"
              className="bg-sky-600"
            >
              Sobre o jogo
            </Button>
            <a
              href="https://forms.gle/ZpvhPBNPo3t61g2Z6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                title="Mostrar controles"
                iconName="Send"
                className="w-full"
              >
                Enviar feedback
              </Button>
            </a>
          </div>
        </Modal.Body>
        <Modal.ContentButtons>
          <Modal.ButtonClose onClick={handleCloseModal} />
        </Modal.ContentButtons>
      </Modal.Content>
    </Modal.Root>
  );
};
