import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import tarik from "../assets/images/tarik.png";
import Attestation_cef from "../assets/files/Attestation_cef.pdf";
import Typewriter from "typewriter-effect";
import "../assets/css/Home.css";

export default function Home() {
  return (
    <div>
      <header >
        <Header/>
        <section className="section-bg py-5">
          <Container className="x-3 px-md-0">
            <Row className="align-items-center">
              {/* Colonne texte */}
              <Col md={6} className="text-center text-md-start">
                <div className="d-flex flex-column align-items-center">
                  <h1 className="fs-1 fs-md-2 fw-semibold text-center">DÉVELOPPEUR WEB JUNIOR</h1>
                  <div className="mx-auto mt-4 border-bottom border-white border-5 mb-5" style={{ width: "100px" }}></div>
                  <p className="fs-3 fs-5 fs-md-4 fs-lg-3 text-center fw-semibold">Bonjour, je m'appelle {" "} <span className="first-name"><Typewriter options={{strings: ["Tarik !"], autoStart: true, loop: true}}/></span></p>
                  <p className="fs-5 text-center lh-lg">En formation pour <strong>devenir développeur web</strong> au Centre Européen de Formation, j'explore avec passion les différentes facettes de la création web (front-end et back-end).</p>
                  <Button href="https://github.com/tarik-benabbou-mac-veigh" target="_blank" className="btn-gradient fw-bolder mt-3 px-5 py-3 shadow-sm text-white">Mon profil Github</Button>
                </div>
              </Col>
              {/* Colonne image */}
              <Col md={6}className="d-flex justify-content-center align-items-center">
                <img src={tarik} alt="homme brun avec lunettes souriant avec un polo vert" className="img-fluid rounded-4 w-50 w-md-50"/></Col>
            </Row>
          </Container>
        </section>
      </header>

      <main>
        <section className="border-wrapper border-top pb-5 shadow">
          <div className="container text-center">
            <h2 className="display-6 fw-semibold primary mt-5 mb-2 text-center">MON PROFIL</h2>
            <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-4" style={{ width: "100px" }}></div>
              <p className="fs-3">À la recherche d'un stage pour consolider ma première année d'étude</p>

              <div className="d-flex flex-column mx-auto w-100 w-lg-75" style={{ maxWidth: '700px' }}>
                <p className="fw-semibold fs-5 text-start text-center">Intégrer une équipe de développeurs web me permettrait de :</p>
                <ul className="text-start fs-5 mt-1 ">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>Participer à des projets concrets.</li>
                  <li className="mb-2"><i className="bi bi-people-fill text-primary me-2"></i>Découvrir de nouvelles méthodes de travail en équipe.</li>
                  <li className="mb-2"><i className="bi bi-laptop-fill text-primary me-2"></i>Continuer d'acquérir des connaissances en programmation.</li>
                </ul>
              </div>
            
            <div className="row g-4 row-cols-lg-2 mt-3">
              <div>
                <div className="p-5 text-white rounded-3 shadow bg-custom">
                  <h2>Parcours 📝</h2>
                  {/* Sur mobile uniquement */}
                  <p className="mt-3 text-black fs-5 d-block d-md-none">Après 8 années en paie, mon intérêt se porte sur le développement web, les data, et les nouvelles technologies.</p>
                  {/* Sur desktop et tablette */}
                  <p className="mt-3 text-black fs-5 d-none d-md-block">Après 8 années passées en paie, <strong>mon intérêt pour le secteur du web</strong> n'a cessé de grandir, grâce à la transformation numérique et l'émergence de technologies puissantes et passionnantes. <br/><br/>Cette curiosité pour l'innovation, notamment l'<strong>IA</strong> et les <strong>data</strong>, est le moteur de ma reconversion pour devenir développeur.</p>
                  <Button href="#" target="_blank" className="btn-gradient fw-bolder mt-3 px-5 py-3 rounded-pill shadow-sm text-white">Télécharger mon CV</Button>
                </div>
              </div>
              <div>
                <div className="p-5 text-white rounded-3 shadow bg-custom">
                  <h2>Projets réalisés 💻</h2>
                  {/* Sur mobile uniquement */}
                  <p className="mt-3 text-black fs-5 d-block d-md-none">J’ai commencé à développer plusieurs <strong>mini-projets</strong> pour mettre mes connaissances en pratique et progresser pas à pas.</p>
                  {/* Sur desktop et tablette */}
                  <p className="mt-3 text-black fs-5 d-none d-md-block">J'ai voulu mettre mes nouvelles connaissances en application concrète en développant plusieurs <strong>mini-projets personnels</strong>. <br/><br/>Bien que certains d'entre eux ne soient pas encore finalisés et nécessitent encore des améliorations, ils représentent ma base d'apprentissage et <strong>ma volonté de progresser continuellement</strong>.</p>
                  <Button href="/projects" target="_blank" className="btn-gradient fw-bolder mt-3 px-5 py-3 rounded-pill shadow-sm text-white">Découvrir mon travail</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-bg">
          <section className="w-75 mx-auto pb-3">
            <h2 className="display-6 fw-semibold primary pt-5 text-center">EN QUOI CONSISTE MON STAGE ?</h2>
            <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-4" style={{ width: "100px" }}></div>
            <p className="fs-5 text-center lh-lg">Ce stage de développeur web junior me permettrait de valider mon titre RNCP de niveau 5. En intégrant une équipe et en me familiarisant avec les <strong>méthodes de travail professionnelles</strong>, je pourrai confronter ma théorie à la réalité des projets (front-end et back-end).</p>
            <div className="d-flex justify-content-center">
              <Button href={Attestation_cef} target="_blank" className="btn-gradient fw-bolder px-5 py-3 rounded-pill shadow-sm text-white">Document officiel - CEF</Button>
            </div>
            <div className="d-flex flex-column mx-auto w-100 w-lg-75" style={{ maxWidth: '700px' }}> 
              <h3 className="fw-semibold primary mt-5 mb-4 ">COMPÉTENCES À METTRE EN PRATIQUE</h3>
              <h4>Front-end</h4>
              <ul>
                <li className="fs-5">Mettre en place et configurer un environnement de travail.</li>
                <li className="fs-5">Concevoir les maquettes des interfaces utilisateur web et mobiles.</li>
                <li className="fs-5">Réaliser des interfaces statiques et développer la partie dynamique.</li>
              </ul>
              <h4>Back-end</h4>
              <ul>
                <li className="fs-5">Établir une base de données relationnelle (SQL).</li>
                <li className="fs-5">Développer les composants nécessaires pour interagir avec les données.</li>
                <li className="fs-5">Coder les composants métier (logique de l'application) côté serveur.</li>
                <li className="fs-5">Documenter les étapes de déploiement de l'application web.</li>
              </ul>
            </div>
          </section>
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
};