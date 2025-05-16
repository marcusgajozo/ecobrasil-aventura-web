import arrowWood from "@images/arrow-wood.png";
import React from "react";
import * as S from "./styles";

export type Direction = "up" | "down" | "left" | "right";

type ButtonArrowProps = {
  direction?: Direction;
  size?: string; // Ex: '40px', '2rem', '100%'
} & React.HTMLAttributes<HTMLDivElement>;

export const ButtonArrow = ({
  direction = "left",
  size = "100px",
  ...divProps
}: ButtonArrowProps) => {
  return (
    <S.ArrowWrapper $direction={direction} {...divProps}>
      <S.ArrowImage
        src={arrowWood}
        alt={`Flecha apontando para ${direction}`}
        $size={size}
      />
    </S.ArrowWrapper>
  );
};
