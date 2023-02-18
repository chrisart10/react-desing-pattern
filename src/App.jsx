import UncontrolledModal from "./components/modal/UncontrolledModal";
// import NumberedList from "./components/NumberedList";
import LargePersonListOfItem from "./components/people/LargePersonListItem";
// import SmallPersonListOfItem from "./components/people/SmallPersonListItem";
import LargeProductsListItems from "./components/product/LargeProductsListItem";
// import SmallProductsListItems from "./components/product/SmallProductsListItems";
import RegularList from "./components/RegularList";
import { peoples, products } from "./data/data";

function App() {
	return (
		<div>
			<p>background</p>
			<UncontrolledModal>
				<RegularList
					items={peoples}
					resourceName="person"
					itemComponent={LargePersonListOfItem}
				/>
				<RegularList
					items={products}
					resourceName="product"
					itemComponent={LargeProductsListItems}
				/>
			</UncontrolledModal>
		</div>
	);
}

export default App;
