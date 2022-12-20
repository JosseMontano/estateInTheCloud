import { createContext, useContext, useState } from "react";
import Children from "@/interface/children";

interface TextType {
  loginTitle: string;
  loginSubtitle: string;
  loginLabelGmail: string;
  loginLabelPassword: string;
  loginBtnGetInto: string;
  loginBtnCreateAccount: string;
  loginBtnRecuperateAccount: string;
  registerTitle: string;
  registerSubtitle: string;
  registerLabelGmail: string;
  registerLabelNameUser: string;
  registerLabelCellphone: string;
  registerLabelPassword: string;
  registerLabelSecretKey: string;
  registerBtnCreateAccount: string;
  registerBtnReturn: string;
  recuperateAccountTitle: string;
  recuperateAccountSubtitle: string;
  recuperateAccountGmail: string;
  recuperateAccountPasswordNew: string;
  recuperateAccountSecretKey: string;
  recuperateAccountSave: string;
  recuperateAccountReturn: string;
  navbarTitle: string;
  navbarFilter: string;
  navbarQuestion: string;
  navbarGoOut: string;
  homeMoreRecent: string;
  homeAll: string;
  homeRecommendedOwner: string;
  homeForYou: string;
  homeMoreInfor: string;
  homeVist: string;
  homeBtnCopyText: string;
  homeBtnQuestionFrequent: string;
  homeBtnDownload: string;
  homeBtnSee360: string;
  homeBtnTranslate: string;
  questionTitle: string;
  questionPlaceholder: string;
  questionBtnSave: string;
}

interface TranslationType {
  es: TextType;
  en: TextType;
}

const translations: TranslationType = {
  es: {
    loginTitle: "Inicia sesion o create una cuenta",
    loginSubtitle: "Hola de nuevo",
    loginLabelGmail: "Email",
    loginLabelPassword: "Contraseña",
    loginBtnGetInto: "Ingresar",
    loginBtnCreateAccount: "Create una cuenta",
    loginBtnRecuperateAccount: "recuperar cuenta",
    registerTitle: "Create una cuenta",
    registerSubtitle: "Bienvenido",
    registerLabelGmail: "Email",
    registerLabelNameUser: "Nombre de usuario",
    registerLabelCellphone: "Celular",
    registerLabelPassword: "Contraseña",
    registerLabelSecretKey: "clave Secreta",
    registerBtnCreateAccount: "Crear una cuenta",
    registerBtnReturn: "Volver",
    recuperateAccountTitle: "Recuperar cuenta",
    recuperateAccountSubtitle: "Ingresa la contraseña nueva",
    recuperateAccountGmail: "Gmail",
    recuperateAccountPasswordNew: "Contraseña Nueva",
    recuperateAccountSecretKey: "Clave secreta",
    recuperateAccountSave: "Guardar",
    recuperateAccountReturn: "Volver",
    navbarTitle: "Inicio",
    navbarFilter: "Filtrar",
    navbarQuestion: "Preguntas",
    navbarGoOut: "Salir",
    homeMoreRecent: "Mas reciente",
    homeAll: "Todos",
    homeRecommendedOwner: "Propietarios Recomendados",
    homeForYou: "Solo para ti",
    homeMoreInfor: "Mas informacion",
    homeVist: "Visitar",
    homeBtnCopyText: "Copair texto",
    homeBtnQuestionFrequent: "Preguntas frecuentes",
    homeBtnDownload: "Descargar Foto",
    homeBtnSee360: "Ver en 360",
    homeBtnTranslate: "Traducir",
    questionTitle: "Haz tu propia pregunta",
    questionPlaceholder: "Escribe tu pregunta",
    questionBtnSave: "Publicar",
  },
  en: {
    loginTitle: "sign in o sign up",
    loginSubtitle: "Hello again",
    loginLabelGmail: "Gmail",
    loginLabelPassword: "Password",
    loginBtnGetInto: "Start",
    loginBtnCreateAccount: "Create an account",
    loginBtnRecuperateAccount: "Recuperate account",
    registerTitle: "Create an account",
    registerSubtitle: "Welcome",
    registerLabelGmail: "Gmail",
    registerLabelNameUser: "Name user",
    registerLabelCellphone: "cellphone",
    registerLabelPassword: "password",
    registerLabelSecretKey: "secret key",
    registerBtnCreateAccount: "Create an account",
    registerBtnReturn: "Return",
    recuperateAccountTitle: "Recuperate account",
    recuperateAccountSubtitle: "New Passord",
    recuperateAccountGmail: "Email",
    recuperateAccountPasswordNew: "Password New",
    recuperateAccountSecretKey: "Secret Key",
    recuperateAccountSave: "Save",
    recuperateAccountReturn: "Return",
    navbarTitle: "Home",
    navbarFilter: "Filter",
    navbarQuestion: "Questions",
    navbarGoOut: "Go out",
    homeMoreRecent: "More recent",
    homeAll: "All",
    homeRecommendedOwner: "Owner Recommended",
    homeForYou: "Just for you",
    homeMoreInfor: "More information",
    homeVist: "to visit",
    homeBtnCopyText: "Copy Text",
    homeBtnQuestionFrequent: "Frequent Question",
    homeBtnDownload: "Downlaod Photo",
    homeBtnSee360: "See 360",
    homeBtnTranslate: "Traslate",
    questionTitle: "ask your own question",
    questionPlaceholder: "write your question",
    questionBtnSave: "Publish",
  },
};

interface ContextType {
  text: TextType;
  changeLanguage: (len: string) => void;
}

const initialText: TextType = translations["es"];

const initialValue: ContextType = {
  text: initialText,
  changeLanguage: () => {},
};

const LanguageContext = createContext<ContextType>(initialValue);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "this contexts must be used whitin a LanguageContextProvider"
    );
  }
  return context;
};

export const LanguageContextProvider = ({ children }: Children) => {
  const [text, setText] = useState<TextType>(translations["es"]);

  const changeLanguage = (lan: string) => {
    if (lan === "en") {
      setText(translations["en"]);
      return;
    }
    setText(translations["es"]);
  };

  const data = { text, changeLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export default {};
