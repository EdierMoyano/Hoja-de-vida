const InteresesGrid = () => {
  const intereses = [
    { icono: "bi-eye", titulo: "Diseño " },
    { icono: "bi-infinity", titulo: "Inteligencia Artificual" },
    { icono: "bi-infinity", titulo: "Analisis de Datos" },
    { icono: "bi-bullseye", titulo: "Automatizacion" },
    
  ]

  return (
    <div className="row">
      {intereses.map((interes, index) => (
        <div className="col-lg-3 col-md-4 col-6" key={index}>
          <div className="interest-item">
            <i className={`bi ${interes.icono}`}></i>
            <h3>{interes.titulo}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default InteresesGrid
