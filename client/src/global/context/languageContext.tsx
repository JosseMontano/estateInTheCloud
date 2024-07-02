import { createContext, useContext, useState } from "react";
import Children from "@/global/interfaces/children";

interface TextType {
  loadingBtn: string;
  homeTitle: string;
  homeDescription: string;
  homeFooter1: string;
  homeFooter2: string;
  homeFooter3: string;
  dataEmpty: string;
  loginTitle: string;
  loginSubtitle: string;
  loginLabelGmail: string;
  loginLabelPassword: string;
  loginBtnGetInto: string;
  loginBtnCreateAccount: string;
  loginBtnRecuperateAccount: string;
  loginBtnGoogle: string;
  loginBtnRedirectLogin: string;
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
  profilePublications: string;
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
  visitUserPlaces:string;
  visitUseramount_bedroom: string;
  visitUserprice: string;
  visitUseramount_bathroom: string;
  visitUsersquare_meter: string;
  visitUserlat_long: string;
  visitUseraddress: string;
  visitUserBtnSendMessage: string;
  visitUserBtnFollower: string;
  visitUserBtnComment:string
  visitUserAmountPublications:string
  visitUserFollowers:string;
  visitUserFollows:string;
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
  languageValPt: string;
  msgFavorites: string;
  favoriteTitle: string;
  favoriteBtnDelete: string;
  fvoriteShowFavorites: string;
  favoriteHideFavorites: string;
  showDashboardAdmin: string;
  hideDashboardAdmin: string;
  titleDashboard: string;
  dashboardSectionUsers : string;
  dashboardSectionRealEstate : string;
  saveComment: string;
  laodingTheText: string;
}

interface TranslationType {
  es: TextType;
  en: TextType;
  pt:TextType;
}

type langs = "es" | "en" | "pt";

const translations: TranslationType = {
  es: {
    loadingBtn: "Cargando...",
    homeTitle: "Inmuebles en la nube",
    homeDescription:
      "Encuentra la propiedad ideal con nuestra amplia selección de inmuebles. Ofrecemos una experiencia de búsqueda sencilla y segura. Si necesitas ayuda, estamos aquí para asistirte en cada paso.",
    homeFooter1: "¡Esperamos ayudarte a",
    homeFooter2: "encontrar",
    homeFooter3: "tu próximo hogar!",
    dataEmpty: "No hay datos",
    loginTitle: "Bienvenido",
    loginSubtitle: "Hola de nuevo",
    loginLabelGmail: "Email",
    loginLabelPassword: "Contraseña",
    loginBtnGetInto: "Ingresar",
    loginBtnCreateAccount: "Nueva cuenta",
    loginBtnRecuperateAccount: "recuperar cuenta",
    loginBtnGoogle: "Ingresar con Google",
    loginBtnRedirectLogin: "Iniciar sesion",
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
    homeMoreRecent: "Mas recientes",
    homeAll: "Todos",
    homeRecommendedOwner: "Propietarios",
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
    profilePublications:"publicacion",
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
    visitUserPlaces:"Lugares cercanos",
    visitUseraddress: "Direccion:",
    visitUseramount_bathroom: "Cantidad de baños:",
    visitUseramount_bedroom: "Cantidad de cuartos: ",
    visitUserlat_long: "Latitud y longitud: ",
    visitUserprice: "Precio: ",

    visitUsersquare_meter: "Metros cuadrados",
    visitUserBtnSendMessage: 'Enviar mensaje',
    visitUserBtnFollower: 'Seguir',
    visitUserBtnComment:'Agregar comentario',
    visitUserAmountPublications:'Publicaciones',
    visitUserFollowers:'Seguidores',
    visitUserFollows:'Seguidos',

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
    languageValPt: "Portugues",
    msgFavorites: "Se agrego a favoritos",
    favoriteTitle: "Favoritos",
    favoriteBtnDelete: "Eliminar",
    fvoriteShowFavorites: "Mostrar favoritos",
    favoriteHideFavorites:"Ocultar favoritos",
    showDashboardAdmin: "Mostrar dashboard",
    hideDashboardAdmin: "Ocultar dashboard",
    titleDashboard: "Panel de control",
    dashboardSectionUsers : "Usuarios",
    dashboardSectionRealEstate : "Inmuebles",
    saveComment: "Se guardo el comentario",
    laodingTheText:"Traduciendo...",
  },
  en: {
    loadingBtn: "Loading...",
    homeTitle: "Real Estate in the cloud",
    homeDescription:
      "Find the ideal property with our wide selection of real estate. We offer a simple and secure search experience. If you need help, we are here to assist you at every step.",
    homeFooter1: "We hope to help you",
    homeFooter2: "find",
    homeFooter3: "your next home!",
    dataEmpty: "There is not data",
    loginTitle: "Welcome",
    loginSubtitle: "Hello again",
    loginLabelGmail: "Gmail",
    loginLabelPassword: "Password",
    loginBtnGetInto: "Start",
    loginBtnCreateAccount: "New account",
    loginBtnRecuperateAccount: "Recuperate account",
    loginBtnGoogle: "Sign in with Google",
    loginBtnRedirectLogin: "Sign in",
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
    homeRecommendedOwner: "Owner",
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
    profilePublications:"publication",
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
    visitUserPlaces:"Near places",
    visitUseraddress: "Direction:",
    visitUseramount_bathroom: "Amount bathrooms:",
    visitUseramount_bedroom: "Amount bedrooms: ",
    visitUserlat_long: "Latitude and longitude: ",
    visitUserprice: "Price: ",
    visitUsersquare_meter: "Square meter: ",
    visitUserBtnSendMessage: 'Send message',
    visitUserBtnFollower: 'Follow',
    visitUserBtnComment:'Add comment',
    visitUserAmountPublications:'Posts',
    visitUserFollowers:'Followers',
    visitUserFollows:'Following',
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
    languageValPt: "Portuguese",
    msgFavorites: "It was added to favorites",
    favoriteTitle: "Favorites",
    favoriteBtnDelete: "Delete",
    fvoriteShowFavorites: "Show favorites",
    favoriteHideFavorites:"Hide favorites",
    showDashboardAdmin: "Show dashboard",
    hideDashboardAdmin: "Hide dashboard",
    titleDashboard: "Dashboard",
    dashboardSectionUsers : "Users",
    dashboardSectionRealEstate : "Real Estate",
    saveComment: "The comment was saved",
    laodingTheText:"Translating...",
  },
  pt: {
    loadingBtn: "Carregando...",
    homeTitle: "Imóveis na nuvem",
    homeDescription:
      "Encontre a propriedade ideal com nossa ampla seleção de imóveis. Oferecemos uma experiência de busca simples e segura. Se precisar de ajuda, estamos aqui para ajudá-lo em cada etapa.",
    homeFooter1: "Esperamos ajudá-lo a",
    homeFooter2: "encontrar",
    homeFooter3: "sua próxima casa!",
    dataEmpty: "Não há dados",
    loginTitle: "Bem-vindo",
    loginSubtitle: "Olá novamente",
    loginLabelGmail: "Gmail",
    loginLabelPassword: "Senha",
    loginBtnGetInto: "Começar",
    loginBtnCreateAccount: "Nova conta",
    loginBtnRecuperateAccount: "Recuperar conta",
    loginBtnGoogle: "Entrar com Google",
    loginBtnRedirectLogin: "Iniciar sessão",
    registerTitle: "Criar uma conta",
    registerSubtitle: "Bem-vindo",
    registerLabelGmail: "Gmail",
    registerLabelNameUser: "Nome do usuário",
    registerLabelCellphone: "Celular",
    registerLabelPassword: "Senha",
    registerLabelSecretKey: "Chave secreta",
    registerBtnCreateAccount: "Criar uma conta",
    registerBtnReturn: "Retornar",
    recuperateAccountTitle: "Recuperar conta",
    recuperateAccountSubtitle: "Nova senha",
    recuperateAccountGmail: "Email",
    recuperateAccountPasswordNew: "Nova senha",
    recuperateAccountCodeGmail: "Código do email",
    recuperateAccountSecretKey: "Chave secreta",
    recuperateAccountSave: "Salvar nova senha",
    recuperateAccountSendEmail: "Enviar código para sua conta",
    recuperateAccountReturn: "Retornar",
    navbarTitle: "Início",
    navbarFilter: "Filtro",
    navbarQuestion: "Perguntas",
    navbarConfigure: "Configuração",
    navbarGoOut: "Sair",
    homeMoreRecent: "Mais recente",
    homeAll: "Todos",
    homeRecommendedOwner: "Proprietário",
    homeForYou: "Só para você",
    homeMoreInfor: "Mais informações",
    homeVist: "para visitar",
    homeBtnCopyText: "Compartilhar URL",
    homeBtnQuestionFrequent: "Pergunta frequente",
    homeBtnDownload: "Baixar foto",
    homeBtnSee360: "Ver 360",
    homeBtnTranslate: "Traduzir",
    questionTitle: "faça sua própria pergunta",
    questionPlaceholder: "escreva sua pergunta",
    questionBtnSave: "Publicar",
    filterCustom: "Personalizado",
    filterBedroom: "Quarto",
    filterSearch: "O que você está procurando?",
    filterCustomPriceMin: "Preço (Min)",
    filterCustomPriceMax: "Preço (Max)",
    filterCustomBedroom: "Quarto",
    filterCustomBathroom: "Banheiro",
    filterCustomMinSize: "Metros quadrados (Min)",
    filterCustomMaxSize: "Metros quadrados (Max)",
    filterCustomBtn: "Pesquisar",
    profileEditProfile: "Editar perfil",
    profileCreatePublicate: "Criar publicação",
    profileShowPublicate: "Mostrar postagens",
    profilePublication: "publicações",
    profilePublications:"publicação",
    profileFollower: "seguidores",
    profileFollow: "seguindo",
    profileBtnAddPhoto: "Adicionar foto",
    profileBtnDeletePhoto: "Deletar foto",
    profileBtnQuestion: "Pergunta",
    profileBtnAvailable: "Disponível",
    profileBtnNoAvailable: "Indisponível",
    comentsTitle: "Comentários",
    comentsDelete: "Deletar comentário",
    visitUserLoadTitle: "Carregando publicações",
    visitUserTitle: "Publicações",
    visitUserNoEmpty: "Você não tem publicações",
    visitUserShowMoreInfo: "Mais info",
    visitUserShowLessInfo: "Menos info",
    visitUserPlaces:"Lugares próximos",
    visitUseraddress: "Endereço:",
    visitUseramount_bathroom: "Quantidade de banheiros:",
    visitUseramount_bedroom: "Quantidade de quartos: ",
    visitUserlat_long: "Latitude e longitude: ",
    visitUserprice: "Preço: ",
    visitUsersquare_meter: "Metros quadrados: ",
    visitUserBtnSendMessage: 'Enviar mensagem',
    visitUserBtnFollower: 'Seguir',
    visitUserBtnComment:'Adicionar comentário',
    visitUserAmountPublications:'Postagens',
    visitUserFollowers:'Seguidores',
    visitUserFollows:'Seguindo',
    createPublicationTitle: "Título",
    createPublicationDescription: "Descrição",
    createPublicationType: "Tipo",
    createPublicationBedrom: "Quarto",
    createPublicationPrice: "Preço",
    createPublicationBathroom: "Banheiro",
    createPublicationSquareMert: "Metros quadrados",
    createPublciationBtnNext: "próximo",
    createPublciationBtnBack: "voltar",
    createPublciationBtnSave: "salvar",
    configurationLanguage: "Idioma:",
    languageValEn: "Inglês",
    languageValEs: "Espanhol",
    languageValPt: "Português",
    msgFavorites: "Foi adicionado aos favoritos",
    favoriteTitle: "Favoritos",
    favoriteBtnDelete: "Deletar",
    fvoriteShowFavorites: "Mostrar favoritos",
    favoriteHideFavorites:"Esconder favoritos",
    showDashboardAdmin: "Mostrar painel",
    hideDashboardAdmin: "Ocultar painel",
    titleDashboard: "Painel",
    dashboardSectionUsers : "Usuários",
    dashboardSectionRealEstate : "Imóveis",
    saveComment: "O comentário foi salvo",
    laodingTheText:"Traduzindo...",
  },
};

interface ContextType {
  text: TextType;
  changeLanguage: (len: langs) => void;
  lanActually: langs;
}

const initialText: TextType = translations["es"];

const initialValue: ContextType = {
  text: initialText,
  changeLanguage: () => {},
  lanActually: "es",
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
  const [lanActually, setLanActually] = useState<langs>("es");
  const changeLanguage = (lan: langs) => {
    if (lan === "en") {
      setText(translations["en"]);
      setLanActually("en");
      return;
    }
    if(lan === "pt"){
      setText(translations["pt"]);
      setLanActually("pt");
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
