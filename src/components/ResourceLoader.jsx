/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import {
	useState,
	useEffect,
	isValidElement,
	cloneElement,
	Children,
} from "react";

function ResourceLoader({ resourceUrl, resourceName, children }) {
	const [state, setState] = useState(null);
	useEffect(() => {
		(async () => {
			const response = await axios.get(resourceUrl);
			setState(response.data);
		})();
	}, [resourceUrl]);
	return (
		<>
			{Children.map(children, (child) => {
				if (isValidElement(child)) {
					return cloneElement(child, { [resourceName]: state });
				}
			})}
		</>
	);
}

export default ResourceLoader;
