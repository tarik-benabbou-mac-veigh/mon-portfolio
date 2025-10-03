import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/Projects.css";
import {Button} from "react-bootstrap";
import liste_jeux from "../assets/images/liste_jeux.jpg";
import smash_center from "../assets/images/smash_center.jpg";
import game_boy from "../assets/images/game_boy.jpg";
import btc_cours from "../assets/images/btc_cours.jpg";
import gusto_restaurant_italien from "../assets/images/gusto_restaurant_italien.jpg";
import photo_album from "../assets/images/photo_album.jpg";

export default function Projects() {
  return (
    <div>
      <header>
        <Header/>
        <section className="w-75 mx-auto">
          <h1 className="display-5 fw-semibold primary mb-3 text-center pt-5 pb-3">MES PROJETS PERSONNELS</h1>
          <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-4" style={{ width: "100px" }}></div>
        {/* Sur mobile uniquement */}
          <p className="fs-5 lh-lg text-center d-md-none">Pour vraiment ancrer mes connaissances, j'ai créé plusieurs <strong>mini-projets sur GitHub</strong> (Python, SQL, JavaScript, Node.js), qui sont mes "chantiers ouverts" de pratique et de progression. N'hésitez pas à les consulter ! Je serais ravi d'avoir votre <strong>retour constructif</strong> pour identifier les améliorations à apporter. 🙂</p>
        {/* Sur desktop et tablette */}
          <p className="fs-5 lh-lg text-center d-none d-md-block">Pour vraiment ancrer mes connaissances, je me suis rapidement mis à créer de mini-projets sur <strong>Github</strong>. Je vous en partage quelque-uns, plus bas, qui reprennent les différents langages que j'ai appris jusqu'à présent.</p>
          <p className="fs-5 lh-lg text-center d-none d-md-block">Ce sont mes "chantiers ouverts" qui me permettent de pratiquer et de progresser. Les projets "Tifosi database" (<strong>SQL</strong>) et "Liste de jeux" (<strong>Python</strong>) m'ont particulièrement intéressés ! Je serais d'ailleurs ravi d'avoir un <strong>retour constructif</strong> sur les améliorations à apporter pour chacun de mes dépôts.</p>
          <div className="d-flex justify-content-center">
            <Button href="https://github.com/tarik-benabbou-mac-veigh?tab=repositories" target="_blank" className="btn-gradient fw-bolder px-5 py-3 rounded-pill shadow-sm text-white">Découvrir mes dépôts</Button>
          </div>
        </section>
      </header>

      <main>
        <section className="border-top mt-5 section-bg">
          <div className="container pb-5">

            <h2 className="display-6 fw-semibold primary mt-5 mb-4 text-center">
              MES RÉALISATIONS
            </h2>
            <div
              className="mx-auto mt-4 border-bottom border-primary border-5 mb-5"
              style={{ width: "100px" }}
            ></div>

            <section className="container w-100 w-md-75 mx-auto">
              
              <div className="row align-items-center p-3 p-lg-5 my-3 border border-2 rounded-4 shadow-sm bg-custom">

                {/* Projet 1 */}
                <div className="col-12 col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
                  <h5 className="text-uppercase text-muted fw-bold">Projet</h5>
                  <h3 className="fw-bold">Liste de jeux vidéos</h3>
                  <p className="fs-6 fs-md-5 lh-lg">Découvrez la structure complète de cette liste et explorez la logique derrière chaque fonctionnalité.</p>
                  <p className="fw-semibold">Langage : Python</p>
                  <Button href="https://github.com/tarik-benabbou-mac-veigh/liste_jeux" target="_blank"className="btn-gradient fw-bolder px-4 py-2 px-lg-5 py-lg-3 rounded-pill shadow-sm text-white mt-3">Afficher le dépôt</Button>
                </div>
                <div className="col-12 col-lg-6 text-center">
                  <img src={liste_jeux} alt="Pile de jeux vidéos Nintendo" className="img-fluid rounded-3 shadow-lg project-img"/>
                </div>
              </div>

              {/* Projet 2 */}
              <div className="row align-items-center p-3 p-lg-5 my-4 border border-3 rounded-4 shadow-sm bg-custom">
                <div className="col-12 col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
                  <h5 className="text-uppercase text-muted fw-bold">Projet</h5>
                  <h3 className="fw-bold">Base de données SmashCenter</h3>
                  <p className="fs-5 lh-lg">Explorez les scripts et requêtes qui permettent de gérer efficacement les commandes et les produits.</p>
                  <p className="fw-semibold">Langage : SQL (PostgreSQL)</p>
                  <Button href="https://github.com/tarik-benabbou-mac-veigh/db_smashCenter" target="_blank" className="btn-gradient fw-bolder px-4 py-2 px-lg-5 py-lg-3 rounded-pill shadow-sm text-white mt-3">Afficher le dépôt</Button>
                </div>
                <div className="col-12 col-lg-6 text-center">
                  <img src={smash_center} alt="raquette de tennis posée sur un cours à côté d'un joueur" className="img-fluid rounded-2 shadow-lg project-img"/>
                </div>
              </div>
              {/* Projet 3 */}
              <div className="row align-items-center p-3 p-lg-5 my-4 border border-3 rounded-4 shadow-sm bg-custom">
                <div className="col-12 col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
                  <h5 className="text-uppercase text-muted fw-bold">Projet</h5>
                  <h3 className="fw-bold">Game Boy compteur</h3>
                  <p className="fs-5 lh-lg">Visualisez la logique et l’implémentation de ce compteur rétro années 80, conçue pour refléter fidèlement l’original.</p>
                  <p className="fw-semibold">Langages : HTML, CSS (Bootstrap), Javascript</p>
                  <Button href="https://github.com/tarik-benabbou-mac-veigh/Game-Boy-Counter" target="_blank" className="btn-gradient fw-bolder px-4 py-2 px-lg-5 py-lg-3 rounded-pill shadow-sm text-white mt-3">Afficher le dépôt</Button>
                </div>
                <div className="col-lg-6 text-center">
                  <img src={game_boy} alt="game boy grise avec les jeux zelda et simpsons" className="img-fluid rounded-2 shadow-lg project-img"/>
                </div>
              </div>
              {/* Projet 4 */}
              <div className="row align-items-center p-3 p-lg-5 my-4 border border-3 rounded-4 shadow-sm bg-custom">
                <div className="col-12 col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
                  <h5 className="text-uppercase text-muted fw-bold">Projet</h5>
                  <h3 className="fw-bold">Cours des cryptos</h3>
                  <p className="fs-5 lh-lg">Suivez l’évolution des cryptomonnaies comme le BTC, l'ETH, et l'ADA en direct (en €, $, £).</p>
                  <p className="fw-semibold">Langages : HTML, CSS (Bootstrap), Javascript</p>
                  <Button href="https://github.com/tarik-benabbou-mac-veigh/BTC-live-exchange-rate" target="_blank" className="btn-gradient fw-bolder px-4 py-2 px-lg-5 py-lg-3 rounded-pill shadow-sm text-white mt-3">Afficher le dépôt</Button>
                </div>
                <div className="col-lg-6 text-center">
                  <img src={btc_cours} alt="game boy grise avec les jeux zelda et simpsons" className="img-fluid rounded-2 shadow-lg project-img"/>
                </div>
              </div>
              {/* Projet 5 */}
              <div className="row align-items-center p-3 p-lg-5 my-4 border border-3 rounded-4 shadow-sm bg-custom">
                <div className="col-12 col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
                  <h5 className="text-uppercase text-muted fw-bold">Projet</h5>
                  <h3 className="fw-bold">Gusto e tradizione</h3>
                  <p className="fs-5 lh-lg">Découvrez la cuisine italienne gastronomique à travers un menu épuré.</p>
                  <p className="fw-semibold">Langages : HTML, CSS (Bootstrap)</p>
                  <Button href="https://github.com/tarik-benabbou-mac-veigh/Restaurant-Guso-e-Tradizione" target="_blank" className="btn-gradient fw-bolder px-4 py-2 px-lg-5 py-lg-3 rounded-pill shadow-sm text-white mt-3">Afficher le dépôt</Button>
                </div>
                <div className="col-lg-6 text-center">
                  <img src={gusto_restaurant_italien} alt="game boy grise avec les jeux zelda et simpsons" className="img-fluid rounded-2 shadow-lg project-img"/>
                </div>
              </div>
              {/* Projet 6 */}
              <div className="row align-items-center p-3 p-lg-5 my-4 border border-3 rounded-4 shadow-sm bg-custom">
                <div className="col-12 col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
                  <h5 className="text-uppercase text-muted fw-bold">Projet</h5>
                  <h3 className="fw-bold">Album photos</h3>
                  <p className="fs-5 lh-lg">Découvrez la conception de cet album et la manière dont les images sont organisées et affichées.</p>
                  <p className="fw-semibold">Javascript (Node.js)</p>
                  <Button href="https://github.com/tarik-benabbou-mac-veigh/photo-album" target="_blank" className="btn-gradient fw-bolder px-4 py-2 px-lg-5 py-lg-3 rounded-pill shadow-sm text-white mt-3">Afficher le dépôt</Button>
                </div>
                <div className="col-lg-6 text-center">
                  <img src={photo_album} alt="game boy grise avec les jeux zelda et simpsons" className="img-fluid rounded-2 shadow-lg project-img"/>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
};