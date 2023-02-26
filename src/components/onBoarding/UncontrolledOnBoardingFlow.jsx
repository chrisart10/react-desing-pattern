/* eslint-disable object-curly-newline */
import { useState, Children, isValidElement, cloneElement } from "react";

function UncontrolledOnBoardingFlow({ children, onFinish }) {
	const [onBoardingData, setOnboardingData] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const currenChild = Children.toArray(children)[currentIndex];
	const goToNext = (stepData) => {
		const updatedData = {
			...onBoardingData,
			...stepData,
		};
		console.log("updatedData", updatedData);
		if (currentIndex < children.length - 1) {
			setCurrentIndex(currentIndex + 1);
		} else {
			onFinish(updatedData);
		}
		setOnboardingData(updatedData);
	};
	if (isValidElement(currenChild)) {
		return cloneElement(currenChild, { goToNext });
	}
}

export default UncontrolledOnBoardingFlow;
