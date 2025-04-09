import EducacionTimeline from "../components/educacion-timeline"
import HabilidadesSection from "../components/habilidades-section"
import InteresesGrid from "../components/intereses-grid"
import TecnologiasSection from "../components/tecnologias-section"
import profileImg from "../images/perfil.png"

const AboutPage = () => {
  return (
    <section className="about-section animate-fade-in" id="about">
      {/* About Header */}
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-description">
            Soy un Desarrollar Junior el cual sigue en su proceso de aprendizaje , me gusta dedicar mi tiempo libre a
            mejorar mis habilidades, Conocer nuevas tecnologias y adentrarme en ellas.
          </p>
        </div>

        {/* About 1: Personal Info */}
        <div className="row mt-5 align-items-center">
          <div className="col-lg-4">
            <div className="profile-img-container">
              <img src={profileImg || "/placeholder.svg"} alt="Foto de perfil" className="profile-img" />
            </div>
          </div>
          <div className="col-lg-8">
            <h3 className="about-subtitle">Junior Web Developer</h3>
            <p className="about-description"></p>

            <div className="row personal-info">
              <div className="col-md-6">
                <div className="info-item">
                  <i className="bi bi-calendar-date info-icon"></i>
                  <span className="info-label">Cumpleaños:</span> 14 Septiembre 2024
                </div>

                <div className="info-item">
                  <i className="bi bi-telephone info-icon"></i>
                  <span className="info-label">Teléfono:</span> +57 3028623064
                </div>
                <div className="info-item">
                  <i className="bi bi-geo-alt info-icon"></i>
                  <span className="info-label">Ciudad:</span> Ibagué, Colombia
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-item">
                  <i className="bi bi-person info-icon"></i>
                  <span className="info-label">Edad:</span> 18
                </div>
                <div className="info-item">
                  <i className="bi bi-mortarboard info-icon"></i>
                  <span className="info-label">Grado:</span> Tecnico en Sistemas
                </div>
                <div className="info-item">
                  <i className="bi bi-envelope info-icon"></i>
                  <span className="info-label">Email:</span> ediersmb@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-wrapper mt-5">
          <div className="section-header">
            <h2 className="section-title">Educación</h2>
          </div>
          <EducacionTimeline />
        </div>

        {/* Tecnologías Section */}
        <TecnologiasSection />

        {/* Skills */}
        <HabilidadesSection />

        {/* Interests */}
        <div className="interests-wrapper mt-5">
          <div className="section-header">
            <h3 className="section-subtitle">CARACTERÍSTICAS</h3>
            <h2 className="section-title">ME INTERESA</h2>
          </div>
          <InteresesGrid />
        </div>
      </div>
    </section>
  )
}

export default AboutPage
