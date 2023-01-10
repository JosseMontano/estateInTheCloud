import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateTokenExits } from "@/global/services/auth";

export const useVerifyUserLogin = () => {
  let navigate = useNavigate();
  const verifyFun = async () => {
    const res = await validateTokenExits();
    if (res.message == "jwt must be provided") {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyFun();
  }, []);
  return { verifyFun };
};

export default useVerifyUserLogin;
