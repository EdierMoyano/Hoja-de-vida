const EducacionTimeline = () => {
  const educacion = [
    {
      titulo: "Bachiller",
      institucion: "Institucion La Sagrada Familia (Ibague",
      periodo: "2012- 2023",
      descripcion:
" Educación Basica"    },
    {
      titulo: "Bachiller con Tecnico en Sistemas",
      institucion: "Servicio Nacional De Aprendisaje (SENA)",
      periodo: "2022- 2023",
      descripcion:
" Formación enfocada en el desarrollo de habilidades para la instalación, configuración y mantenimiento de sistemas informáticos. Incluye conocimientos en redes, soporte técnico, software, hardware y buenas prácticas en seguridad informática. Capacitado para brindar soluciones tecnológicas eficientes y adaptadas a las necesidades del entorno laboral."
    },
    {
      titulo: "Tecnologo en Analisis y Desarrollo de Software",
      institucion: "Servicion Nacional De Aprendisaje (SENA)",
      periodo: "2024 - Por Finalizar",
      descripcion:
      "Formación orientada al diseño, desarrollo, implementación y mantenimiento de aplicaciones de software. Se adquieren competencias en programación, análisis de requerimientos, bases de datos, pruebas de calidad y metodologías ágiles. Preparado para crear soluciones tecnológicas innovadoras que respondan a las necesidades del sector productivo."    },
    
  ]

  return (
    <div className="timeline">
      {educacion.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-content">
            <div className="date-badge">{item.periodo}</div>
            <h3 className="timeline-title">{item.titulo}</h3>
            <h4 className="timeline-subtitle">{item.institucion}</h4>
            <p className="timeline-description">{item.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EducacionTimeline
