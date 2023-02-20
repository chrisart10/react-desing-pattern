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

function UserLoader({ userId, children }) {
	const [user, setUser] = useState(null);
	useEffect(() => {
		(async () => {
			const response = await axios.get(`/users/${userId}`);
			setUser(response.data);
		})();
	}, [userId]);
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

export default UserLoader;
