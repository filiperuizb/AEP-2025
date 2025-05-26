import React from "react";
import "./subnav.css";

function Subnav() {
  return (
    <nav className="subnav">
      <ul>
        <li><a href="#header">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#funcionalidade">Funcionalidades</a></li>
        <li><a href="#equipe">Equipe</a></li>
        <li><a href="#footer">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Subnav;