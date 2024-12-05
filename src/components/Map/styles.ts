import styled from "styled-components";

export const Container = styled.div<{ openMap: boolean }>`
  display: ${({ openMap }) => (openMap ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 450px;
  height: 450px;
  background-color: ${({ theme }) => theme.colors.white};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;
