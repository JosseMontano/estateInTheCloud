import { useState } from "react";

interface Params {
  show?: boolean;
}

export const UseModal = ({ show }: Params) => {
  let constShow = show ? show : false;
  const [isShown, setIsShown] = useState<boolean>(constShow);
  const toggle = () => setIsShown(!isShown);
  return {
    isShown,
    toggle,
  };
};
