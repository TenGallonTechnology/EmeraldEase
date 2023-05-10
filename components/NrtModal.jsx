import Modal from "react-bootstrap/Modal";

const NrtModal = (props) => {
	return (
		<Modal show={props.show} onHide={() => props.setShow(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Neural Reset Therapy</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Neural Reset Therapy or NRT is a rapid muscular pain relief by working
				directly with the nervous system. Muscles are controlled by the nervous
				system. By using reciprocal inhibition and proper application of NRT
				resets the nervous system to release a muscle from excessive tension.
				With the release, the knots, pain, and tightness are gone. Joint
				mobility and posture are improved.
			</Modal.Body>
		</Modal>
	);
};

export default NrtModal;
