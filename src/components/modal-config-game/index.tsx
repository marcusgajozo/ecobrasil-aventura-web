import { useAudio } from "@/lib/hooks/use-audio";
import { useManagerGameStore } from "@/lib/stores/use-manager-game-store";
import { useModalManagerStore } from "@/lib/stores/use-modal-manager-store";
import { Modal } from "../modal";
import { Button } from "../button";

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
