/* import { validateTokenExits } from "../services/auth"; */
import Navbar from "@/global/components/navbar";

interface Params {
  children: JSX.Element;
  path: string;
}

interface routesType {
  [key: string]: JSX.Element;
}

const ProtectedRoute = ({ children, path }: Params) => {
  /*   const verifyFun = async () => {
    const res = await validateTokenExits();
    if (res.message == "jwt must be provided") {
      navigate("/");
    }
  }; */

  const showNavbar = () => {
    let isHome = false;
    const routesWithOutNavbar: routesType = {
      "/": <p></p>,
      "/register": <p></p>,
    };
    if (path == "/home") isHome = true;
    return routesWithOutNavbar[path] ?? <Navbar isHome={isHome} />;
  };

  return (
    <>
      {showNavbar()}
      {children}
    </>
  );
};

export default ProtectedRoute;
