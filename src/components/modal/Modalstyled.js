import styled from "styled-components";

export const ModalBackground = styled.div`
	display: flex;
	position: fixed;
	justify-content: center;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBody = styled.div`
	background-color: #ffffff;
	height: calc(100vh - 40px);
	margin: 20px 40px;
	border-radius: 15px;
	flex-basis: 700px;
	flex-grow: 1;
	max-width: 900px;
	min-width: 700px;
	overflow-y: auto;
`;
