function NumberedList({ items, resourceName, itemComponent: ItemComponent }) {
	return (
		<>
			{items.map((item, index) => (
				<>
					<p>{index + 1}</p>
					<ItemComponent
						key={item + toString(index)}
						{...{ [resourceName]: item }}
					/>
				</>
			))}
		</>
	);
}

export default NumberedList;
