import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../assets/css/Modal.css'

export default function Modal_js({show, handleCloseJs}) {
  return (

    <Modal show={show} onHide={handleCloseJs} centered contentClassName="custom-modal">
        <Modal.Header closeButton className="border-0">
            <Modal.Title className="w-100 text-center fw-bold fs-4">
            JavaScript : cœur de l'intéractivité
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body-custom text-white text-center px-4 py-5 rounded-bottom">
            <p className="fs-5 lh-lg m-0 text-center">Le JavaScript m’a permis de donner vie à mes projets en ajoutant de l’interactivité. Même si ce langage représente parfois un défi, je prends le temps de comprendre chaque notion en profondeur. Créer une <strong>API Rest</strong> à travers le <strong>modèle MVC</strong> a été le plus intéressant jusqu'à présent.</p>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center border-0">
            <Button href='https://github.com/tarik-benabbou-mac-veigh/Game-Boy-Counter' target='_blank' className="btn-gradient fw-semibold px-4 py-2 rounded-pill shadow-sm text-white">Exemple de projet</Button>
        </Modal.Footer>
    </Modal>
  )
}