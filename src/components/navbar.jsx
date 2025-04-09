import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()

  // Función para verificar si la ruta actual coincide con el enlace
  const isActive = (path) => {
    return location.pathname === path ? "active" : ""
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
        Edier Moyano 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/")}`} to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/about")}`} to="/about">
                Sobre Mí
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/portfolio")}`} to="/portfolio">
                Portafolio
              </Link>
            </li>
            <li className="nav-item">
            </li>
            <li className="nav-item social-nav">
              <a href="https://github.com/EdierMoyano" target="_blank" rel="noopener noreferrer" className="nav-social-link">
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className="nav-item social-nav">
              <a href="https://www.linkedin.com/in/edier-moyano-762b17329/" target="_blank" rel="noopener noreferrer" className="nav-social-link">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="nav-item social-nav">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="nav-social-link">
                <i className="bi bi-twitter-x"></i>
              </a>
            </li>
            <li className="nav-item social-nav">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-social-link">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
