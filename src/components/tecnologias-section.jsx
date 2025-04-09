"use client"

import { useEffect, useState } from "react"

const TecnologiasSection = () => {
  const tecnologias = [
    { nombre: "HTML 5", icono: "bi bi-filetype-html" },
    { nombre: "CSS", icono: "bi bi-filetype-css" },
    { nombre: "Bootstrap", icono: "bi bi-bootstrap" },
    { nombre: "JavaScript", icono: "bi bi-filetype-js" },
    { nombre: "PHP", icono: "bi bi-filetype-php" },
    { nombre: "MySQL", icono: "bi bi-database" },
    { nombre: "VS Code", icono: "bi bi-code-square" },
    { nombre: "Node.js", icono: "bi bi-nodejs" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsToShow = 4 // Número de tecnologías visibles a la vez

  useEffect(() => {
    // Configurar un intervalo para cambiar las tecnologías cada 3 segundos
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tecnologias.length)
    }, 1500)

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval)
  }, [tecnologias.length])

  // Función para obtener las tecnologías visibles actualmente
  const getVisibleTecnologias = () => {
    const visibleItems = []
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % tecnologias.length
      visibleItems.push(tecnologias[index])
    }
    return visibleItems
  }

  return (
    <div className="tecnologias-wrapper mt-5">
      <div className="section-header">
        <h3 className="section-subtitle">HABILIDADES TÉCNICAS</h3>
        <h2 className="section-title">TECNOLOGÍAS</h2>
      </div>

      <div className="tecnologias-carousel">
        <div className="tecnologias-slider">
          {getVisibleTecnologias().map((tech, index) => (
            <div className="tecnologia-item" key={index}>
              <div className="tecnologia-icon">
                <i className={tech.icono}></i>
              </div>
              <h3>{tech.nombre}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TecnologiasSection
