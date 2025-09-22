import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Competences from './pages/Competences';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {

  return (
    <>
      <div>
        {/* <nav>
          <Link to="/">Accueil</Link>
          <Link to="/competences">Compétences</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/contact">Contact</Link>
        </nav> */}

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/competences' element={<Competences/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App