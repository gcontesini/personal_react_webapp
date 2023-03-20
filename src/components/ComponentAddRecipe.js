import { useState } from 'react';
import Select from 'react-select';
import ComponentButton from './ComponentButton';
import validator from 'validator';
import styled from "@emotion/styled";

const InputCSS = styled.input`
	width: 100%;
`;

const LiCSS = styled.li`
	list-style-type: none;
`;

const typeOptions = [
	{ value: "Breakfast", label: "Breakfast" },
	{ value: "Brunch", label: "Brunch" },
	{ value: "Dessert", label: "Dessert" },
	{ value: "Lunch", label: "Lunch" },
	{ value: "Snack", label: "Snack" },
	{ value: "Supper", label: "Supper" },
]

export default function ComponentAddRecipe({
	_register,
	_field,
	_onSubmit,
	_handleSubmit
}) {

	// const [errors, setErrors] = useState('');

	// const validationData = () => {

	// 	let errors = {};

	// 	if (!name) {
	// 		errors.name = "Name is required";
	// 	}

	// 	if (!validator.isURL(link)) {
	// 		errors.link = "A valid link is required";
	// 	}

	// 	return errors;
	// };

	// const saveData = () => {
	// 	const errors = validationData();
	// 	if (Object.keys(errors).length) {
	// 		setErrors(errors);
	// 		return;
	// 	}

	// 	setErrors({});
	// 	console.log(newRecipe);
	// 	_onSave(newRecipe);
	// };

	return (
		<form onSubmit={ _handleSubmit(_onSubmit) }>
			<h4> New Recipe </h4>

			<LiCSS> Name: <br />
				<InputCSS { ..._register("name", { required: true, maxLength: 20 }) } />
				{/* <div style={ { color: "red" } }>{ errors.name }</div> */ }
			</LiCSS><br />

			<LiCSS> Type:  <br />
				<Select
					value={ typeOptions.find(({ value }) => value === _field.value) }
					onChange={ (event) => _field.onChange(event.value) }
					options={ typeOptions }
				/>
			</LiCSS> <br />
			{/* <div style={ { color: "red" } }>{ errors.type }</div> */ }


			<LiCSS> Link: <br />
				<InputCSS { ..._register("link", { required: true, maxLength: 20 }) } />
				{/* <div style={ { color: "red" } }>{ errors.name }</div> */ }
			</LiCSS><br />

			<LiCSS> Cook Time: <br />
				<InputCSS { ..._register("cook_time", { required: true, maxLength: 20 }) } />
				{/* <div style={ { color: "red" } }>{ errors.name }</div> */ }
			</LiCSS><br />

			<LiCSS> Servings: <br />
				<InputCSS { ..._register("servings", { required: true, maxLength: 20 }) } />
				{/* <div style={ { color: "red" } }>{ errors.name }</div> */ }
			</LiCSS><br />

			<LiCSS> Ingredients: <br />
				<InputCSS { ..._register("ingredients", { required: true, maxLength: 20 }) } />
				{/* <div style={ { color: "red" } }>{ errors.name }</div> */ }
			</LiCSS><br />

			<LiCSS> Procedures: <br />
				<InputCSS { ..._register("procedures", { required: true, maxLength: 20 }) } />
				{/* <div style={ { color: "red" } }>{ errors.name }</div> */ }
			</LiCSS><br />

			<ComponentButton
				_buttonText="Save Recipe"
				_buttonType="submit"
			/>
		</form >
	)
};
