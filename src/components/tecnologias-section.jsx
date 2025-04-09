const TecnologiasSection = () => {
  const tecnologias = [
    { nombre: "HTML 5", icono: "bi bi-filetype-html", nivel: 85 },
    { nombre: "CSS", icono: "bi bi-filetype-css", nivel: 80 },
    { nombre: "Bootstrap", icono: "bi bi-bootstrap", nivel: 75 },
    { nombre: "JavaScript", icono: "bi bi-filetype-js", nivel: 70 },
    { nombre: "PHP", icono: "bi bi-filetype-php", nivel: 65 },
    { nombre: "MySQL", icono: "bi bi-database", nivel: 70 },
    { nombre: "VS Code", icono: "bi bi-code-square", nivel: 90 },
    { nombre: "Node.js", icono: "bi bi-nodejs", nivel: 60 },
  ]

  return (
    <div className="tecnologias-wrapper mt-5">
      <div className="section-header">
        <h3 className="section-subtitle">HABILIDADES TÉCNICAS</h3>
        <h2 className="section-title">TECNOLOGÍAS</h2>
      </div>

      <div className="row">
        {tecnologias.map((tech, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="tech-item">
              <div className="tech-icon">
                <i className={tech.icono}></i>
              </div>
              <h3>{tech.nombre}</h3>
              <div className="skill-info">
                <span className="skill-percentage">{tech.nivel}%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${tech.nivel}%` }}
                  aria-valuenow={tech.nivel}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TecnologiasSection
