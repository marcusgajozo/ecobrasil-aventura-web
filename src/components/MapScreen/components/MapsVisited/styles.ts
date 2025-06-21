import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.yallow};
  width: 30%;
  padding: 1rem;
  position: relative;

  .badge-maps-visited {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.yallow};
    color: ${({ theme }) => theme.colors.green[800]};
    border-radius: 40px;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 15px;
    top: 1rem;
  }

  .maps {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-auto-flow: column;
    gap: 1rem;
    width: fit-content;
    margin-top: 2.5rem;

    /* Ajuste dinâmico baseado na quantidade de filhos */
    &:has(.map:nth-child(1):last-child) .map {
      width: 100%;
    }

    &:has(.map:nth-child(2):last-child) .map {
      width: 10rem;
    }

    &:has(.map:nth-child(3):last-child) .map {
      width: 6rem;
    }

    /* Para 4 ou mais mapas (2+ colunas) */
    &:has(.map:nth-child(4)) .map {
      width: 6rem;
    }
  }

  .map {
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;
