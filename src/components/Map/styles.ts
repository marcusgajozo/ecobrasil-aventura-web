import styled from "styled-components";

export const Container = styled.div<{ openMap: boolean }>`
  display: ${({ openMap }) => (openMap ? "flex" : "none")};
  position: absolute;
  width: 800px;
  height: 500px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #96c28c;
  border-radius: 40px;
  align-items: center;
  gap: 2rem;
  padding: 40px 15px 20px 15px;

  .maps-visited {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    overflow-y: auto;
    padding: 1rem 0;
    border-radius: 40px;
    border: 2px solid #1e854a;
    width: 30%;
    height: 100%;
    position: relative;

    .badge-maps-visited {
      background-color: #1e854a;
      color: #fff;
      border-radius: 40px;
      font-size: 12px;
      padding: 5px 15px;
      margin-top: 10px;
    }
  }

  .container-map-current {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 100%;
    border-radius: 40px;
    border: 2px solid #1e854a;
    position: relative;

    .badge-map-current {
      position: absolute;
      top: 20px;
      left: 30px;
      background-color: #1e854a;
      color: #fff;
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
      width: 70%;

      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 2.5rem;
        color: #1d502c;
        margin-bottom: 1rem;
      }

      .maps-paths {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 1rem;

        span {
          font-family: "Grandstander Variable", "Poppins", sans-serif;
          font-size: 12rem;
          font-weight: 800;
          color: #1d502c;
        }
      }
    }
  }

  .button-save-map {
    font-family: "Grandstander Variable", "Poppins", sans-serif;
    font-size: 3rem;
    color: #1d502c;
    background: #ffc107;
    padding: 10px 30px;
    border-radius: 16px;
    font-weight: bold;
    letter-spacing: -0.2rem;
    cursor: pointer;
    text-align: center;
    margin-top: 3rem;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease-in-out;
    }
  }

  .close-svg {
    position: absolute;
    top: -18px;
    right: -18px;
    width: 7rem;
    height: auto;
    image-rendering: crisp-edges; /* Para Chrome e Edge */
    image-rendering: pixelated; /* Para Firefox */
    object-fit: contain;
    cursor: pointer;
    z-index: 9999;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease-in-out;
    }
  }
`;
