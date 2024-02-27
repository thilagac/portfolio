import React from "react";
import Home from "./routes/Home.js"
import About from "./routes/About.js"
import Contact from "./routes/Contact.js"
import Project from "./routes/Project.js"
import "./index.css";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
