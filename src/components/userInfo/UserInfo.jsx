/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
function UserInfo({ user }) {
	const { name, age, hairColor, hobbies } = user || {};
	return user ? (
		<>
			<h3>{name}</h3>
			<p>Age: {age}</p>
			<p>Hair Color: {hairColor}</p>
			<ul>
				{hobbies.map((hobby, index) => (
					<li key={hobby + toString(index)}>{hobby}</li>
				))}
			</ul>
		</>
	) : (
		<p>Loading...</p>
	);
}

export default UserInfo;
