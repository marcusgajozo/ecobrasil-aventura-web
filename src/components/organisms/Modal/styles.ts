import styled, { keyframes } from "styled-components";
import bgModal from "@images/bg-modal.svg";

const gentleCartoonZoom = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  60% {
    opacity: 1;
    transform: scale(1.05);
  }
  80% {
    transform: scale(0.98);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  user-select: none;
  animation: ${gentleCartoonZoom} 0.4s ease-out;

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
  justify-content: space-between;
  align-items: center;
  min-width: 30rem;
  min-height: 30rem;
  border-radius: 15%;
  padding: 1.7rem;
  gap: 1rem;
  background-image: url(${bgModal});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
