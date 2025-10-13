type ToastCustomProps = {
  message: string;
};

export const ToastCustom = ({ message }: ToastCustomProps) => {
  return <div>{message}</div>;
};
