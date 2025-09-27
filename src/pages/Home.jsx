import Header from "../components/Header";
import Footer from "../components/Footer";
import Tarik from "../assets/images/Tarik.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../assets/css/Home.css"
import Attestation_cef from "../assets/files/Attestation_cef.pdf"

export default function Home() {
  return (
    <div>
      <header >
        <Header/>
        <section fluid className='w-75 mx-auto d-flex align-items-center m-5 mb-2'>
          <Row className="align-items-space-around">
            {/* Colonne texte */}
            <Col md={6}>
              <div className="d-flex flex-column align-items-center">
                <h1 className="display-5 fw-semibold primary mb-3 text-center" >Développeur web junior</h1>
                  <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-5" style={{ width: "200px" }}></div>
                    <p className="fs-5 text-center fw-semibold">Bonjour, je m'appelle Tarik.</p> 
                    <p className="fs-5 text-center lh-lg">Actuellement en formation pour <strong>devenir développeur web</strong> au Centre Européen de Formation, j'explore avec passion les différentes facettes de la création web (front et back).</p>
                    <a href="https://github.com/tarik-benabbou-mac-veigh" target="_blank" className="btn fs-5 p-2 m-4 text-light text-center fw-semibold" style={{ backgroundColor: "#4e71d2ff",  width: "300px" }}>Mon profil Github</a>
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
        <section className="border-wrapper border-top pb-5 mt-5 shadow" style={{ backgroundColor: "#bccaf2c9" }}>
          <div className="container text-center">
            <h2 className="display-6 fw-semibold primary mt-5 mb-4 text-center">Mon profil</h2>
            <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-5" style={{ width: "100px" }}></div>
              <p className="fs-5 text-center lh-lg">Je suis à la recherche d'un stage pour consolider cette première année d'étude et enfin passer de la théorie à la pratique. <strong>Intégrer une équipe de développeur web</strong> me permettrait de :</p> 
              <ul className="text-start fs-5 mt-3">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Vivre une expérience sur le terrain.</li>
                <li className="mb-2"><i className="bi bi-people-fill text-primary me-2"></i>Découvrir de nouvelles méthodes de travail (surtout en équipe).</li>
                <li className="mb-2"><i className="bi bi-laptop-fill text-primary me-2"></i>Continuer d'acquérir des connaissances indispensables en programmation.</li>
              </ul>
            <div className="row g-4 row-cols-lg-2 mt-5">
              <div>
                <div className="p-5 text-white rounded-3 shadow" style={{ backgroundColor: "#4e71d2a4" }}>
                  <h2>Parcours professionnel 📝</h2>
                  <p className="mt-3 text-black fs-5">Après 8 années passées en tant que Gestionnaire de Paie, <strong>mon intérêt pour le secteur du web</strong> n'a cessé de grandir, grâce par la transformation numérique et l'émergence de technologies puissantes et passionnantes. <br/><br/>Cette curiosité pour l'innovation, notamment l'<strong>IA</strong> et les <strong>data</strong>, est le moteur de ma reconversion pour devenir développeur.</p>
                  <a href="#" className="btn btn-outline-light fw-semibold fs-5">Télécharger mon CV</a>
                </div>
              </div>
              <div>
                <div className="p-5 text-white rounded-3 shadow" style={{ backgroundColor: "#4e71d2a4" }}>
                  <h2>Projets réalisés 💻</h2>
                  <p className="mt-3 text-black fs-5">J'ai voulu mettre mes nouvelles connaissances en application concrète en développant plusieurs <strong>mini-projets personnels</strong>. <br/><br/>Bien que certains d'entre eux ne soient pas encore finalisés et nécessitent encore des améliorations, ils représentent ma base d'apprentissage et <strong>ma volonté de progresser continuellement</strong>.</p>
                  <a href="/projects" className="btn btn-outline-light fw-semibold fs-5">Découvrir mon travail</a>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-50 mx-auto">
          <h2 className="display-6 fw-semibold primary mt-5 mb-4 text-center">En quoi consiste mon stage ?</h2>
          <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-5" style={{ width: "100px" }}></div>
          <p className="fs-5 text-center lh-lg">Je suis à la recherche d'une <strong>opportunité de stage de développeur web junior</strong> pour consolider ma première année de formation et valider mon titre RNCP de niveau 5. En intégrant une équipe et en me familiarisant avec les méthodes de travail professionnelles, je pourrai confronter ma théorie à la réalité des projets. J'ai hâte de pouvoir contribuer concrètement en mettant en œuvre mes connaissances acquises en développement front-end et back-end.</p>
          <div className="d-flex justify-content-center">
            <a href={Attestation_cef} target="_blank" className="btn fs-5 p-2 m-4 text-light text-center fw-semibold" style={{ backgroundColor: "#4e71d2ff",  width: "300px" }}>Document officiel - CEF</a>
          </div>
          <h3 className="fw-semibold primary mt-5 mb-4 text-center">Compétences à mettre en pratique</h3>
          <h4>Front end</h4>
          <ul>
            <li className="fs-5">Mettre en place et configurer un environnement de travail adapté au projet.</li>
            <li className="fs-5">Concevoir les maquettes des interfaces utilisateur (UI) web et mobiles.</li>
            <li className="fs-5">Réaliser des interfaces statiques, puis en développer la partie dynamique.</li>
          </ul>
          <h4>Back end</h4>
          <ul>
            <li className="fs-5">Établir une base de données relationnelle solide (SQL).</li>
            <li className="fs-5">Développer les composants nécessaires pour interagir avec les données (SQL et NoSQL).</li>
            <li className="fs-5">Coder les composants métier (logique de l'application) côté serveur.</li>
            <li className="fs-5">Documenter les étapes de déploiement de l'application web.</li>
          </ul>
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}