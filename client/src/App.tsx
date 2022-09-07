import React from 'react'
import { Routes, Route, BrowserRouter  } from "react-router-dom";
import './App.css'
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App