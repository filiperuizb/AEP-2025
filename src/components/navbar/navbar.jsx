import React, { useState } from "react";
import "./navbar.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav1">
      <header className="navbar1">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span className="lixozero">
            <span className="lixo">LIXO</span>
            <span className="zero">Zero</span>
          </span>
        </div>
        {/* Botão Toggle movido para fora do <nav> que colapsa */}
        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          ☰
        </button>
        <nav className={`menu-navbar1${open ? " open" : ""}`}>
          <ul onClick={() => setOpen(false)}>
            {" "}
            {/* Clicar em um item fecha o menu */}
            <li className="nav-link">
              <Link className="nav-link" to="/">
                Inicio <FaChevronDown size={12} />
              </Link>
            </li>
            <li className="nav-link">
              <Link className="nav-link" to="/form">
                Reportar
              </Link>
            </li>
            <li className="nav-link">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-link">
              <Link className="nav-link" to="/conscientizacao">
                Conscientizção 
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
