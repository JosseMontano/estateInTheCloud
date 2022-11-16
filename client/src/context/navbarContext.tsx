import { createContext, useContext } from "react";
import Navbar from "@/components/navbar";

interface Children {
  children: JSX.Element;
}
interface DefaultType {
  showNavbar: () => JSX.Element;
}

const contextDefaultValue: DefaultType = {
  showNavbar: () => {
    return <Navbar />;
  },
};

export const NavbarContext = createContext<DefaultType>(contextDefaultValue);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error(
      "this contexts must be used whitin a NavbarContextProvider"
    );
  }
  return context;
};

export const NavbarContextProvider = ({ children }: Children) => {
  const showNavbar = () => {
    return <Navbar />;
  };

  return (
    <NavbarContext.Provider value={{ showNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};
