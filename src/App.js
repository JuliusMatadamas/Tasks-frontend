import React from "react";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'animate.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login></Login>}></Route>
        <Route exact path="/register" element={<Register></Register>}></Route>
        <Route exact path="/register" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
