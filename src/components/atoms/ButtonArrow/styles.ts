import { Direction } from "./ButtonArrow";
import styled from "styled-components";

const rotationDegrees: Record<Direction, number> = {
  right: 0,
  down: -90,
  left: 180,
  up: 90,
};

export const ArrowWrapper = styled.div<{ $direction: Direction }>`
  transform: rotate(${(props) => rotationDegrees[props.$direction]}deg);
  width: fit-content;
  display: inline-block;
  user-select: none;
`;

export const ArrowImage = styled.img<{ $size: string }>`
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  object-fit: contain;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  cursor: pointer;
`;
