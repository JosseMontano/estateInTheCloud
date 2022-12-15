import {
  AnswerQuestion,
  Img360,
  Login,
  Profile,
  RecuperateAccount,
  Register,
  VisitUser,
  Home,
  TypeRealEstate,
  AnswerQuestionInterested,
} from "../pages";

interface Params {}
interface RouteType {
  path: string;
  Component: () => JSX.Element;
  name: string;
  children?: RouteType[];
}

export const routes: RouteType[] = [
  {
    path: "/",
    Component: Login,
    name: "Login",
  },
  {
    path: "/img360/:idRealEstate",
    Component: Img360,
    name: "Img360",
  },
  {
    path: "/register",
    Component: Register,
    name: "Register",
  },
  {
    path: "/recuperateAccount",
    Component: RecuperateAccount,
    name: "RecuperateAccount",
  },
  {
    path: "/home",
    Component: Home,
    name: "Home",
  },
  {
    path: "/realEstateFilter",
    Component: TypeRealEstate,
    name: "TypeRealEstate",
  },
  {
    path: "/profile/:email",
    Component: Profile,
    name: "Profile",
  },
  {
    path: "/visitUser/:id/:email",
    Component: VisitUser,
    name: "VisitUser",
  },
  {
    path: "/answeQuestion/:id",
    Component: AnswerQuestion,
    name: "AnswerQuestion",
  },
  {
    path: "/answeQuestionInterested/:id",
    Component: AnswerQuestionInterested,
    name: "AnswerQuestionInterested",
  },
];

export default routes;
