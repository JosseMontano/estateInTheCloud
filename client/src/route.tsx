import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import RealEstateFilter from "./pages/typeRealEstate";
import Profile from "./pages/profile";
import RecuperateAccount from "./pages/recuperateAccount";
import VisitUser from "./pages/visitUser";
import AnswerQuestion from "./pages/answerQuestion";
import AQInterested from "./pages/answerQuestionInterested";
const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recuperateAccount" element={<RecuperateAccount />} />
      {/* ========== PAGES THAT GET THE NAVBAR ========== */}
      <Route path="/home" element={<Home />} />
      <Route path="/realEstateFilter" element={<RealEstateFilter />} />
      <Route path="/profile/:email" element={<Profile />} />
      <Route path="/visitUser/:id/:email" element={<VisitUser />} />
      <Route path="/answeQuestion/:id" element={<AnswerQuestion />} />
      <Route path="/answeQuestionInterested/:id" element={<AQInterested />} />
    </Routes>
  );
};

export default RouteComponent;
