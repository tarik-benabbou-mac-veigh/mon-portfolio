import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';

export default function Header() {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#3251a6ff" }} data-bs-theme="dark" expand="lg" collapseOnSelect>
        <Container fluid className="w-75 mx-auto">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="nav-logo">Tarik - Portfolio</Navbar.Brand>

          {/* Bouton burger sur mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Contenu du menu */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="fs-5 text-light py-3 px-4 rounded-3 nav-link">ACCUEIL</Link>
              <Link to="/competences" className="fs-5 text-light py-3 px-4 rounded-3 nav-link">COMPÉTENCES</Link>
              <Link to="/projects" className="fs-5 text-light py-3 px-4 rounded-3 nav-link">PROJETS</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
