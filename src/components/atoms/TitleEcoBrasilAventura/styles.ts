import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: 5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.green[800]};
`;
