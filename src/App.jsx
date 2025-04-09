"use client"
import "./App.css"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/navbar"
import InicioPage from "./pages/inicio-page"
import AboutPage from "./pages/about-page"
import ProyectosPage from "./pages/proyectos-page"
import Footer from "./components/footer"
import { useEffect } from "react"

// Componente para hacer scroll al inicio cuando cambia la ruta
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<InicioPage />} />
        <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<ProyectosPage />} />
      </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
