import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../assets/css/Modal.css'

export default function Modal_html({show, handleCloseHtml}) {
  return (

    <Modal show={show} onHide={handleCloseHtml} centered contentClassName="custom-modal">
        <Modal.Header closeButton className="border-0">
            <Modal.Title className="w-100 text-center fw-bold fs-4">
            HTML : architecte de contenu
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body-custom text-white text-center px-4 py-5 rounded-bottom">
            <p className="fs-5 lh-lg m-0 text-center">
            C'est grâce au HTML que j'ai eu envie de me lancer dans le développement web. 
            J'ai pris plaisir à structurer des pages claires et accessibles grâce à 
            l'<strong>indentation</strong> et l'<strong>imbrication</strong> des balises 
            en cherchant toujours à améliorer la lisibilité et la cohérence de mon code.
            </p>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center border-0">
            <Button href='https://github.com/tarik-benabbou-mac-veigh/Restaurant-Guso-e-Tradizione' target='_blank' className="btn-gradient fw-semibold px-4 py-2 rounded-pill shadow-sm text-white">Exemple de projet</Button>
        </Modal.Footer>
    </Modal>
  )
}