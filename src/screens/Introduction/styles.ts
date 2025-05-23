import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.green[400]};

  .card {
    background-color: ${({ theme }) => theme.colors.white};
    width: 500px;
    height: 400px;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;

    button {
      background-color: ${({ theme }) => theme.colors.green[800]};
      color: ${({ theme }) => theme.colors.white};
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.green[600]};
      }
    }
  }
`;
