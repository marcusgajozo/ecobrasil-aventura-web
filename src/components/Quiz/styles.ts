import styled from "styled-components";

export const Container = styled.div<{ openQuiz: boolean }>`
  display: ${({ openQuiz }) => (openQuiz ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const ContainerQuiz = styled.div`
  position: relative;
  width: 400px;
  height: max-content;
  background: url("bg-quiz.svg");
  background-size: cover;
  border-radius: 45px;
  padding: 26px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);

  .quiz-svg {
    position: absolute;
    top: -40px;
    width: 20rem;
    height: auto;
    image-rendering: crisp-edges; /* Para Chrome e Edge */
    image-rendering: pixelated; /* Para Firefox */
    object-fit: contain;
  }

  .close-svg {
    position: absolute;
    top: -18px;
    right: -18px;
    width: 7rem;
    height: auto;
    image-rendering: crisp-edges; /* Para Chrome e Edge */
    image-rendering: pixelated; /* Para Firefox */
    object-fit: contain;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease-in-out;
    }
  }

  h2 {
    font-family: "Grandstander Variable", "Poppins", sans-serif;
    font-size: 3.5rem;
    letter-spacing: -0.2rem;
    color: ${({ theme }) => theme.colors.yallow};
  }

  .question-content {
    background: ${({ theme }) => theme.colors.white};
    padding: 16px 40px;
    border-radius: 18px;
    position: relative;
    margin-bottom: 3.5rem;
  }

  .question-text {
    font-size: 2.2rem;
    color: #1d502c;
    font-weight: bold;
  }

  .question-timer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Grandstander Variable", "Poppins", sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    background-color: #1d502c;
    width: 60px;
    height: 60px;
    position: absolute;
    border: 6px solid #35854a;
    border-radius: 100%;
    right: -10px;
    bottom: -20px;
  }

  .options {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 100%;
  }

  .button {
    font-family: "Grandstander Variable", "Poppins", sans-serif;
    font-size: 3rem;
    color: #1d502c;
    background: #ffc107;
    padding: 10px 30px;
    border-radius: 16px;
    font-weight: bold;
    letter-spacing: -0.2rem;
    cursor: pointer;
    text-align: center;
    margin-top: 3rem;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease-in-out;
    }
  }
`;

export const Option = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  color: #1d502c;
  background: ${({ theme, selected }) =>
    selected ? "#6EE03D" : theme.colors.white};
  padding: 10px 20px;
  border-radius: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }

  .num {
    font-family: "Grandstander Variable", "Poppins", sans-serif;
    font-size: 3rem;
  }

  .text {
    font-family: "Poppins", sans-serif;
  }
`;
