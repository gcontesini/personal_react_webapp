import styled from "@emotion/styled";
import React from 'react';
import Select from 'react-select';
import validator from 'validator';
import ComponentButton from './ComponentButton';

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

const ComponentAddRecipe = ({
	_recipeUID,
	_onSave,
	_newRecipe = {}
}) => {

	const [newRecipe, setNewRecipe] = React.useState({ id: _recipeUID });
	const [errors, setErrors] = React.useState('');
	const {
		name,
		type,
		link,
		// summary{
		// 	prep_time,
		// 	cook_time,
		// 	additional_time,
		// 	total_time,
		// 	servings,
		// },
		// ingredients,
		// procedures,
	} = newRecipe;


	const handleChange = (event) => {
		const { name, value } = event.target
		// setNewRecipe((prevRecipeBook) => ({ ...prevRecipeBook, id: _recipeUID }));
		setNewRecipe((prevRecipeBook) => ({ ...prevRecipeBook, [name]: value }));
	};

	const handleSelectChange = (option) => {
		const { name, value } = option.target
		setNewRecipe((prevRecipeBook) => ({ ...prevRecipeBook, [name]: value }));
	};

	const validationData = () => {

		let errors = {};

		if (!name) {
			errors.name = "Name is required";
		}

		if (!validator.isURL(link)) {
			errors.link = "A valid link is required";
		}

		return errors;
	};

	const saveData = () => {
		const errors = validationData();
		if (Object.keys(errors).length) {
			setErrors(errors);
			return;
		}

		setErrors({});
		console.log(newRecipe);
		_onSave(newRecipe);
	};

	return (
		<ul>
			<h4> New Recipe </h4>
			<LiCSS> Name: <br />
				<InputCSS
					id="name"
					type="text"
					name="recipeName"
					value={ name }
					onChange={ handleChange }
				/>
			</LiCSS><br />
			<div style={ { color: "red" } }>{ errors.name }</div>
			<LiCSS> Type:  <br />
				<Select
					id="type-select"
					name="recipeType"
					value={ typeOptions.find(({ value }) => value === type) }
					onChange={ handleSelectChange }
					options={ typeOptions }
				/>
			</LiCSS> <br />
			<div style={ { color: "red" } }>{ errors.type }</div>
			<LiCSS> Link: <br />
				<InputCSS
					id="link"
					type="url"
					name="recipelink"
					value={ link }
					onChange={ handleChange }
				/>
			</LiCSS><br />
			<div style={ { color: "red" } }>{ errors.link }</div>
			{/* <LiCSS> Summary: <br/>
				<ul>
					<LiCSS>Prep time:
							<InputCSS
							value={_newRecipe.prepTime}
							onChange={( _newRecipe.prepTime ) => setState( _newRecipe.prepTime.target.value )}
						/>
					</LiCSS>
					<LiCSS>Cook time:
						<InputCSS
							value={_newRecipe.cookTime}
							onChange={( newRecipe.cookTime ) => setState( _newRecipe.cookTime.target.value )}
						/>
					</LiCSS>
					<LiCSS>Additional time:
						<InputCSS
							value={_newRecipe.AadditionalTime}
							onChange={( newRecipeAdditionalTime ) => setState( _newRecipe.additionalTime.target.value )}
						/>
					</LiCSS>
					<LiCSS>Total time:
						<InputCSS
							value={_newRecipe.TotalTime}
							onChange={( _newRecipe.TotalTime ) => setState( _newRecipe.totalTime.target.value )}
						/>
					</LiCSS>
					<LiCSS>Servings:
						<InputCSS
							value={newRecipeServings}
							onChange={( _newRecipe.Servings ) => setState( _newRecipe.Servings.target.value )}
						/>
					</LiCSS>
				</ul>
			</LiCSS> <br/>
			<LiCSS> Ingredients: <br/>
				<textarea
					value={_newRecipe.Ingredients}
					id="ingredients"
					name="ingredients"
					rows="20"
					cols="80"
				>
					- water
				</textarea>
			</LiCSS> <br/>
			<LiCSS> Procedure: <br/>
				<textarea
					value={_newRecipe.Procedure}
					id="procedure"
					name="procedure"
					rows="20"
					cols="80"
				>
					- Mix the ingredients,
				</textarea>
			</LiCSS> <br/>
			<LiCSS> Link: <br/>
				<InputCSS
					value={newRecipeLink}
					onChange={( newRecipe ) => setState( newRecipe.target.value )}
				/>
			</LiCSS> */}
			<ComponentButton
				_buttonAction={ () => _onSave() }
				_buttonText="Save Recipe"
			/>
		</ul >
	)
};

export default ComponentAddRecipe;