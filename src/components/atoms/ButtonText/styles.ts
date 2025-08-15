import styled from "styled-components";

export type ButtonProps = {
  colorText: string;
  colorBorder: string;
  textSizeRem: number;
};

export const Button = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  user-select: none;

  font-family: ${({ theme }) => theme.fonts.secondary};

  font-size: ${({ textSizeRem }) => `${textSizeRem}rem`};
  padding: ${({ textSizeRem }) =>
    `${textSizeRem * 0.02}rem ${textSizeRem * 0.5}rem`};
  border-radius: ${({ textSizeRem }) => `${textSizeRem * 0.6}rem`};

  color: ${({ colorText }) => colorText};
  letter-spacing: -0.1rem;
  font-weight: 800;

  background-color: transparent;
  border: none;

  text-shadow: 1px 1px 0 ${({ colorBorder }) => colorBorder};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0 4px ${({ colorText }) => colorText};
  }

  &:active {
    transform: scale(0.95);
  }
`;
