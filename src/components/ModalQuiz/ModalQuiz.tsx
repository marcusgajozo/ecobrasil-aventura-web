import { Modal } from "@/components/organisms/Modal/Modal";
import { useToastCustom } from "@/lib/hooks/useToastCustom";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import { useModalManagerStore } from "@/lib/stores/useModalManagerStore";
import theme from "@/styles/theme";
import { useEffect } from "react";
import { Button } from "../atoms/Button/Button";
import { useQuizReducer } from "./hooks/useQuizReducer";

export const ModalQuiz = () => {
  const currentIsland = useManagerIslandStore((state) => state.currentIsland);
  const { showToast } = useToastCustom();
  const [quizState, dispatch] = useQuizReducer();

  const modal = useModalManagerStore((state) => state.modal);
  const handleCloseModal = useModalManagerStore(
    (state) => state.handleCloseModal
  );

  const handleSaveIsland = useManagerIslandStore(
    (state) => state.handleSaveIsland
  );

  const handleCloseQuiz = () => {
    dispatch({ type: "RESET_QUIZ" });
    handleCloseModal();
  };

  const handleClick = () => {
    if (quizState.selectedOption !== undefined)
      dispatch({ type: "NEXT_QUESTION" });
    showToast({
      message: "Resposta enviada!",
      backgroundColor: theme.colors.yallow,
    });
  };

  useEffect(() => {
    if (quizState.questionsAnsweredCorrectly === 3) {
      handleSaveIsland(currentIsland);
    }
  }, [currentIsland, quizState.questionsAnsweredCorrectly, handleSaveIsland]);

  return (
    <Modal.Root open onClose={handleCloseQuiz}>
      <Modal.Content>
        <Modal.Header>
          <h2 className="font-jersey">EcoBrasil Aventura</h2>
        </Modal.Header>
        <Modal.Body>
          {quizState.questionsAnsweredCorrectly === 3 && (
            <h2>
              Parabéns! Você salvou a ilha <br /> Respondeu 3 perguntas
              corretamente!
            </h2>
          )}
          {/* {quizState.questionsAnsweredCorrectly < 3 && </>} */}
        </Modal.Body>
        <Modal.Footer>
          {quizState.questionsAnsweredCorrectly < 3 && <Button>Enviar</Button>}
          {quizState.questionsAnsweredCorrectly === 3 && (
            <Button onClick={handleClick}>Fechar</Button>
          )}
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
};
