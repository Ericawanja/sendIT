import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import Login from './Pages/Login';
 import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/register" element={<Register/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
