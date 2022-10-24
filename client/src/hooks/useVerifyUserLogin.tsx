import { useNavigate } from "react-router-dom";
import { validateTokenExits } from "../services/auth";

export const useVerifyUserLogin = () => {
  let navigate = useNavigate();
  const verifyFun = async () => {
    const res = await validateTokenExits();
    if (res.message == "jwt must be provided") {
      navigate("/");
    }
  };
  return { verifyFun };
};

export default useVerifyUserLogin;
