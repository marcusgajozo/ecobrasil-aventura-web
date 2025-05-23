import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 180px;
  height: 60px;
  z-index: 99999;
  background-color: #12502c;
  color: white;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  border: 4px solid #ffcb00;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
