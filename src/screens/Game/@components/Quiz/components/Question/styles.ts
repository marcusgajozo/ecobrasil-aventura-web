import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .question-content {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
    width: 25rem;
    min-height: 4rem;
    padding: 1rem;
    font-weight: 800;
    font-size: 1.2rem;
    position: relative;
  }

  .question-timer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Grandstander Variable", "Poppins", sans-serif;
    font-size: 2rem;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.green[800]};
    padding: 0.5rem;
    border-radius: 100%;
    width: 3rem;
    height: 3rem;
    right: 1rem;
    letter-spacing: -0.1rem;
    color: ${({ theme }) => theme.colors.white};
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 2.5rem;
  }
`;

export const Option = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.green[200] : theme.colors.white};
  padding: 0.8rem 1.5rem;
  border-radius: 1rem;
  font-family: "Grandstander Variable", "Poppins", sans-serif;
  font-weight: ${({ selected }) => (selected ? 700 : 600)};
  cursor: pointer;
  border: ${({ selected, theme }) =>
    selected ? `0.2rem solid ${theme.colors.green[500]}` : "none"};
`;
