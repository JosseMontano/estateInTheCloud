import { createContext, useContext, useState } from "react";

interface LoadContextState {
  nameUser: string;
  idUser: number;
  email: string;
  handlenameUser: (sendL: string, id: number, email: string) => void;
}
interface MyContextProp {
  children: JSX.Element;
}
const contextDefaultValue: LoadContextState = {
  nameUser: "",
  idUser: 0,
  email: "",
  handlenameUser: () => {},
};
export const NameUserContext = createContext(contextDefaultValue);

export const useNameUser = () => {
  const context = useContext(NameUserContext);
  if (!context) {
    throw new Error(
      "this contexts must be used whitin a nameUserContextProvider"
    );
  }
  return context;
};


export const NameUserProvider = ({ children }: MyContextProp) => {
  const [nameUser, setnameUser] = useState<string>(
    contextDefaultValue.nameUser
  );
  const [idUser, setidUser] = useState<number>(contextDefaultValue.idUser);
  const [email, setEmail] = useState<string>(contextDefaultValue.email);

  const handlenameUser = (sendload: string, id: number, email: string) => {
    setnameUser(sendload);
    setidUser(id);
    setEmail(email);
  };
  
  return (
    <NameUserContext.Provider
      value={{
        nameUser,
        idUser,
        email,
        handlenameUser,
      }}
    >
      {children}
    </NameUserContext.Provider>
  );
};
export default NameUserProvider;
