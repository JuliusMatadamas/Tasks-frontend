import React from "react";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/pages/Dashboard";
import CreateTask from "./components/pages/CreateTask";
import Pendings from "./components/pages/Pendings";
import InProgress from "./components/pages/InProgress";
import Finished from "./components/pages/Finished";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'animate.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login></Login>}></Route>
        <Route exact path="/register" element={<Register></Register>}></Route>
        <Route exact path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route exact path="/add_task" element={<CreateTask></CreateTask>}></Route>
        <Route exact path="/pendings" element={<Pendings></Pendings>}></Route>
        <Route exact path="/in_progress" element={<InProgress></InProgress>}></Route>
        <Route exact path="/finished" element={<Finished></Finished>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
