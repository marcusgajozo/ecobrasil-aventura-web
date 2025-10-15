const styles = {
  correct: "bg-success",
  incorrect: "bg-warning",
};

type PlayFeedbackProps = {
  gotRight: boolean | undefined;
  response?: string;
};

export const PlayFeedback = ({ gotRight, response }: PlayFeedbackProps) => {
  return (
    <div
      className={`${
        gotRight ? styles.correct : styles.incorrect
      } flex flex-col justify-center items-center p-2 rounded-md mb-3 `}
    >
      <p className="font-primary text-2xl">
        {gotRight ? "Você acertou, parabéns!" : "Você errou, tente novamente!"}
      </p>
      <p className="text-sm text-green-800 bg-green-500 font-bold p-2 rounded-md">
        R: {response}
      </p>
    </div>
  );
};
