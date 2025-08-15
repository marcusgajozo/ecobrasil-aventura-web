import theme from "@/styles/theme";
import * as S from "./styles";

export type ButtonTextProps = {
  title: string;
} & Partial<S.ButtonProps> &
  Omit<React.HTMLProps<HTMLDivElement>, "children">;

export const ButtonText = ({
  title,
  colorText = theme.colors.green[500],
  colorBorder = theme.colors.green[100],
  textSizeRem = 2,
  ...props
}: ButtonTextProps) => {
  return (
    <S.Button {...props} {...{ colorBorder, colorText, textSizeRem }}>
      {title}
    </S.Button>
  );
};
