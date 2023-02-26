/* import { validateTokenExits } from "../services/auth"; */
import { useNavigate } from "react-router-dom";
import Navbar from "@/global/components/navbar";

interface Params {
  children: JSX.Element;
  path: string;
}

interface routesType {
  [key: string]: JSX.Element;
}

const ProtectedRoute = ({ children, path }: Params) => {
  const navigate = useNavigate();

/*   const verifyFun = async () => {
    const res = await validateTokenExits();
    if (res.message == "jwt must be provided") {
      navigate("/");
    }
  }; */

  const showNavbar = () => {
    const routesWithOutNavbar: routesType = {
      "/": <p></p>,
    };

    return routesWithOutNavbar[path] ?? <Navbar />;
  };



  return (
    <>
      {showNavbar()}
      {children}
    </>
  );
};

export default ProtectedRoute;
