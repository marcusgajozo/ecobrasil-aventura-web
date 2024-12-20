import styled from "styled-components";

export const Container = styled.div<{ openQuiz: boolean }>`
  display: ${({ openQuiz }) => (openQuiz ? "flex" : "none")};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;
