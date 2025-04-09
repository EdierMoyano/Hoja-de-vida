const HabilidadesSection = () => {
  return (
    <div className="skills-section mt-5">
      <div className="section-header">
        <h3 className="section-subtitle">HABILIDADES</h3>
        <h2 className="section-title">MIS HABILIDADES</h2>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">HTML</span>
              <span className="skill-percentage">100%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">CSS</span>
              <span className="skill-percentage">100%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "65%" }}
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">JAVASCRIPT</span>
              <span className="skill-percentage">100%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "45%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">PHP</span>
              <span className="skill-percentage">100%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>

          
            </div>
          </div>
        
        <div className="col-md-6">
          <div className="skill-item">
            <div className="skill-info">
              <span className="skill-name">MySql</span>
              <span className="skill-percentage">100%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "55%" }}
                aria-valuenow={55}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div></div>
          
          </div>
        
      
  )
}

export default HabilidadesSection
