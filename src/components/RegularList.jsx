function RegularList({ items, resourceName, itemComponent: ItemComponent }) {
	return (
		<>
			{items.map((item, index) => (
				<ItemComponent
					key={item + toString(index)}
					{...{ [resourceName]: item }}
				/>
			))}
		</>
	);
}

export default RegularList;
