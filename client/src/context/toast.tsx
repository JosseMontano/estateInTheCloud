import { createContext, useState } from "react";
import { ToastContextState, MyContextProp } from "../interface/toastContext";

const contextDefaulValue: ToastContextState = {
  toast: "Ha ocurrido un error",
  handleToast: () => {},
};
export const ToastContext =
  createContext<ToastContextState>(contextDefaulValue);

export const ToastProvider = ({ children }: MyContextProp) => {
  const [toast, seToast] = useState<string>(contextDefaulValue.toast);
  const handleToast = (newToast: string) => {
    const msg = newToast;
    seToast(msg);
  };
  return (
    <ToastContext.Provider
      value={{
        toast,
        handleToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
export default ToastProvider;
