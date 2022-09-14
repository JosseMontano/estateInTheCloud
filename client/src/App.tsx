import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Profile from "./pages/profile";
import RealEstateData from "./pages/realEstate/createRealEstate";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:email" element={<Profile />} />
        {/* REALESTATE */}
        <Route path="/add-data-real-estate/:id" element={<RealEstateData />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
