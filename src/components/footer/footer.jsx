import "./footer.css"
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa"
import logo from "../../img/logo.png"

function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-bubbles">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
      </div>

      <div className="footer-grid">
        <div className="grid-line vertical" style={{ left: "25%" }}></div>
        <div className="grid-line vertical" style={{ left: "75%" }}></div>
        <div className="grid-line horizontal" style={{ top: "30%" }}></div>
        <div className="grid-line horizontal" style={{ top: "70%" }}></div>
      </div>

      <div className="footer-content-modern">
        <div className="footer-logo-social">
          <img src={logo} alt="Logo" className="footer-logo-img" />
          <div className="footer-social">
            <a href="https://github.com/filiperuizb/AEP-2025" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="footer-text">
          <p>Construindo um futuro mais sustentável, um passo de cada vez.</p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Lixo Zero. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
