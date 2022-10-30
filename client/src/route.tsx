import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Profile from "./pages/profile";
import RecuperateAccount from "./pages/recuperateAccount";
import VisitUser from "./pages/visitUser";
import AnswerQuestion from "./pages/answerQuestion";
import AQInterested from "./pages/answerQuestionInterested";
import Navbar from "./components/navbar";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recuperateAccount" element={<RecuperateAccount />} />

      {/* ========== PAGES THAT GET THE NAVBAR ========== */}
      <Route path="/home" element={<Home navbar={<Navbar />} />} />

      <Route
        path="/profile/:email"
        element={<Profile showNavbar={<Navbar />} />}
      />

      <Route
        path="/visitUser/:id/:email"
        element={<VisitUser showNavbar={<Navbar />} />}
      />
      <Route
        path="/answeQuestion/:id"
        element={<AnswerQuestion showNavbar={<Navbar />} />}
      />
      <Route
        path="/answeQuestionInterested/:id"
        element={<AQInterested showNavbar={<Navbar />} />}
      />
    </Routes>
  );
};

export default RouteComponent;
