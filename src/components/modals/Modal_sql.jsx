import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../assets/css/Modal.css'

export default function Modal_sql({show, handleCloseSql}) {
  return (

    <Modal show={show} onHide={handleCloseSql} centered contentClassName="custom-modal">
        <Modal.Header closeButton className="border-0">
            <Modal.Title className="w-100 text-center fw-bold fs-4">
            SQL : requêtes intuitives
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body-custom text-white text-center px-4 py-5 rounded-bottom">
            <p className="fs-5 lh-lg m-0 text-center">Avec SQL, j’ai appris à organiser et manipuler les données de manière efficace sur <strong>MySQL</strong> et <strong>PostgreSQL</strong>. J’aime l'intuitivité et la logique de ce langage de requête. Je compte me perfectionner et maîtriser les <strong>index</strong> et les <strong>procédures structurées</strong> pour améliorer les performances de mes requêtes à l'avenir.</p>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center border-0">
            <Button href='https://github.com/tarik-benabbou-mac-veigh/tifosi_database' target='_blank' className="btn-gradient fw-semibold px-4 py-2 rounded-pill shadow-sm text-white">Exemple de projet</Button>
        </Modal.Footer>
    </Modal>
  )
};