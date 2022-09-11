import { createContext, useState } from "react";

interface LoadContextState {
  nameUser: string;
  handlenameUser:(sendLoad:string)=>void;
}
interface MyContextProp {
  children: JSX.Element;
}
const contextDefaultValue: LoadContextState = {
  nameUser: "",
  handlenameUser:()=>{}
};
export const NameUserContext = createContext<LoadContextState>(contextDefaultValue);
const NameUserProvider = ({ children }: MyContextProp) => {
  const [nameUser, setnameUser] = useState<string>(contextDefaultValue.nameUser);
  const handlenameUser = (sendload: string) => {
    const aux = sendload;
    setnameUser(aux);
  };
  return (
    <NameUserContext.Provider
      value={{
        nameUser,
        handlenameUser,
      }}
    >
      {children}
    </NameUserContext.Provider>
  );
};
export default NameUserProvider
