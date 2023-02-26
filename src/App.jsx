/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/order */
// import UncontrolledModal from "./components/modal/UncontrolledModal";
// import NumberedList from "./components/NumberedList";
// import LargePersonListOfItem from "./components/people/LargePersonListItem";
// import SmallPersonListOfItem from "./components/people/SmallPersonListItem";
// import LargeProductsListItems from "./components/product/LargeProductsListItem";
// import SmallProductsListItems from "./components/product/SmallProductsListItems";
// import RegularList from "./components/RegularList";
// import { peoples, products } from "./data/data";
// import CurrentUserLoader from "./components/CurrentUserLoader";
// import DataSource from "./components/DataSource";
// import ProductInfo from "./components/productInfo/ProductInfo";
// import ResourceLoader from "./components/ResourceLoader";
// import UserInfo from "./components/userInfo/UserInfo";
// import UserLoader from "./components/UserLoader";
// import axios from "axios";
import ControlledForm from "./components/form/ControlledForm";
import ControlledModal from "./components/modal/ControlledModal";
import UncontrolledForm from "./components/form/UncontrolledForm";
import { useState } from "react";
import UncontrolledOnBoardingFlow from "./components/onBoarding/UncontrolledOnBoardingFlow";
import ControlledOnBoardingFlow from "./components/onBoarding/ControlledOnBoardingFlow";

function StepOne({ goToNext }) {
	return (
		<>
			<h1>step 1</h1>
			<button
				type="button"
				onClick={() => goToNext({ name: "John Doe" })}>
				Next
			</button>
		</>
	);
}
function StepTwo({ goToNext }) {
	return (
		<>
			<h1>step 2</h1>
			<button type="button" onClick={() => goToNext({ age: "23" })}>
				Next
			</button>
		</>
	);
}
function StepThree({ goToNext }) {
	return (
		<>
			<h1>step 3</h1>
			<p>Congratulations, you have a discount!!</p>
			<button type="button" onClick={() => goToNext({})}>
				Next
			</button>
		</>
	);
}
function StepFour({ goToNext }) {
	return (
		<>
			<h1>step 4</h1>
			<button
				type="button"
				onClick={() => goToNext({ hairColor: "Brown" })}>
				Next
			</button>
		</>
	);
}

function App() {
	// controlled modal
	const [isOpened, setIsOpened] = useState(false);
	const handlerModal = (e) => setIsOpened(!isOpened);

	// controled onBoarding Flow
	const [onBoardingData, setOnboardingData] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const goToNext = (stepData) => {
		setCurrentIndex(currentIndex + 1);
		setOnboardingData({
			...onBoardingData,
			...stepData,
		});
	};

	return (
		<>
			<ControlledModal isOpened={isOpened} setIsOpened={setIsOpened}>
				<UncontrolledForm />
				<ControlledForm />
			</ControlledModal>
			<button type="button" onClick={handlerModal}>
				Open Modal
			</button>
			<UncontrolledOnBoardingFlow
				onFinish={(data) => console.log("submited data", data)}>
				<StepOne />
				<StepTwo />
				<StepThree />
			</UncontrolledOnBoardingFlow>
			<ControlledOnBoardingFlow
				currentIndex={currentIndex}
				goToNext={goToNext}>
				<StepOne />
				<StepTwo />
				{onBoardingData.age >= 22 ? <StepThree /> : null}
				<StepFour />
			</ControlledOnBoardingFlow>
		</>
	);
}

export default App;
