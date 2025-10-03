import { Container, Row, Col } from "react-bootstrap";
import '../assets/css/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#3251a6ff" }}>
      <Container fluid className="w-75 mx-auto text-light p-4">
        <Row className="gy-4">
          {/* Bloc contact */}
          <Col xs={12} md={6} lg={5}>
            <p className="fs-5 fw-bold mb-1 text-center text-md-start">Au plaisir de vous lire.</p>
            <p className="fs-5 fw-bold text-center text-md-start">Je serais ravi d'échanger avec vous :</p>
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <a className="text-decoration-none text-light fw-semibold mb-2" href="mailto:tarik.bmacveigh@hotmail.com">
                tarik.bmacveigh@hotmail.com</a>
              <a className="text-decoration-none text-light fw-semibold">07 44 86 10 56</a>
            </div>
            <div className="pt-3 text-center text-md-start">
              <a href="https://github.com/tarik-benabbou-mac-veigh" rel="nofollow" target="_blank" className="social-icon-gradient"><FontAwesomeIcon icon={faGithub} size="2x" className="me-3 social-icon" /></a>
              <a href="https://www.linkedin.com/in/tarik-benabbou-mac-veigh-a8b186100/" rel="nofollow" target="_blank" className="social-icon-gradient"><FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon" /></a>
            </div>
          </Col>

          {/* Bloc navigation */}
          <Col xs={12} sm={6} md={3}>
            <h5 className="footer-name text-center text-md-start">Pages</h5>
            <ul className="list-unstyled footer-item text-center text-md-start">
              <li><a href="/" className="text-decoration-none text-light">Accueil</a></li>
              <li><a href="/competences" className="text-decoration-none text-light">Compétences</a></li>
              <li><a href="/projects" className="text-decoration-none text-light">Projets</a></li>
            </ul>
          </Col>

          {/* Bloc projets */}
          <Col xs={12} sm={6} md={3} lg={4}>
            <h5 className="footer-name text-center text-md-start">Mes projets personnels</h5>
            <ul className="list-unstyled footer-item text-center text-md-start">
              <li><a className="text-decoration-none text-light" href="https://github.com/tarik-benabbou-mac-veigh/Game-Boy-Counter" target="_blank" rel="noopener noreferrer">🎮 GameBoy counter (HTML/CSS/JavaScript)</a></li>
              <li><a className="text-decoration-none text-light" href="https://github.com/tarik-benabbou-mac-veigh/Restaurant-Guso-e-Tradizione" target="_blank" rel="noopener noreferrer">🍽️ Gusto e Tradizione (HTML/CSS)</a></li>
              <li><a className="text-decoration-none text-light" href="https://github.com/tarik-benabbou-mac-veigh/liste_jeux" target="_blank" rel="noopener noreferrer">📋 Liste de jeux (Python)</a></li>
              <li><a className="text-decoration-none text-light" href="https://github.com/tarik-benabbou-mac-veigh/db_smashCenter" target="_blank" rel="noopener noreferrer">📊 Smash Center database (SQL)</a></li>
              <li><a className="text-decoration-none text-light" href="https://github.com/tarik-benabbou-mac-veigh/photo-album" target="_blank" rel="noopener noreferrer">📸 Photo album (Node.js)</a></li>
              <li><a className="text-decoration-none text-light" href="https://github.com/tarik-benabbou-mac-veigh/BTC-live-exchange-rate" target="_blank" rel="noopener noreferrer">📈 Bitcoin cours (JavaScript)</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
