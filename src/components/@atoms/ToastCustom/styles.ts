import styled from "styled-components";

export const Container = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
