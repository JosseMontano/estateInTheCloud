import React from 'react'
import { Routes, Route, BrowserRouter  } from "react-router-dom";
import './App.css'
import Login from './pages/login';
import Register from './pages/register';
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App