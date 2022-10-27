import { createContext, useState } from "react";

interface LoadContextState {
  nameUser: string;
  idUser: number;
  handlenameUser: (sendLoad: string, id: number) => void;
}
interface MyContextProp {
  children: JSX.Element;
}
const contextDefaultValue: LoadContextState = {
  nameUser: "",
  idUser: 0,
  handlenameUser: () => {},
};
export const NameUserContext =
  createContext<LoadContextState>(contextDefaultValue);
const NameUserProvider = ({ children }: MyContextProp) => {
  const [nameUser, setnameUser] = useState<string>(
    contextDefaultValue.nameUser
  );
  const [idUser, setidUser] = useState<number>(contextDefaultValue.idUser);

  const handlenameUser = (sendload: string, id: number) => {
    setnameUser(sendload);
    setidUser(id);
  };
  return (
    <NameUserContext.Provider
      value={{
        nameUser,
        idUser,
        handlenameUser,
      }}
    >
      {children}
    </NameUserContext.Provider>
  );
};
export default NameUserProvider;
