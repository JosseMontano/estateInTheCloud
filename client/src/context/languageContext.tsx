import { createContext, useContext, useState } from "react";
import Children from "@/interface/children";

interface TextType {
  dataEmpty: string;
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
  navbarConfigure: string;
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
  filterSearch: string;
  filterHouse: string;
  filterDepartament: string;
  filterStudio: string;
  filterGarzonier: string;
  filterBedroom: string;
  filterStore: string;
  filterShop: string;
  profileSendMessage: string;
  profileSendRequest: string;
  profileCreatePublicate: string;
  profilePublication: string;
  profileFollower: string;
  profileFollow: string;
  profileBtnAddPhoto: string;
  profileBtnDeletePhoto: string;
  profileBtnQuestion: string;
  profileBtnAvailable: string;
  profileBtnNoAvailable: string;
  comentsTitle: string;
  comentsDelete: string;
  visitUserLoadTitle: string;
  visitUserTitle: string;
  visitUserNoEmpty: string;
  createPublicationTitle: string;
  createPublicationDescription: string;
  createPublicationType: string;
}

interface TranslationType {
  es: TextType;
  en: TextType;
}

const translations: TranslationType = {
  es: {
    dataEmpty: "No hay datos",
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
    navbarConfigure: "Configuracion",
    homeMoreRecent: "Mas reciente",
    homeAll: "Todos",
    homeRecommendedOwner: "Propietarios Recomendados",
    homeForYou: "Solo para ti",
    homeMoreInfor: "Mas informacion",
    homeVist: "Visitar",
    homeBtnCopyText: "Copiar texto",
    homeBtnQuestionFrequent: "Preguntas frecuentes",
    homeBtnDownload: "Descargar Foto",
    homeBtnSee360: "Ver en 360",
    homeBtnTranslate: "Traducir",
    questionTitle: "Haz tu propia pregunta",
    questionPlaceholder: "Escribe tu pregunta",
    questionBtnSave: "Publicar",
    filterSearch: "¿Que estas buscando?",
    filterHouse: "Casas",
    filterDepartament: "Departamentos",
    filterStudio: "Monoambientes",
    filterGarzonier: "Garzoniers",
    filterBedroom: "Dormitorios",
    filterStore: "Almacenes",
    filterShop: "Tiendas",
    profileSendMessage: "Enviar mensaje",
    profileSendRequest: "Enviar solicitud",
    profileCreatePublicate: "Crear publicacion",
    profilePublication: "publicaciones",
    profileFollower: "seguidores",
    profileFollow: "seguidos",
    profileBtnAddPhoto: "Agregar foto",
    profileBtnDeletePhoto: "Eliminar foto",
    profileBtnQuestion: "Pregunta",
    profileBtnAvailable: "Disponible",
    profileBtnNoAvailable: "No Disponible",
    comentsTitle: "Comentarios",
    comentsDelete: "Eliminar comentario",
    visitUserLoadTitle: "Cargando publicaciones",
    visitUserTitle: "Publicaciones",
    visitUserNoEmpty: "No tiene Publicaciones",
    createPublicationTitle: "Titulo",
    createPublicationDescription: "Descripcion",
    createPublicationType: "Tipo",
  },
  en: {
    dataEmpty: "There is not data",
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
    navbarConfigure: "Configuration",
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
    filterSearch: "What are you looking for?",
    filterHouse: "House's",
    filterDepartament: "Departament's",
    filterStudio: "Studio's",
    filterGarzonier: "Garzonier's",
    filterBedroom: "Bedroom's",
    filterStore: "Store's",
    filterShop: "Shop's",
    profileSendMessage: "Send message",
    profileSendRequest: "send Request",
    profileCreatePublicate: "Create publication",
    profilePublication: "publications",
    profileFollower: "followers",
    profileFollow: "following",
    profileBtnAddPhoto: "Add Photo",
    profileBtnDeletePhoto: "Delete Photo",
    profileBtnQuestion: "Question",
    profileBtnAvailable: "Available",
    profileBtnNoAvailable: "No Available",
    comentsTitle: "Comments",
    comentsDelete: "Delete comment",
    visitUserLoadTitle: "Loading publications",
    visitUserTitle: "Publications",
    visitUserNoEmpty: "You haven't Publications",
    createPublicationTitle: "Title",
    createPublicationDescription: "Description",
    createPublicationType: "Type",
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
