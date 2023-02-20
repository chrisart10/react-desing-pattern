/* eslint-disable consistent-return */
import {
	useState,
	useEffect,
	isValidElement,
	cloneElement,
	Children,
} from "react";

function DataSource({ getDataFunc = () => {}, resourceName, children }) {
	const [state, setState] = useState(null);
	useEffect(() => {
		(async () => {
			const data = await getDataFunc();
			setState(data);
		})();
	}, [getDataFunc]);
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

export default DataSource;
