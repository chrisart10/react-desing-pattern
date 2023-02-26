import React from "react";
import { ModalBackground, ModalBody } from "./ModalStyled";

function ControlledModal({ isOpened, setIsOpened, children }) {
	return isOpened ? (
		<ModalBackground onClick={() => setIsOpened(false)}>
			<ModalBody onClick={(e) => e.stopPropagation()}>
				<button type="button" onClick={() => setIsOpened(false)}>
					Close Modal
				</button>
				{children}
			</ModalBody>
		</ModalBackground>
	) : null;
}

export default ControlledModal;
