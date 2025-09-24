import { Container, Row, Col } from "react-bootstrap";
import '../assets/css/Footer.css'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#3251a6ff" }}>
        <Container fluid className='w-75 mx-auto text-light fs-5 p-4'>
            <Row className="">
                <Col md={4}>
                    <h4 className="footer-name">Tarik Benabbou Mac Veigh</h4>
                    <ul className="list-unstyled footer-item">
                        <li>🏠 4 rue Arthur Rimbaud</li>
                        <li>🏠 59139, Wattignies, France</li>
                        <li>📱 07 44 86 10 56</li>
                        <li><a className="text-decoration-none text-light" href="mailto:tarik.bmacveigh@hotmail.com">📧 tarik.bmacveigh@hotmail.com</a></li>
                    </ul>
                </Col>

                <Col md={4}>
                    <h4 className="footer-name">Pages</h4>
                    <ul className="list-unstyled footer-item">
                        <li><a href="/" className="text-decoration-none text-light">Accueil</a></li>
                        <li><a href="/competences" className="text-decoration-none text-light">Compétences</a></li>
                        <li><a href="/projects" className="text-decoration-none text-light">Projets</a></li>
                        <li><a href="/contact" className="text-decoration-none text-light">Contact</a></li>
                    </ul>
                </Col>

                <Col md={4}>
                    <h4 className="footer-name">Mes projets personnels</h4>
                    <ul className="list-unstyled footer-item">
                        <li><a className="text-decoration-none text-light" href="https://github.com/tarik-benabbou-mac-veigh/Game-Boy-Counter" target="_blank" rel="noopener noreferrer">🎮 GameBoy counter (HTML/CSS/JavaScript)</a></li>
                        <li><a className="text-decoration-none text-light" href="https://github.com/tarik-benabbou-mac-veigh/Restaurant-Guso-e-Tradizione" target="_blank" rel="noopener noreferrer">🍽️ Gusto e Tradizione (HTML/CSS)</a></li>
                        <li><a className="text-decoration-none text-light" href="https://github.com/tarik-benabbou-mac-veigh/liste_jeux" target="_blank" rel="noopener noreferrer">📋 Liste de jeux (Python)</a></li>
                        <li><a className="text-decoration-none text-light" href="https://github.com/tarik-benabbou-mac-veigh/tifosi_database" target="_blank" rel="noopener noreferrer">📊 Tifosi database (SQL)</a></li>
                        <li><a className="text-decoration-none text-light" href="https://github.com/tarik-benabbou-mac-veigh/photo-album" target="_blank" rel="noopener noreferrer">📸 Photo album (Node.js)</a></li>
                        <li><a className="text-decoration-none text-light" href="https://github.com/tarik-benabbou-mac-veigh/BTC-live-exchange-rate" target="_blank" rel="noopener noreferrer">📈 Bitcoin cours (JavaScript)</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}