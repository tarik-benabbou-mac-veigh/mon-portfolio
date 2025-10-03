import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../assets/css/Modal.css'

export default function Modal_css({show, handleCloseCss}) {
  return (
    <Modal show={show} onHide={handleCloseCss} centered contentClassName="custom-modal">
        <Modal.Header closeButton className="border-0">
            <Modal.Title className="w-100 text-center fw-bold fs-4">
            CSS : maître du design
            </Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body-custom text-white text-center px-4 py-5 rounded-bottom">
            <p className="fs-5 lh-lg m-0">
            Ce langage de style prend tout son sens une fois avoir acquis de bonnes bases HTML. Le CSS est pour moi le plus grand challenge en développement web avec le <strong> responsive</strong>. Je me suis formé au puissant framework <strong>Bootstrap</strong>, et compte désormais apprendre <strong>Tailwind</strong>.</p>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center border-0">
            <Button 
            href='https://github.com/tarik-benabbou-mac-veigh/Restaurant-Guso-e-Tradizione' 
            target='_blank' 
            className="btn-gradient fw-semibold px-4 py-2 rounded-pill shadow-sm text-white">Exemple de projet</Button>
        </Modal.Footer>
    </Modal>
  )
};