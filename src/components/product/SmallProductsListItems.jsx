/* eslint-disable react/jsx-one-expression-per-line */
function SmallProductsListItems({ product }) {
	const { name, price } = product;
	return (
		<h3>
			{name} - {price}
		</h3>
	);
}

export default SmallProductsListItems;
