import { ToastCustom } from "@/components/toast-custom";
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
