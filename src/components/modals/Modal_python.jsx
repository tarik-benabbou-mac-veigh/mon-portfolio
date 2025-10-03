import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../assets/css/Modal.css'

export default function Modal_python({show, handleClosePy}) {
  return (

    <Modal show={show} onHide={handleClosePy} centered contentClassName="custom-modal">
        <Modal.Header closeButton className="border-0">
            <Modal.Title className="w-100 text-center fw-bold fs-4">
            Python : lisibilité rêvée
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body-custom text-white text-center px-4 py-5 rounded-bottom">
            <p className="fs-5 lh-lg m-0 text-center">
            Python est le langage qui me plait le plus par sa clareté et son côté "fortement typé" (à l'inverse du JS). J’apprécie la clarté de sa syntaxe, qui me permet de me concentrer sur la résolution de problèmes. Je compte bien <strong>me spécialiser dans la data</strong> en me formant au framework <strong>Pandas</strong>.
            </p>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center border-0">
            <Button href='https://github.com/tarik-benabbou-mac-veigh/liste_jeux' target='_blank' className="btn-gradient fw-semibold px-4 py-2 rounded-pill shadow-sm text-white">Exemple de projet</Button>
        </Modal.Footer>
    </Modal>
  )
};