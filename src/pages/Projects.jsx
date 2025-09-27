import Header from "../components/Header";
import Footer from "../components/Footer";
import liste_jeux from "../assets/images/liste_jeux.jpg";
import tifosi_database from "../assets/images/tifosi_database.jpg";
import game_boy from "../assets/images/game_boy.jpg";
import btc_cours from "../assets/images/btc_cours.jpg";
import gusto_restaurant_italien from "../assets/images/gusto_restaurant_italien.jpg";
import photo_album from "../assets/images/photo_album.jpg";

export default function Projects() {
  return (
    <div>
      <header>
        <Header/>
        <section className="w-50 mx-auto">
          <h1 className="display-5 fw-semibold primary mb-3 text-center pt-5 pb-3">Mes projets personnels</h1>
          <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-5" style={{ width: "200px" }}></div>
          <p className="fs-5 lh-lg text-center">Pour vraiment ancrer mes connaissances, je me suis rapidement mis à créer de mini-projets sur <strong>Github</strong>. Je vous en partage quelque-uns, plus bas, qui reprennent les différents langages que j'ai appris jusqu'à présent.</p>
          <p className="fs-5 lh-lg text-center">C'est le meilleur moyen pour moi de voir concrètement lequel de ces langages me plait le plus (et ceux sur lesquels je dois encore me perfectionner).</p>
          <p className="fs-5 lh-lg text-center">Ce sont mes "chantiers ouverts" qui me permettent de pratiquer et de progresser. Les projets "Tifosi database" (<strong>SQL</strong>) et "Liste de jeux" (<strong>Python</strong>) m'ont particulièrement intéressés ! Je serais d'ailleurs ravi d'avoir un <strong>retour constructif</strong> sur les améliorations à apporter pour chacun de mes dépôts.</p>
          <div className="d-flex justify-content-center">
            <a href="/competences" className="btn fs-5 p-2 m-4 text-light text-center fw-semibold" style={{ backgroundColor: "#4e71d2ff",  width: "300px" }}>Découvrir mes compétences</a>
          </div>
        </section>
      </header>

      <main>
        <section className="border-top mt-5">
          <div className="container mb-5 pb-5">
            <h2 class="display-6 fw-semibold primary mt-5 mb-4 text-center">Mes réalisations</h2>
            <div className="mx-auto mt-4 border-bottom border-primary border-5 mb-5" style={{ width: "100px" }}></div>

            <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
              <div>
                <div className="card">
                  <img src={liste_jeux} alt="Pile de jeux vidéos Nintento 64" className="img-fluid rounded-2 shadow-lg"/>
                  <div class="card-body text-center">
                    <h3 className="fw-semibold">Liste de jeux vidéos</h3>
                    <p class="fs-5 lh-lg">Créez votre liste de jeux avec 5 commandes différentes.</p>
                    <p>Python</p>
                    <a href="https://github.com/tarik-benabbou-mac-veigh/liste_jeux" target="_blank" className="btn fs-5 p-2 m-2 text-light text-center fw-semibold" style={{ backgroundColor: "#4e71d2ff",  width: "300px" }}>Afficher dépôt</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="card">
                  <img src={tifosi_database} alt="base de données colorée et virtuelle" className="img-fluid rounded-2 shadow-lg"/>
                  <div class="card-body text-center">
                    <h3 className="fw-semibold">Base de données Tifosi</h3>
                    <p class="fs-5 lh-lg">Découvrez la base de données d'un fast-food italien.</p>
                    <p>SQL (MySQL)</p>
                    <a href="https://github.com/tarik-benabbou-mac-veigh/tifosi_database" target="_blank" className="btn fs-5 p-2 m-2 text-light text-center fw-semibold" style={{ backgroundColor: "#4e71d2ff",  width: "300px" }}>Afficher dépôt</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="card">
                  <img src={game_boy} alt="game boy grise avec les jeux zelda et simpsons " className="img-fluid rounded-2 shadow-lg"/>
                  <div class="card-body text-center">
                    <h3 className="fw-semibold">Game Boy compteur</h3>
                    <p class="fs-5 lh-lg">Incrémentez et décrémentation façon années 80.</p>
                    <p>HTML, CSS (Bootstrap), JavaScript</p>
                    <a href="https://github.com/tarik-benabbou-mac-veigh/Game-Boy-Counter" target="_blank" className="btn fs-5 p-2 m-2 text-light text-center fw-semibold" style={{ backgroundColor: "#4e71d2ff",  width: "300px" }}>Afficher dépôt</a>
                  </div>
                </div>
              </div>
              <div>

                <div className="card">
                  <img src={btc_cours} alt="pièces virtuel BTC et ETH devant un écran pc" className="img-fluid rounded-2 shadow-lg"/>
                  <div class="card-body text-center">
                    <h3 className="fw-semibold">Cours des cryptos</h3>
                    <p class="fs-5 lh-lg">Affichez le cours du BTC, de l'ETH, et de l'ADA en direct (en €, $, £).</p>
                    <p>JavaScript</p>
                    <a href="https://github.com/tarik-benabbou-mac-veigh/BTC-live-exchange-rate" target="_blank" className="btn fs-5 p-2 m-2 text-light text-center fw-semibold" style={{ backgroundColor: "#4e71d2ff",  width: "300px" }}>Afficher dépôt</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="card">
                  <img src={gusto_restaurant_italien} alt="plat de lasagnes" className="img-fluid rounded-2 shadow-lg"/>
                  <div class="card-body text-center">
                    <h3 className="fw-semibold">Gusto e tradizione</h3>
                    <p class="fs-5 lh-lg">Découvrez la cuisine italienne gastronomique à travers un menu épuré.</p>
                    <p>HTML, CSS (Bootstrap)</p>
                    <a href="https://github.com/tarik-benabbou-mac-veigh/Restaurant-Guso-e-Tradizione" target="_blank" className="btn fs-5 p-2 m-2 text-light text-center fw-semibold" style={{ backgroundColor: "#4e71d2ff",  width: "300px" }}>Afficher dépôt</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="card">
                  <img src={photo_album} alt="album photos ouvert avec des photos à coller" className="img-fluid rounded-2 shadow-lg"/>
                  <div class="card-body text-center">
                    <h3 className="fw-semibold">Album photos</h3>
                    <p class="fs-5 lh-lg">Ajoutez et retirez des photos dans un album virtuel.</p>
                    <p>Javascript (Node.js)</p>
                    <a href="https://github.com/tarik-benabbou-mac-veigh/photo-album" target="_blank" className="btn fs-5 p-2 m-2 text-light text-center fw-semibold" style={{ backgroundColor: "#4e71d2ff",  width: "300px" }}>Afficher dépôt</a>
                  </div>
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