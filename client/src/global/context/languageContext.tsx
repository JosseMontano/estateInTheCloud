import { createContext, useContext, useState } from "react";
import Children from "@/global/interfaces/children";

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
  recuperateAccountCodeGmail: string;
  recuperateAccountSecretKey: string;
  recuperateAccountSave: string;
  recuperateAccountSendEmail: string;
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
  filterBedroom: string;
  filterCustom: string;
  filterCustomPriceMin: string;
  filterCustomPriceMax: string;
  filterCustomBedroom: string;
  filterCustomBathroom: string;
  filterCustomBtn: string;
  filterCustomMinSize: string;
  filterCustomMaxSize: string;
  profileEditProfile: string;
  profileCreatePublicate: string;
  profileShowPublicate: string;
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
  visitUserShowMoreInfo: string;
  visitUserShowLessInfo: string;
  visitUseramount_bedroom: string;
  visitUserprice: string;
  visitUseramount_bathroom: string;
  visitUsersquare_meter: string;
  visitUserlat_long: string;
  visitUseraddress: string;
  createPublicationTitle: string;
  createPublicationDescription: string;
  createPublicationType: string;
  createPublicationBedrom: string;
  createPublicationPrice: string;
  createPublicationBathroom: string;
  createPublicationSquareMert: string;
  createPublciationBtnNext: string;
  createPublciationBtnBack: string;
  createPublciationBtnSave: string;
  configurationLanguage: string;
  languageValEn: string;
  languageValEs: string;
  msgFavorites: string;
  favoriteTitle: string;
  favoriteBtnDelete: string;
  fvoriteShowFavorites: string;
  favoriteHideFavorites: string;
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
    recuperateAccountCodeGmail: "Codigo del email",
    recuperateAccountSecretKey: "Clave secreta",
    recuperateAccountSave: "Guardar nueva contraseña",
    recuperateAccountSendEmail: "Enviar codigo al correo",
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
    homeBtnCopyText: "Compartir Url",
    homeBtnQuestionFrequent: "Preguntas frecuentes",
    homeBtnDownload: "Descargar Foto",
    homeBtnSee360: "Ver en 360",
    homeBtnTranslate: "Traducir",
    questionTitle: "Haz tu propia pregunta",
    questionPlaceholder: "Escribe tu pregunta",
    questionBtnSave: "Publicar",
    filterBedroom: "Dormitorios",
    filterSearch: "¿Que estas buscando?",
    filterCustomPriceMin: "Precio minimo",
    filterCustomPriceMax: "Precio maximo",
    filterCustomBedroom: "Cuarto",
    filterCustomBathroom: "Baño",
    filterCustomMinSize: "Metros cuadrados (Min)",
    filterCustomMaxSize: "Metros cuadrados (Max)",
    filterCustomBtn: "Buscar",
    filterCustom: "Personalizado",
    profileEditProfile: "Editar perfil",
    profileCreatePublicate: "Crear publicacion",
    profileShowPublicate: "Mostrar publicaciones",
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
    visitUserShowMoreInfo: "Mas informacion",
    visitUserShowLessInfo: "Menos informacion",
    visitUseraddress: "Direccion:",
    visitUseramount_bathroom: "Cantidad de baños:",
    visitUseramount_bedroom: "Cantidad de cuartos: ",
    visitUserlat_long: "Latitud y longitud: ",
    visitUserprice: "Precio: ",
    visitUsersquare_meter: "Cantidad de metros cuadrados",
    createPublicationTitle: "Titulo",
    createPublicationDescription: "Descripcion",
    createPublicationType: "Tipo",
    createPublicationBedrom: "Dormitorio",
    createPublicationPrice: "Precio",
    createPublicationBathroom: "Baño",
    createPublicationSquareMert: "Metros cuadrados",
    createPublciationBtnNext: "siguente",
    createPublciationBtnBack: "atras",
    createPublciationBtnSave: "guardar",
    configurationLanguage: "Idioma:",
    languageValEn: "Ingles",
    languageValEs: "Español",
    msgFavorites: "Se agrego a favoritos",
    favoriteTitle: "Favoritos",
    favoriteBtnDelete: "Eliminar",
    fvoriteShowFavorites: "Mostrar favoritos",
    favoriteHideFavorites:"Ocultar favoritos",
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
    recuperateAccountCodeGmail: "Code from email",
    recuperateAccountSecretKey: "Secret Key",
    recuperateAccountSave: "Save new password",
    recuperateAccountSendEmail: "Send code to your account",
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
    homeBtnCopyText: "Share Url",
    homeBtnQuestionFrequent: "Frequent Question",
    homeBtnDownload: "Downlaod Photo",
    homeBtnSee360: "See 360",
    homeBtnTranslate: "Traslate",
    questionTitle: "ask your own question",
    questionPlaceholder: "write your question",
    questionBtnSave: "Publish",
    filterCustom: "Custom",
    filterBedroom: "Bethroom",
    filterSearch: "What are you looking for?",
    filterCustomPriceMin: "Price (Min)",
    filterCustomPriceMax: "Price (Max)",
    filterCustomBedroom: "Bedroom",
    filterCustomBathroom: "Bathroom",
    filterCustomMinSize: "Squeare meter (Min)",
    filterCustomMaxSize: "Squeare meter (Max)",
    filterCustomBtn: "Search",
    profileEditProfile: "Edit profile",
    profileCreatePublicate: "Create publication",
    profileShowPublicate: "Show posts",
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
    visitUserShowMoreInfo: "More info",
    visitUserShowLessInfo: "Less info",
    visitUseraddress: "Direction:",
    visitUseramount_bathroom: "Amount bathrooms:",
    visitUseramount_bedroom: "Amount bedrooms: ",
    visitUserlat_long: "Latitude and longitude: ",
    visitUserprice: "Price: ",
    visitUsersquare_meter: "Amount square meter: ",
    createPublicationTitle: "Title",
    createPublicationDescription: "Description",
    createPublicationType: "Type",
    createPublicationBedrom: "Bedrom",
    createPublicationPrice: "Price",
    createPublicationBathroom: "Bathroom",
    createPublicationSquareMert: "Square Meter",
    createPublciationBtnNext: "next",
    createPublciationBtnBack: "back",
    createPublciationBtnSave: "save",
    configurationLanguage: "Language:",
    languageValEn: "English",
    languageValEs: "Spanish",
    msgFavorites: "It was added to favorites",
    favoriteTitle: "Favorites",
    favoriteBtnDelete: "Delete",
    fvoriteShowFavorites: "Show favorites",
    favoriteHideFavorites:"Hide favorites",
  },
};

interface ContextType {
  text: TextType;
  changeLanguage: (len: string) => void;
  lanActually: string;
}

const initialText: TextType = translations["es"];

const initialValue: ContextType = {
  text: initialText,
  changeLanguage: () => {},
  lanActually: "",
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
  const [lanActually, setLanActually] = useState("es");
  const changeLanguage = (lan: string) => {
    if (lan === "en") {
      setText(translations["en"]);
      setLanActually("en");
      return;
    }
    setText(translations["es"]);
    setLanActually("es");
  };

  const data = { text, changeLanguage, lanActually };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
