import { lazy, LazyExoticComponent } from "react";
import AnswerQuestion from "./public/answerQuestion";
import AnswerQuestionInterested from "./public/questionsAnswered";
import Img360 from "./public/img360";
import Register from "./public/register/register";

type JSXComponent = () => JSX.Element;

interface RouteType {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: RouteType[];
}

const Login = lazy(() => import("./public/login"));
const VisitUser = lazy(() => import("./public/visitUser"));
const Home = lazy(() => import("./public/home"));
const Profile = lazy(() => import("./public/profile"));
const TypeRealEstate = lazy(() => import("./public/filterRealEstate"));


export const routes: RouteType[] = [
  {
    path: "/",
    Component: Login,
    name: "Login",
  },
  {
    path: "/register",
    Component: Register,
    name: "Register",
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
    path: "/visitUser/:id/:email/:realEstate",
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
  {
    path: "/img360/:id",
    Component: Img360,
    name: "Img360",
  },
];

export default routes;
