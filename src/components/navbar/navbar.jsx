import React from "react";
import "./navbar.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <div className="nav1">
        <header className="navbar1">
            <div className="logo">
                <img src={logo} alt="logo" />
                <span className="lixozero"><span className="lixo">LIXO</span><span className="zero">Zero</span></span>
            </div>
            <div className="menu-navbar1">
                <ul>
                    <li className="nav-link"><Link className="nav-link" to="/">Inicio</Link> </li>
                    <li className="nav-link"><Link className="nav-link" to="/form">Reportar</Link> </li>
                    <li className="nav-link"><Link className="nav-link" to="/">Dashboard</Link> </li>
                    <li className="nav-link"><Link className="nav-link" to="/">Conscientizção</Link> </li>
                </ul>
            </div>
        </header>
    </div>
  );
}

export default Navbar;
