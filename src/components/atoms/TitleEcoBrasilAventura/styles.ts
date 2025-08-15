import styled from "styled-components";

export const Container = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.green[800]};
  }
`;
