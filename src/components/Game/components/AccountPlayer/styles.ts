import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  height: 70px;
  border-radius: 2rem;
  padding: 0 2rem;
`;

export const ContentName = styled.div``;

export const Name = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 1rem;
  padding: 1rem;
`;

export const ContentSettings = styled.div``;
