import styled from "styled-components";

export const Container = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  position: absolute;
  width: 32rem;
  height: 32rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 1rem 0 ${({ theme }) => theme.colors.black}BF;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  height: 48px;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  border: ${({ theme }) => theme.colors.black};
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
`;
