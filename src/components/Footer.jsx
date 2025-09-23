import { Container, Row, Col } from "react-bootstrap";
import '../assets/css/Footer.css'

export default function Footer() {
  return (
    <footer className=" bg-primary">
        <Container fluid className='w-75 mx-auto text-light'>
            <Row className="p-3">
                <Col md={4}>
                    <h4 className="footer-name">Tarik Benabbou Mac Veigh</h4>
                    <ul className="list-unstyled footer-item">
                        <li>4 rue Arthur Rimbaud</li>
                        <li>59139, Wattignies, France</li>
                        <li>07 44 86 10 56</li>
                        <li>tarik.bmacveigh@hotmail.com</li>
                    </ul>
                </Col>

                <Col md={4}>
                    <h4 className="footer-name">Pages</h4>
                    <ul className="footer-item">
                        <li>Accueil</li>
                        <li>Compétences</li>
                        <li>Projets</li>
                        <li>Contact</li>
                    </ul>
                </Col>

                <Col md={4}>
                    <h4 className="footer-name">Mes projets personnels</h4>
                    <ul className="footer-item">
                        <li>GameBoy counter (HTML-CSS-JavaScript)</li>
                        <li>Gusto e Tradizione (HTML-CSS)</li>
                        <li>Photo album (Node.js)</li>
                        <li>Liste de jeux (Python)</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}