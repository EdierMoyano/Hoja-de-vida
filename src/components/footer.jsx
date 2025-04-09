const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="text-center">
          <h2 className="footer-title">Contactame</h2>
          <p className="footer-description">
Puedes Contactamer A tarvez de cualquiera de estos medios           </p>

          <div className="social-links">
            <a href="" className="social-link">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" className="social-link">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://github.com/EdierMoyano" className="social-link">
            <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/edier-moyano-762b17329/" className="social-link">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

          <div className="copyright">
            Copyright <strong>Personal</strong> All Rights Reserved
          </div>

          <a href="#" className="back-to-top">
            <i className="bi bi-arrow-up-circle-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
