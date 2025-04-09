import TeamTalks from '../images/TeamTalks.png'
import Freefire from '../images/Freefire.png'

const ProyectosGrid = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "Free Fire",
      categoria: "Terminado",
      imagen: Freefire,
      descripcion:"Este es un proyecto el cual esta basado en el jeugo free fire, en este proyecto nos concentramos en el manejo de la base de datos, en la cual se guardan los datos de los usuarios, sus skins y sus armas.",
            github: "https://github.com/EdierMoyano/Free-Fire-Mysql",
      tecnologias: ["HTML", "CSS", "JavaScript", "MySql"],
    },
    { 
      id: 2,
      titulo: "TeamTalks",
      categoria: "Por Terminar",
      imagen:TeamTalks,
      descripcion:
"Team talks , un portal para el sector educativo , para poder calificar y educar a nustros estudiantes.",
      github: "https://github.com/EdierMoyano/TeamTalks",
      tecnologias: ["HTML", "CSS", "BootStrap", "JavaScript", " PHP", "MySql"],
    }
  
    
  ]

  return (
    <div className="row portfolio-container">
      {proyectos.map((proyecto) => (
        <div className="col-lg-4 col-md-6 portfolio-item" key={proyecto.id}>
          <div className="portfolio-card">
            <div className="portfolio-img">
              <img src={proyecto.imagen || "/placeholder.svg"} alt={proyecto.titulo} />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h4>{proyecto.titulo}</h4>
                  <p>{proyecto.categoria}</p>
                  <div className="portfolio-links">
                    <a href={proyecto.github} className="btn-github" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i> Repositorio
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-details">
              <h3>{proyecto.titulo}</h3>
              <p className="portfolio-description">{proyecto.descripcion}</p>
              <div className="portfolio-tecnologias">
                {proyecto.tecnologias.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProyectosGrid
