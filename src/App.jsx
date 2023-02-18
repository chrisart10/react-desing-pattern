import NumberedList from "./components/NumberedList";
import LargePersonListOfItem from "./components/people/LargePersonListItem";
import SmallPersonListOfItem from "./components/people/SmallPersonListItem";
import LargeProductsListItems from "./components/product/LargeProductsListItem";
import SmallProductsListItems from "./components/product/SmallProductsListItems";
import RegularList from "./components/RegularList";
import { people, products } from "./data/people";

function App() {
	return (
		<div>
			<RegularList
				items={people}
				resourceName="person"
				itemComponent={SmallPersonListOfItem}
			/>
			<RegularList
				items={people}
				resourceName="person"
				itemComponent={LargePersonListOfItem}
			/>
			<NumberedList
				items={people}
				resourceName="person"
				itemComponent={SmallPersonListOfItem}
			/>
			<NumberedList
				items={people}
				resourceName="person"
				itemComponent={LargePersonListOfItem}
			/>
			<RegularList
				items={products}
				resourceName="product"
				itemComponent={SmallProductsListItems}
			/>
			<RegularList
				items={products}
				resourceName="product"
				itemComponent={LargeProductsListItems}
			/>
			<NumberedList
				items={products}
				resourceName="product"
				itemComponent={SmallProductsListItems}
			/>
			<NumberedList
				items={products}
				resourceName="product"
				itemComponent={LargeProductsListItems}
			/>
		</div>
	);
}

export default App;
