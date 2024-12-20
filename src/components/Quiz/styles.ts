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
  background-color: #fff;
  font-size: 16px;
`;
