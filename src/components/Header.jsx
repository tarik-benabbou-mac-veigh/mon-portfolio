import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="#home">Mon Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Link as={Link} to="/">Accueil</Link>
            <Link as={Link} to="/competences">Compétences</Link>
            <Link as={Link} to="/projects">Projets</Link>
            <Link as={Link} to="/contact">Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}