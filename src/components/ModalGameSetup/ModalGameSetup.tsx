import { useModalManagerStore } from "@/lib/stores/useModalManagerStore";
import { Modal } from "../organisms/Modal/Modal";
import { useAudio } from "@/lib/hooks/useAudio";
import { ButtonText } from "../atoms/ButtonText/ButtonText";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";

export const ModalGameSetup = () => {
  const modal = useModalManagerStore((state) => state.modal);

  const { toggleBackgroundAudio } = useAudio();

  const handleCloseModal = useModalManagerStore(
    (state) => state.handleCloseModal
  );
  const handleResetGame = useManagerIslandStore(
    (state) => state.handleResetGame
  );

  return (
    <Modal.Root open={modal === "game-setup"} onClose={handleCloseModal}>
      <Modal.Content>
        <Modal.Header>
          <p>Visite as ilhas</p>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <ButtonText
                title="Ativar Música"
                onClick={toggleBackgroundAudio}
              />
            </div>
            <div>
              <ButtonText title="Resetar Jogo" onClick={handleResetGame} />
            </div>
            <div>
              <ButtonText title="Fechar" onClick={handleCloseModal} />
            </div>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
