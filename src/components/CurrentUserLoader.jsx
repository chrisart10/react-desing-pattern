/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import {
	useState,
	useEffect,
	isValidElement,
	cloneElement,
	Children,
} from "react";

function CurrentUserLoader({ children }) {
	const [user, setUser] = useState(null);
	useEffect(() => {
		(async () => {
			const response = await axios.get("/current-user");
			setUser(response.data);
		})();
	}, []);
	return (
		<>
			{Children.map(children, (child) => {
				if (isValidElement(child)) {
					return cloneElement(child, { user });
				}
			})}
		</>
	);
}

export default CurrentUserLoader;
