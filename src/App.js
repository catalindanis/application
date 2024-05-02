import React, { useState } from "react";
import "./App.css";
import "./Style/Title.css";
import "./Style/Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import Card from "./Components/Card";
import ScrollTopButton from "./Components/ScrollTopButton";

function App() {
  return (
    <div className="App text-bg-light">
      <header>
        <div className="Title">
          <p className="titlu">Materie admitere UBB</p>
          <h6 id="suggestionMessage">
            Deschide meniul din stanga pentru a accesa materia
          </h6>
        </div>
      </header>
      <body className="text-bg-light" id="body">
        <div id="card"></div>
        <Sidebar></Sidebar>
      </body>
        <ScrollTopButton></ScrollTopButton>
    </div>
  );
}

export default App;