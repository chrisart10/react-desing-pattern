import React from "react";
import { ModalBackground, ModalBody } from "./Modalstyled";

function UncontrolledModal({ children }) {
	const [isOpened, setIsOpened] = React.useState(false);
	return isOpened ? (
		<ModalBackground onClick={() => setIsOpened(false)}>
			<ModalBody onClick={(e) => e.stopPropagation()}>
				<button type="button" onClick={() => setIsOpened(false)}>
					Close Modal
				</button>
				{children}
			</ModalBody>
		</ModalBackground>
	) : (
		<button type="button" onClick={() => setIsOpened(true)}>
			Open Modal
		</button>
	);
}

export default UncontrolledModal;
