import { Link } from "react-router-dom";
import profileImg from '../images/perfil.png';



const InicioPage = () => {
  return (
    <section className="portada-section animate-fade-in">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="portada-imagen-container">
            <img src={profileImg} alt="Foto de perfil" className="profile-img" />
            </div>
          </div>
          <div className="col-md-7">
            <h1 className="portada-titulo">Edier Moyano</h1>
            <div className="profesion-container">
              <p className="profesion">
                Soy <span className="highlight">Desarrollador Web</span>
              </p>
            </div>
            <div className="portada-descripcion">
              <p>
                Bienvenido a mi portafolio profesional. Aquí encontrarás información sobre mis habilidades, proyectos y
                experiencia.
              </p>
            </div>
            <div className="portada-botones">
              <Link to="/about" className="btn-principal">
                Sobre Mí
              </Link>
              <Link to="/portfolio" className="btn-secundario">
                Ver Proyectos
              </Link>
            </div>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://github.com/EdierMoyano" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="bi bi-github"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/edier-moyano-762b17329/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InicioPage
