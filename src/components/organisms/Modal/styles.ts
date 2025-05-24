import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  user-select: none;

  .content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    z-index: 9999;
    cursor: pointer;
    width: 3.5rem;
    height: 3.5rem;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease-in-out;
    }
  }

  img {
    width: 100%;
    height: auto;
  }

  .title-modal {
    position: absolute;
    top: -2rem;
    width: 8rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green[200]};
  min-width: 30rem;
  min-height: 30rem;
  border-radius: 15%;
`;
