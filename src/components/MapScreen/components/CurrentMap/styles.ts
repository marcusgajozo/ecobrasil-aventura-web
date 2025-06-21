import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.yallow};
  position: relative;
  padding: 2rem;

  .current-name-map {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.yallow};
  }

  .current-map {
    width: 10rem;
    height: auto;
  }

  .current-map-description {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.green[800]};
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 20px;
    margin-top: 1rem;
    max-width: 30rem;
  }

  .badge-map-current {
    position: absolute;
    top: 20px;
    left: 30px;
    background-color: ${({ theme }) => theme.colors.yallow};
    color: ${({ theme }) => theme.colors.green[800]};
    font-weight: 600;
    border-radius: 40px;
    font-size: 12px;
    padding: 5px 15px;
    width: 120px;
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-maps-paths {
    display: flex;
    align-items: center;
    gap: 20rem;
    margin-top: 1rem;
  }

  .map-path {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    width: 150px;
    height: 150px;

    img {
      border-radius: 40px;
      width: auto;
      height: 100%;
    }

    h4 {
      font-size: 1.2rem;
      letter-spacing: normal;
      color: ${({ theme }) => theme.colors.yallow};
    }
  }

  .path-description {
    position: absolute;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: normal;
    color: ${({ theme }) => theme.colors.yallow};
    background-color: ${({ theme }) => theme.colors.green[800]};
    border: 0.1rem solid ${({ theme }) => theme.colors.yallow};
    border-radius: 40px;
    padding: 5px 10px;
  }

  .path-a {
    left: 2.4rem;
    top: 10rem;
  }

  .path-b {
    right: 2.4rem;
    top: 10rem;
  }

  .unknown-map {
    font-family: "Grandstander Variable", "Poppins", sans-serif;
    font-size: 6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.yallow};
    background-color: ${({ theme }) => theme.colors.green[800]};
    border-radius: 40px;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
