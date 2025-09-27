import Header from "../components/Header";
import Footer from "../components/Footer";
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


export default function Competences() {
  return (
    <div>
      <header>
        <Header/>
        <section className="w-50 mx-auto">
        <h1 className="display-5 fw-semibold primary mb-3 text-center pt-5 pb-3">Mes compétences</h1>
        <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-5" style={{ width: "200px" }}></div>
        <p className="fs-5 lh-lg text-center">Bien que ma formation en développement web ait commencé depuis plus d'un an, et soit toujours en cours, j'aborde ce nouveau domaine avec méthode grâce à mes années d'expérience professionnelles. Je suis déterminé à transformer <strong>mes connaissances en expertise opérationnelle</strong> dans le développement web, les bases de données.</p>
        <div className="d-flex justify-content-center">
          <a href="/projects" className="btn fs-5 p-2 m-4 text-light text-center fw-semibold" style={{ backgroundColor: "#4e71d2ff",  width: "300px" }}>Découvrir mes projets</a>
        </div>
        </section>
      </header>

      <main>
        <section className="border-wrapper border-top pb-5 mt-5 shadow" style={{ backgroundColor: "#bccaf2c9" }}>
          <div className="container text-center">
            <h2 className="display-6 fw-semibold primary mt-5 mb-4 text-center">Langages appris</h2>
            <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-4" style={{ width: "100px" }}></div>
            <p className="fs-5 lh-lg text-center">HTML, CSS, JavaScript, Python, et SQL : voilà les 5 langages que j'ai eu la chance de découvrir en une année d'apprentissage. Je suis conscient que maitriser chacun d'entre eux <strong>prend du temps et demande beaucoup de travail</strong>. Néanmoins je vais vous expliquer la raison pour laquelle j'ai veillé à les apprendre un par un pour préparer au mieux le <strong>stage de 10 semaines</strong> qui m'attend et qui se concentre sur le front comme sur le back.</p>

            <div className="row g-4 row-cols-lg-5 mt-5">
              <div>
                <div className="p-4 text-white rounded-3 shadow" style={{ backgroundColor: "#4e71d2a4" }}>
                  <h2 className="mb-4">HTML</h2>
                  <img src={html_1} className="img-fluid tech-icon mb-3" alt="Logo html" />
                  <a href="/projects" className="btn btn-outline-light fw-semibold fs-5">Découvrir</a>
                </div>
              </div>
              <div>
                <div className="p-4 text-white rounded-3 shadow" style={{ backgroundColor: "#4e71d2a4" }}>
                  <h2 className="mb-4">CSS</h2>
                  <img src={css} className="img-fluid tech-icon mb-3" alt="Logo css" />
                  <a href="/projects" className="btn btn-outline-light fw-semibold fs-5">Découvrir</a>
                </div>
              </div>
              <div>
                <div className="p-4 text-white rounded-3 shadow" style={{ backgroundColor: "#4e71d2a4" }}>
                  <h2 className="mb-4">JavaScript</h2>
                  <img src={javascript} className="img-fluid tech-icon mb-3" alt="Logo javascript" />
                  <a href="/projects" className="btn btn-outline-light fw-semibold fs-5">Découvrir</a>
                </div>
              </div>
              <div>
                <div className="p-4 text-white rounded-3 shadow" style={{ backgroundColor: "#4e71d2a4" }}>
                  <h2 className="mb-4">Python</h2>
                  <img src={python} className="img-fluid tech-icon mb-3" alt="Logo python" />
                  <a href="/projects" className="btn btn-outline-light fw-semibold fs-5">Découvrir</a>
                </div>
              </div>
              <div>
                <div className="p-4 text-white rounded-3 shadow" style={{ backgroundColor: "#4e71d2a4" }}>
                  <h2 className="mb-4">SQL</h2>
                  <img src={sql} className="img-fluid tech-icon mb-3" alt="Logo sql" />
                  <a href="/projects" className="btn btn-outline-light fw-semibold fs-5">Découvrir</a>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row g-4 mt-5">
                {/* HTML */}
                <div className="col-12">
                  <div className="shadow rounded-3 p-4">
                    <div className="row align-items-center">
                      <div className="col-lg-3 col-md-4 col-12 mb-3 mb-md-0">
                        <h2 className="m-0 text-center title-color">HTML</h2>
                      </div>
                      <div className="col-lg-9 col-md-8 col-12">
                        <p className="fs-5 lh-lg m-0 text-center">
                          C'est grâce au HTML que j'ai eu envie de me lancer dans le développement web.
                          J'ai pris plaisir à structurer des pages claires et accessibles grâce à
                          l'<strong>indentation</strong> et l'<strong>imbrication</strong> des balises,
                          en cherchant toujours à améliorer la lisibilité et la cohérence de mon code.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>  
                {/* CSS */}
                <div className="col-12">
                  <div className="shadow rounded-3 p-4">
                    <div className="row align-items-center">
                      <div className="col-lg-3 col-md-4 col-12 mb-3 mb-md-0">
                        <h2 className="m-0 text-center title-color">CSS</h2>
                      </div>
                      <div className="col-lg-9 col-md-8 col-12">
                        <p className="fs-5 lh-lg m-0 text-center">
                        Ce langage de style prend tout son sens une fois avoir acquis de bonnes bases HTML. Le CSS est pour moi le plus grand challenge en développement web avec le <strong>responsive</strong>. Je me suis formé au puissant framework <strong>Bootstrap</strong>, et compte désormais apprendre Tailwind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>  
                {/* JavaScript */}
                <div className="col-12">
                  <div className="shadow rounded-3 p-4">
                    <div className="row align-items-center">
                      <div className="col-lg-3 col-md-4 col-12 mb-3 mb-md-0">
                        <h2 className="m-0 text-center title-color">JavaScript</h2>
                      </div>
                      <div className="col-lg-9 col-md-8 col-12">
                        <p className="fs-5 lh-lg m-0 text-center">
                          Le JavaScript m’a permis de donner vie à mes projets en ajoutant de l’interactivité. Même si ce langage représente parfois un défi, je prends le temps de comprendre chaque notion en profondeur. Créer une <strong>API Rest</strong> à travers le <strong>modèle MVC</strong> a été le plus intéressant jusuq'à présent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>  
                {/* Python */}
                <div className="col-12">
                  <div className="shadow rounded-3 p-4">
                    <div className="row align-items-center">
                      <div className="col-lg-3 col-md-4 col-12 mb-3 mb-md-0">
                        <h2 className="m-0 text-center title-color">Python</h2>
                      </div>
                      <div className="col-lg-9 col-md-8 col-12">
                        <p className="fs-5 lh-lg m-0 text-center">
                          Python est le langage qui me plait le plus par sa clareté et son côté "fortement typé" (à l'inverse de JS). J’apprécie la clarté de sa syntaxe, qui me permet de me concentrer sur la résolution de problèmes. Je compte bien <strong>me spécialiser dans la data</strong> en me formant au framework <strong>Pandas</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>  
                {/* SQL */}
                <div className="col-12">
                  <div className="shadow rounded-3 p-4">
                    <div className="row align-items-center">
                      <div className="col-lg-3 col-md-4 col-12 mb-3 mb-md-0">
                        <h2 className="m-0 text-center title-color">SQL</h2>
                      </div>
                      <div className="col-lg-9 col-md-8 col-12">
                        <p className="fs-5 lh-lg m-0 text-center">
                          Avec SQL, j’ai appris à organiser et manipuler les données de manière efficace sur <strong>MySQL</strong> et <strong>PostgreSQL</strong>. J’aime l'intuitivité et la logique de ce langage de requête. Je compte me perfectionner et maîtriser les <strong>index</strong> et les <strong>procédures structurées</strong> pour améliorer les performances de mes requêtes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </section>

        <section className="border-wrapper pb-5 pt-5 shadow">
          <div className="container text-center">
            <h2 className="display-6 fw-semibold primary mb-4 text-center">Mes certifications</h2>
            <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-5" style={{ width: "100px" }}></div>
          <div className="row g-4 row-cols-lg-3 mt-5">
              <div>
                <div className="p-4 text-white rounded-3 shadow" style={{ backgroundColor: "#4e71d2a4" }}>
                  <h2 className="mb-4">AZ-900</h2>
                  <img src={az_900} className="img-fluid certif-icon mb-3" alt="Logo az_900" />
                  <a href={titre_az_900} target="_blank" className="btn btn-outline-light fw-semibold fs-5 mt-3">Afficher la certification</a>
                </div>
              </div>
              <div>
                <div className="p-4 text-white rounded-3 shadow" style={{ backgroundColor: "#4e71d2a4" }}>
                  <h2 className="mb-4">DP-900</h2>
                  <img src={dp_900} className="img-fluid certif-icon mb-3" alt="Logo dp-900" />
                  <a href={titre_dp_900} target="_blank" className="btn btn-outline-light fw-semibold fs-5 mt-3">Afficher la certification</a>
                </div>
              </div>
              <div>
                <div className="p-4 text-white rounded-3 shadow" style={{ backgroundColor: "#4e71d2a4" }}>
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