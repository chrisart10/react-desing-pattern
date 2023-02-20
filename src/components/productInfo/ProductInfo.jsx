/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-one-expression-per-line */
function ProductInfo({ product }) {
	const { name, price, description, rating } = product || {};
	return product ? (
		<>
			<h3>{name}</h3>
			<p>{price}</p>
			<h3>Description</h3>
			<p>{description}</p>
			<p>Average rating: {rating}</p>
		</>
	) : (
		<p>Loading...</p>
	);
}

export default ProductInfo;
