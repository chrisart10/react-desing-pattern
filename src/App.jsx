/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/order */
// import UncontrolledModal from "./components/modal/UncontrolledModal";
// import NumberedList from "./components/NumberedList";
// import LargePersonListOfItem from "./components/people/LargePersonListItem";
// import SmallPersonListOfItem from "./components/people/SmallPersonListItem";
// import LargeProductsListItems from "./components/product/LargeProductsListItem";
// import SmallProductsListItems from "./components/product/SmallProductsListItems";
// import RegularList from "./components/RegularList";
// import { peoples, products } from "./data/data";
import CurrentUserLoader from "./components/CurrentUserLoader";
import DataSource from "./components/DataSource";
import ProductInfo from "./components/productInfo/ProductInfo";
import ResourceLoader from "./components/ResourceLoader";
import UserInfo from "./components/userInfo/UserInfo";
import UserLoader from "./components/UserLoader";
import axios from "axios";

async function getServerData(url) {
	const response = await axios.get(url);
	return response.data;
}

async function getLocalStorageData(key) {
	return localStorage.getItem(key);
}

function Text({ message }) {
	return <h1>{message}</h1>;
}

function App() {
	return (
		<>
			<CurrentUserLoader userId="123">
				<UserInfo />
			</CurrentUserLoader>
			<UserLoader userId="1234">
				<UserInfo />
			</UserLoader>
			<UserLoader userId="5678">
				<UserInfo />
			</UserLoader>
			<UserLoader userId="9854">
				<UserInfo />
			</UserLoader>
			<ResourceLoader resourceUrl="/users/1234" resourceName="user">
				<UserInfo />
			</ResourceLoader>
			<ResourceLoader resourceUrl="/products/1234" resourceName="product">
				<ProductInfo />
			</ResourceLoader>
			<DataSource
				getDataFunc={() => getServerData("/users/1234")}
				resourceName="user">
				<UserInfo />
			</DataSource>
			<DataSource
				getDataFunc={() => getLocalStorageData("message")}
				resourceName="message">
				<Text />
			</DataSource>
		</>
	);
}

export default App;
