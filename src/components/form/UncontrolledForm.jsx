import { createRef } from "react";

function UncontrolledForm() {
	const nameInput = createRef();
	const ageInput = createRef();
	const hairColorInput = createRef();
	const handleSubmit = (e) => {
		console.log(nameInput.current.value);
		console.log(ageInput.current.value);
		console.log(hairColorInput.current.value);
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="name" placeholder="Name" ref={nameInput} />
			<input type="number" name="Age" placeholder="Age" ref={ageInput} />
			<input
				type="text"
				name="hairColor"
				placeholder="Hair color"
				ref={hairColorInput}
			/>
			<input type="submit" value="submit" />
		</form>
	);
}

export default UncontrolledForm;
