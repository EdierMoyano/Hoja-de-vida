"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para verificar si la ruta actual coincide con el enlace
  const isActive = (path) => {
    return location.pathname === path ? "active" : ""
  }

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false)
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
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/")}`} to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/about")}`} to="/about" onClick={closeMenu}>
                Sobre Mí
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/portfolio")}`} to="/portfolio" onClick={closeMenu}>
                Portafolio
              </Link>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item social-nav">
              <a
                href="https://github.com/EdierMoyano"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-link"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li className="nav-item social-nav">
              <a
                href="https://www.linkedin.com/in/edier-moyano-762b17329/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-link"
              >
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
