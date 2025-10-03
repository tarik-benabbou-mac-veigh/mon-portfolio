import Header from "../components/Header";
import Footer from "../components/Footer";
import {Button} from "react-bootstrap";
import "../assets/css/Competences.css";
import css from "../assets/images/css.png";
import html_1 from "../assets/images/html_1.png";
import javascript from "../assets/images/javascript.png";
import python from "../assets/images/python.png";
import sql from "../assets/images/sql.png";
import pcep from "../assets/images/pcep.png";
import az_900 from "../assets/images/az_900.png";
import dp_900 from "../assets/images/dp_900.png";
import titre_az_900 from "../assets/files/titre_az_900.pdf";
import titre_dp_900 from "../assets/files/titre_dp_900.pdf";
import Modal_html from "../components/modals/Modal_html.jsx";
import Modal_css from "../components/modals/Modal_css.jsx";
import Modal_js from "../components/modals/Modal_js.jsx";
import Modal_python from "../components/modals/Modal_python.jsx";
import Modal_sql from "../components/modals/Modal_sql.jsx";
import { useState } from "react";

export default function Competences() {

  const [showModalHtml, setShowModalHtml] = useState(false);
  const [showModalCss, setShowModalCss] = useState(false);
  const [showModalJs, setShowModalJs] = useState(false);
  const [showModalPy, setShowModalPy] = useState(false);
  const [showModalSql, setShowModalSql] = useState(false);

  // HTML :
  const handleCloseHtml = ()=>{
    setShowModalHtml(false)
  };
  const handleShowHtml = ()=>{
    setShowModalHtml(true)
  };
  // CSS :
  const handleCloseCss = ()=>{
    setShowModalCss(false)
  };
  const handleShowCss = ()=>{
    setShowModalCss(true)
  };
  // JAVASCRIPT :
  const handleCloseJs = ()=>{
    setShowModalJs(false)
  };
  const handleShowJs = ()=>{
    setShowModalJs(true)
  };
  // PYTHON :
  const handleClosePy = ()=>{
    setShowModalPy(false)
  };
  const handleShowPy = ()=>{
    setShowModalPy(true)
  };
  // SQL :
  const handleCloseSql = ()=>{
    setShowModalSql(false)
  };
  const handleShowSql = ()=>{
    setShowModalSql(true)
  };

  return (
    <div>
      <header>
        <Header/>
        <section className="w-75 mx-auto">
        <h1 className="display-5 fw-semibold primary text-center pt-5 pb-3">MES COMPÉTENCES</h1>
        <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-4" style={{ width: "100px" }}></div>
        {/* Sur mobile uniquement */}
        <p className="fs-5 lh-lg text-center d-md-none">Après une année de formation, je suis prêt à transformer mes connaissances en expertise opérationnelle en développement web et bases de données.</p>
        {/* Sur desktop et tablette */}
        <p className="fs-5 lh-lg text-center d-none d-md-block">Bien que ma formation en développement web ait commencé depuis plus d'un an, et soit toujours en cours, j'aborde ce nouveau domaine avec méthode grâce à mes années d'expérience professionnelles. Je suis déterminé à transformer <strong>mes connaissances en expertise opérationnelle</strong> dans le développement web et les bases de données.</p>
        <div className="d-flex justify-content-center">
          <Button href="/projects" className="btn-gradient fw-bolder px-5 py-3 rounded-pill shadow-sm text-white">Découvrir mes projets</Button>
        </div>
        </section>
      </header>

      <main>
        <section className="border-wrapper border-top pb-5 mt-5 shadow section-bg">
          <div className="container text-center">
            <h2 className="display-6 fw-semibold primary mt-5 mb-4 text-center">LANGAGES APPRIS</h2>
            <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-4" style={{ width: "100px" }}></div>
            <p className="fs-5 lh-lg text-center"><strong>HTML, CSS, JavaScript, Python, et SQL :</strong> 5 langages que j'ai découvert jusqu'à présent. Je suis conscient que maitriser chacun d'entre eux <strong>prend du temps et demande beaucoup de travail</strong>. Néanmoins je vais vous expliquer la raison pour laquelle j'ai veillé à les apprendre un par un pour préparer au mieux le <strong>stage de 10 semaines</strong> qui m'attend et qui se concentre sur le front comme sur le back.</p>

            <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 mt-3">
              <div>
                <div className="lang-card d-flex flex-column align-items-center">
                  <h2 className="mb-4">HTML</h2>
                  <img src={html_1} className="img-fluid tech-icon mb-3" alt="Logo html" />
                  <a onClick={handleShowHtml} className="btn btn-outline-light fw-semibold fs-5">Découvrir</a>
                </div>
                <Modal_html show={showModalHtml} handleCloseHtml={handleCloseHtml}/>
              </div>

              <div>
                <div className="lang-card d-flex flex-column align-items-center">
                  <h2 className="mb-4">CSS</h2>
                  <img src={css} className="img-fluid tech-icon mb-3" alt="Logo css" />
                  <a onClick={handleShowCss} className="btn btn-outline-light fw-semibold fs-5">Découvrir</a>
                </div>
                <Modal_css show={showModalCss} handleCloseCss={handleCloseCss}/>
              </div>
              
              <div>
                <div className="lang-card d-flex flex-column align-items-center">
                  <h2 className="mb-4">JavaScript</h2>
                  <img src={javascript} className="img-fluid tech-icon mb-3" alt="Logo javascript" />
                  <a onClick={handleShowJs} className="btn btn-outline-light fw-semibold fs-5">Découvrir</a>
                </div>
                <Modal_js show={showModalJs} handleCloseJs={handleCloseJs}/>
              </div>
              
              <div>
                <div className="lang-card d-flex flex-column align-items-center">
                  <h2 className="mb-4">Python</h2>
                  <img src={python} className="img-fluid tech-icon mb-3" alt="Logo python" />
                  <a onClick={handleShowPy} className="btn btn-outline-light fw-semibold fs-5">Découvrir</a>
                </div>
                <Modal_python show={showModalPy} handleClosePy={handleClosePy}/>
              </div>
              
              <div>
                <div className="lang-card d-flex flex-column align-items-center">
                  <h2 className="mb-4">SQL</h2>
                  <img src={sql} className="img-fluid tech-icon mb-3" alt="Logo sql" />
                  <a onClick={handleShowSql} className="btn btn-outline-light fw-semibold fs-5">Découvrir</a>
                </div>
                <Modal_sql show={showModalSql} handleCloseSql={handleCloseSql}/>
              </div>
            </div>
          </div>
        </section>

        <section className="border-wrapper pb-5 pt-5 shadow">
          <div className="container text-center">
            <h2 className="display-6 fw-semibold primary mb-4 text-center">MES CERTIFICATIONS</h2>
            <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-3" style={{ width: "100px" }}></div>
          <div className="row g-4 row-cols-lg-3 mt-3">
              <div>
                <div className="p-4 text-white rounded-3 shadow gradient">
                  <h2 className="mb-4">AZ-900</h2>
                  <img src={az_900} className="img-fluid certif-icon mb-3" alt="Logo az_900" />
                  <a href={titre_az_900} target="_blank" className="btn btn-outline-light fw-semibold fs-5 mt-3">Afficher la certification</a>
                </div>
              </div>
              <div>
                <div className="p-4 text-white rounded-3 shadow gradient">
                  <h2 className="mb-4">DP-900</h2>
                  <img src={dp_900} className="img-fluid certif-icon mb-3" alt="Logo dp-900" />
                  <a href={titre_dp_900} target="_blank" className="btn btn-outline-light fw-semibold fs-5 mt-3">Afficher la certification</a>
                </div>
              </div>
              <div>
                <div className="p-4 text-white rounded-3 shadow gradient">
                  <h2 className="mb-4">PCEP</h2>
                  <img src={pcep} className="img-fluid certif-icon mb-3" alt="Logo pcep" />
                  <a href="https://edube.org/certification/pcep" target="_blank" className="btn btn-outline-light fw-semibold fs-5 mt-3">Passage prévu en décembre</a>
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