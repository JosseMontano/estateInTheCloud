import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Profile from "./pages/profile";
import RecuperateAccount from "./pages/recuperateAccount";
import VisitUser from "./pages/visitUser";
import AnswerQuestion from "./pages/answerQuestion";
import AQInterested from "./pages/answerQuestionInterested";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recuperateAccount" element={<RecuperateAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:email" element={<Profile />} />
        <Route path="/visitUser/:email" element={<VisitUser />} />
        <Route path="/answeQuestion/:id" element={<AnswerQuestion />} />
        <Route path="/answeQuestionInterested/:id" element={<AQInterested />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
