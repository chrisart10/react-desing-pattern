import SplitScreen from "./components/splitScreen";

function Left() {
	return <h1>Left</h1>;
}
function Right() {
	return <h1>Right</h1>;
}

function App() {
	return (
		<div>
			<SplitScreen colorLeft="blue" colorRight="yellow">
				<Left />
				<Right />
			</SplitScreen>
		</div>
	);
}

export default App;
