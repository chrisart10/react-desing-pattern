/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect } from "react";

function ControlledForm() {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [hairColor, setHairColor] = useState("");
	const [nameInputError, setNameInputError] = useState("");

	const handleSubmit = (e) => {
		if (name.length < 2) {
			setNameInputError("Name must be two or more characters");
		} else {
			setNameInputError("");
		}
		console.log(name);
		console.log(age);
		console.log(hairColor);
		e.preventDefault();
	};
	useEffect(() => {
		console.log(name);
		console.log(age);
		console.log(hairColor);
	}, [name, age, hairColor]);

	return (
		<form onSubmit={handleSubmit}>
			{nameInputError ? <p>{nameInputError}</p> : null}
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="number"
				name="Age"
				placeholder="Age"
				value={age}
				onChange={(e) => setAge(Number(e.target.value))}
			/>
			<input
				type="text"
				name="hairColor"
				placeholder="Hair color"
				value={hairColor}
				onChange={(e) => setHairColor(e.target.value)}
			/>
			<button type="submit">Submit</button>
		</form>
	);
}

export default ControlledForm;
