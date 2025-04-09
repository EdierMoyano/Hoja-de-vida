const PerfilHeader = ({ datos }) => {
  return (
    <div className="perfil-header mb-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <div className="foto-perfil-container">
            <div className="foto-perfil-border">
              <img src="/placeholder.svg?height=250&width=250" alt="Foto de perfil" className="foto-perfil" />
            </div>
            <div className="glitch-effect"></div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="cyberpunk-card info-perfil">
            <h1 className="nombre-perfil">{datos.nombre}</h1>
            <div className="titulo-container">
              <h2 className="titulo-perfil">{datos.titulo}</h2>
            </div>
            <div className="separador-neon"></div>
            <p className="descripcion-perfil">{datos.descripcion}</p>
            <div className="contacto-botones">
              <button className="btn-cyberpunk">
                <i className="bi bi-envelope-fill"></i> Contacto
              </button>
              <button className="btn-cyberpunk">
                <i className="bi bi-download"></i> Descargar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilHeader
