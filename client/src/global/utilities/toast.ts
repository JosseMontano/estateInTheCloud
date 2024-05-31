import { toast } from "react-hot-toast";

export const showToast = (msg:string) => {
    toast.success(msg);
  };