import Header from "../components/Header";
import Footer from "../components/Footer";
import Tarik from "../assets/images/Tarik.jpg"
import { Container, Row, Col, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../assets/css/Home.css"

export default function Home() {
  return (
    <div>
      <header >
        <Header/>
        <section fluid className='w-75 mx-auto d-flex align-items-center m-5'>
          <Row className="align-items-space-around">
            {/* Colonne texte */}
            <Col md={6}>
              <div className="d-flex flex-column align-items-center">
                <h1 className="display-5 fw-semibold primary mb-3 text-center" >Développeur web junior</h1>
                  <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-5" style={{ width: "200px" }}></div>
                    <p className="fs-5 text-center fw-semibold">Bonjour, je m'appelle Tarik.</p> 
                    <p className="fs-5 text-center lh-lg">Actuellement en formation pour <strong>devenir développeur web</strong> au Centre Européen de Formation, j'explore avec passion les différentes facettes de la création web (front et back).</p>
                    <a href="https://github.com/tarik-benabbou-mac-veigh" target="_blank" className="btn fs-5 p-2 m-4 text-light text-center" style={{ backgroundColor: "#4e71d2ff",  width: "300px" }}>Mon profil Github</a>
              </div>
            </Col>
            {/* Colonne image */}
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <div>
                <img src={Tarik} alt="Jeune homme brun souriant" className="img-fluid rounded-4 shadow-lg"/>
              </div>
            </Col>
          </Row>
        </section>
      </header>

      <main>
        <Container fluid className='w-75 mx-auto justify-content-center '>
          <Row>
            {/* Ajoutez les classes d-flex et justify-content-center à la Col */}
            <Col md={3} className="d-flex justify-content-center">
            </Col>
          </Row>
        </Container>

        <section className="border-wrapper border-top pb-5 mt-5 shadow-lg" style={{ backgroundColor: "#bccaf2c9" }}>
          <div className="container text-center">
            <h2 className="display-6 fw-semibold primary mt-5 mb-4 text-center">Mon profil</h2>
            <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-5" style={{ width: "100px" }}></div>
            <p className="fs-5 text-center lh-lg">Je suis à la recherche d'un stage pour consolider cette première année d'étude et enfin passer de la théorie à la pratique. <strong>Intégrer une équipe de développeur web</strong> me permettrait de :</p> 

            <ul className="list-unstyled text-start fs-5 mt-3">
              <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Vivre une expérience sur le terrain.</li>
              <li className="mb-2"><i className="bi bi-people-fill text-primary me-2"></i>Découvrir de nouvelles méthodes de travail (surtout en équipe).</li>
              <li className="mb-2"><i className="bi bi-laptop-fill text-primary me-2"></i>Continuer d'acquérir des connaissances indispensables en programmation.</li>
            </ul>
            <div class="row g-4 row-cols-lg-2 mt-5">
              <div>
                <div class="p-5 text-white rounded-3 shadow" style={{ backgroundColor: "#4e71d2a4" }}>
                  <h2>Parcours professionnel 📝</h2>
                  <p class="mt-3 text-black fs-5">Après 8 années passées en tant que Gestionnaire de Paie, <strong>mon intérêt pour le secteur du web</strong> n'a cessé de grandir, grâce par la transformation numérique et l'émergence de technologies puissantes et passionnantes. <br/><br/>Cette curiosité pour l'innovation, notamment l'<strong>IA</strong> et les <strong>data</strong>, est le moteur de ma reconversion pour devenir développeur.</p>
                  <a href="#" class="btn btn-outline-light fw-semibold fs-5">Télécharger mon CV</a>
                </div>
              </div>
              <div>
                <div class="p-5 text-white rounded-3 shadow" style={{ backgroundColor: "#4e71d2ff" }}>
                  <h2>Projets réalisés 💻</h2>
                  <p class="mt-3 text-black fs-5">J'ai voulu mettre mes nouvelles connaissances en application concrète en développant plusieurs <strong>mini-projets personnels</strong>. <br/><br/>Bien que certains d'entre eux ne soient pas encore finalisés et nécessitent encore des améliorations, ils représentent ma base d'apprentissage et <strong>ma volonté de progresser continuellement</strong>.</p>
                  <a href="/projects" class="btn btn-outline-light fw-semibold fs-5">Découvrir mon travail</a>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}