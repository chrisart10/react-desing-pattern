import styled from "styled-components";

const Pane = styled.div`
	background-color: ${(props) => props.color};
	flex-grow: ${(props) => props.weight};
`;

const SplitScreenContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	width: 100%;
`;

function SplitScreen({
	children,
	leftWeight = 1,
	rightWeight = 1,
	colorLeft = "white",
	colorRight = "white",
}) {
	const [left, right] = children;
	return (
		<SplitScreenContainer>
			<Pane weight={leftWeight} color={colorLeft}>
				{left}
			</Pane>
			<Pane weight={rightWeight} color={colorRight}>
				{right}
			</Pane>
		</SplitScreenContainer>
	);
}

export default SplitScreen;
