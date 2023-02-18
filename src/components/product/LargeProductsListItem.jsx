/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-one-expression-per-line */
function LargeProductsListItems({ product }) {
	const { name, price, Description, rating } = product;
	return (
		<>
			<h3>{name}</h3>
			<p>{price}</p>
			<h3>Description</h3>
			<p>{Description}</p>
			<p>Average rating: {rating}</p>
		</>
	);
}

export default LargeProductsListItems;
