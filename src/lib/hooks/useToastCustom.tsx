import { ToastCustom } from "@/components/atoms/ToastCustom/ToastCustom";
import toast from "react-hot-toast";

export const useToastCustom = () => {
  const showToast = ({
    backgroundColor,
    message,
  }: {
    message: string;
    backgroundColor: string;
  }) => {
    toast(() => <ToastCustom message={message} />, {
      style: {
        backgroundColor,
      },
    });
  };

  return { showToast };
};
