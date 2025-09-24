import * as S from "./styles";

type ToastCustomProps = {
  message: string;
};

export const ToastCustom = ({ message }: ToastCustomProps) => {
  return <S.Container>{message}</S.Container>;
};
