import Modal from "react-bootstrap/Modal";

const RstTooltip = (props) => {
	return (
		<Modal show={props.show} onHide={() => props.setShow(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Rossiter Stretching Technique</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Rossiter Stretching Technique (RST) is a unique, effective, and safe
				two-person stretching protocol that not only quickly alleviates pain but
				can prevent its re- occurrence. Rossiter Fascial Stretching helps
				clients who have restricted or limited movement. By using the three
				dimensions of weight, lock, and movement, RST works anywhere the
				technique is applied. This type of bodywork combines common connective
				tissue and soft-tissue modalities with the uniquely powerful addition of
				active client participation in the stretching techniques. RST helps
				increase flexibility, range of motion, mobility, and reduces incidents
				of injury and pain from repetitive movements. It helps optimize the
				potential of your connective tissue (fascia) and its ability to move
				more freely. RST is great for athletes and people who exercise or
				workout.
			</Modal.Body>
		</Modal>
	);
};

export default RstTooltip;
