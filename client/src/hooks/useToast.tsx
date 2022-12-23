import { useState } from "react";

const useToast = () => {
  const [toast, seToast] = useState("");
  const handleToast = (newToast: string) => {
    const msg = newToast;
    seToast(msg);
  };

  return {
    toast,
    handleToast,
  };
};
export default useToast;
