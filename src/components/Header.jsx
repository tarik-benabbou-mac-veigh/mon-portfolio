import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css'

export default function Header() {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#3251a6ff" }} data-bs-theme="dark" expand="lg">
        <Container fluid className='w-75 mx-auto'>
          <Navbar.Brand as={Link} to="/" className='nav-logo'>Tarik - Portfolio</Navbar.Brand>
          <Nav className="ms-auto">
            <Link as={Link} to="/" className='fs-5 text-light py-3 px-4 rounded-3 nav-link'>Accueil</Link>
            <Link as={Link} to="/competences" className='fs-5 text-light py-3 px-4 rounded-3 nav-link'>Compétences</Link>
            <Link as={Link} to="/projects" className='fs-5 text-light py-3 px-4 rounded-3 nav-link'>Projets</Link>
            <Link as={Link} to="/contact" className='fs-5 text-light py-3 px-4 rounded-3 nav-link'>Contact</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}