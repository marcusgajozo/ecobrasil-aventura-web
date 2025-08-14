import { ButtonText } from "@/components/atoms/ButtonText/ButtonText";
import { Modal } from "@/components/organisms/Modal/Modal";
import { useControllerQuiz } from "@/lib/hooks/useControllerQuiz";
import { useToastCustom } from "@/lib/hooks/useToastCustom";
import { useManagerIslandStore } from "@/lib/stores/useManagerIslandStore";
import theme from "@/styles/theme";
import quizSvg from "@images/quiz.svg";
import { useEffect } from "react";
import { useQuiz } from "../hooks/useQuiz";
import { Question } from "./Question/Question";

// TODO: create Congratulation component to show when the user answers 3 questions correctly
export const QuizModal = () => {
  const { openQuiz, setOpenQuiz } = useControllerQuiz();
  const currentIsland = useManagerIslandStore((state) => state.currentIsland);
  const { showToast } = useToastCustom();
  const { state, dispatch } = useQuiz();
  const { questionsAnsweredCorrectly, selectedOption } = state;

  const handleSaveIsland = useManagerIslandStore(
    (state) => state.handleSaveIsland
  );
  const handleCloseQuiz = () => {
    dispatch({ type: "RESET_QUIZ" });
    setOpenQuiz(false);
  };

  const handleClick = () => {
    if (selectedOption !== undefined) dispatch({ type: "NEXT_QUESTION" });
    showToast({
      message: "Resposta enviada!",
      backgroundColor: theme.colors.yallow,
    });
  };

  useEffect(() => {
    if (questionsAnsweredCorrectly === 3) {
      handleSaveIsland(currentIsland);
    }
  }, [currentIsland, questionsAnsweredCorrectly, handleSaveIsland]);

  return (
    <Modal.Root
      open={openQuiz}
      imageTitlePath={quizSvg}
      onClose={handleCloseQuiz}
    >
      <Modal.Content>
        <Modal.Header>
          <h2 style={{ color: theme.colors.yallow }}>EcoBrasil Aventura</h2>
        </Modal.Header>
        <Modal.Body>
          {questionsAnsweredCorrectly === 3 && (
            <h2>
              Parabéns! Você salvou a ilha <br /> Respondeu 3 perguntas
              corretamente!
            </h2>
          )}
          {questionsAnsweredCorrectly < 3 && <Question />}
        </Modal.Body>
        <Modal.Footer>
          {questionsAnsweredCorrectly < 3 && (
            <ButtonText
              title="Enviar"
              onClick={handleClick}
              textSizeRem={2.2}
              colorText={theme.colors.yallow}
              colorBorder={"none"}
            />
          )}
          {questionsAnsweredCorrectly === 3 && (
            <ButtonText
              title="Fechar"
              onClick={handleClick}
              colorText={theme.colors.yallow}
              colorBorder={"none"}
            />
          )}
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
};
