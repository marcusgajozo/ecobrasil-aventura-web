import { useAudio } from "@/lib/hooks/useAudio";
import { useManagerGameStore } from "@/lib/stores/useManagerGameStore";
import { useModalManagerStore } from "@/lib/stores/useModalManagerStore";
import { Button } from "../atoms/Button/Button";
import { Modal } from "../organisms/Modal/Modal";

export const ModalConfigGame = () => {
  const modal = useModalManagerStore((state) => state.modal);

  const { toggleBackgroundAudio, isPaused } = useAudio();

  const handleCloseModal = useModalManagerStore(
    (state) => state.handleCloseModal
  );

  const handleResetGame = useManagerGameStore((state) => state.handleResetGame);

  const statusAudio = isPaused ? "Ativar" : "Pausar";

  return (
    <Modal.Root open={modal === "config-game"} onClose={handleCloseModal}>
      <Modal.Content>
        <Modal.Header title="Configuração do Jogo" />
        <Modal.Body>
          <div className="flex flex-col gap-4">
            <Button
              title="Ativar Música"
              onClick={toggleBackgroundAudio}
              className="bg-amber-500"
              iconName="Music"
            >
              {statusAudio} Música
            </Button>
            <Button
              title="Resetar Jogo"
              onClick={handleResetGame}
              iconName="RotateCcw"
            >
              Resetar Jogo
            </Button>
          </div>
        </Modal.Body>
        <Modal.ContentButtons>
          <Modal.ButtonClose onClick={handleCloseModal} />
        </Modal.ContentButtons>
      </Modal.Content>
    </Modal.Root>
  );
};
