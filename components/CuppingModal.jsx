import Modal from "react-bootstrap/Modal";

const CuppingModal = (props) => {
	return (
		<Modal show={props.show} onHide={() => props.setShow(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Dry Cupping Therapy</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Dry Cupping therapy applies pressure on the body surface using glass,
				plastic, or silicone cups. Cupping is a deeper tissue modality that
				creates a vacuum or suction which stimulates and increases blood flow,
				which can help relieve joint and muscle pain and tension. It also
				loosens soft connective tissue and adhesions, moves stagnation &amp;
				reduces inflammation, accelerates recovery, increases the function of
				the lymphatic and circulatory systems and promotes overall relaxation
				and well-being.
				*consent waiver required before session
			</Modal.Body>
		</Modal>
	);
};

export default CuppingModal;
