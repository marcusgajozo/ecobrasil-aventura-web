import styled from "styled-components";

export const Container = styled.div<{ openMap: boolean }>`
  display: ${({ openMap }) => (openMap ? "flex" : "none")};
  position: absolute;
  width: 800px;
  height: 500px;
  border-radius: 100px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: url("bg-quiz.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 10px 15px 20px 15px;
  flex-direction: column;

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

  .subtitle {
    font-family: "Grandstander Variable", "Poppins", sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: -0.1rem;
    color: ${({ theme }) => theme.colors.yallow};
    padding-left: 1.5rem;
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

  .content-maps {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 2rem;
    justify-content: center;
  }

  .mapa-svg {
    position: absolute;
    top: -35px;
    width: 20rem;
    height: auto;
    image-rendering: crisp-edges; /* Para Chrome e Edge */
    image-rendering: pixelated; /* Para Firefox */
    object-fit: contain;
  }
`;
