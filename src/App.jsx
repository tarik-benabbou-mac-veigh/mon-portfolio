import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Competences from './pages/Competences';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/competences' element={<Competences/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
      </div>
    </>
  )
}
export default App