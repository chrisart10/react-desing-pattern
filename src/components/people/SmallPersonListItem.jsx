/* eslint-disable react/jsx-one-expression-per-line */
function SmallPersonListOfItem({ person }) {
	const { name, age } = person;
	return (
		<p>
			Name:{name}, Age:{age}
		</p>
	);
}

export default SmallPersonListOfItem;
