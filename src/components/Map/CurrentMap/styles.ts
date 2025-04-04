import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  border: 2px solid #ffc107;
  position: relative;

  .badge-map-current {
    position: absolute;
    top: 20px;
    left: 30px;
    background-color: #ffc107;
    color: #12502c;
    font-weight: 600;
    border-radius: 40px;
    font-size: 12px;
    padding: 5px 15px;
    width: 120px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 2.5rem;
      color: rgb(13, 54, 30);
      margin-bottom: 1rem;
    }
  }

  .content-maps-paths {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

    span {
      font-family: "Grandstander Variable", "Poppins", sans-serif;
      font-size: 2.5rem;
      font-weight: 600;
    }
  }

  .path-description-a {
    position: absolute;
    left: 65px;
    top: 130px;
    font-family: "Grandstander Variable", "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffc107;
    background-color: #12502c;
    border-radius: 40px;
    padding: 5px 10px;
  }

  .path-description-b {
    position: absolute;
    right: 75px;
    top: 130px;
    font-family: "Grandstander Variable", "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffc107;
    background-color: #12502c;
    border-radius: 40px;
    padding: 5px 10px;
  }

  .unknown-map {
    font-family: "Grandstander Variable", "Poppins", sans-serif;
    font-size: 13rem;
    font-weight: 600;
    color: #ffc107;
    background-color: #12502c;
    border-radius: 40px;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
