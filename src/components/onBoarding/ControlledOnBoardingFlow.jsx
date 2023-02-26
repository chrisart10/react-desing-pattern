/* eslint-disable object-curly-newline */
import { Children, isValidElement, cloneElement } from "react";

function ControlledOnBoardingFlow({ children, currentIndex, goToNext }) {
	const currenChild = Children.toArray(children)[currentIndex];

	if (isValidElement(currenChild)) {
		return cloneElement(currenChild, { goToNext });
	}
	return currenChild;
}

export default ControlledOnBoardingFlow;
