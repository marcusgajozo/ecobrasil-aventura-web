import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 60rem;
  gap: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.9rem;
  color: ${({ theme }) => theme.colors.yallow};
  margin: -1.3rem;
`;
