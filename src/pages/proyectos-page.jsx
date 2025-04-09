import ProyectosGrid from "../components/proyectos-grid"

const ProyectosPage = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Portafolio</h2>
          <p className="section-description">
            Aquí encontrarás una selección de mis proyectos más destacados. Cada uno representa diferentes habilidades y
            tecnologías que he utilizado a lo largo de mi carrera profesional.
          </p>
        </div>

        <div className="portfolio-filters text-center">
          <ul className="filter-list">
            <li className="filter-item active" data-filter="all">
              Todos
            </li>
            
    
          </ul>
        </div>

        <ProyectosGrid />
      </div>
    </section>
  )
}

export default ProyectosPage
