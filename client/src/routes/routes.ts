import { lazy, LazyExoticComponent } from "react";
import {
  RecuperateAccount,
  AnswerQuestion,
  AnswerQuestionInterested,
  Img360,
} from "../pages";

type JSXComponent = () => JSX.Element;

interface RouteType {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: RouteType[];
}

const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const VisitUser = lazy(() => import("../pages/visitUser"));
const Home = lazy(() => import("../pages/home"));
const Profile = lazy(() => import("../pages/profile"));
const TypeRealEstate = lazy(() => import("../pages/typeRealEstate"));

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
  {
    path: "/img360/:id",
    Component: Img360,
    name: "Img360",
  },
];

export default routes;
