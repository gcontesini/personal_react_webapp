import styled from "@emotion/styled";

const InputCSS = styled.input`
	width: 100%;
`;

const LiCSS = styled.li`
	list-style-type: none;
`;

export default function ComponentAddRecipe({
	_newRecipe,
	_setNewRecipe,
}) {

	const fillNewRecipeField = (
		newValue
	) => {

		let newRecipe_ = {};

		newRecipe_ = {
			name: newValue.target.recipeName.value,
			type: newValue.target.recipeType.value,
			// link:newValue.target.link.value ,
			// summary:{
			// 	prep_time:newValue.target.value ,
			// 	cook_time:newValue.target.value ,
			// 	additional_time:newValue.target.value ,
			// 	total_time:newValue.target.value ,
			// 	servings:newValue.target.value ,
			// },
			// ingredients:newValue.target.value ,
			// procedures:newValue.target.value ,
		};

		_setNewRecipe(_newRecipe => ({
			..._newRecipe,
			...newRecipe_
		}));
	}

	return (

		<ul>
			<h3> New Recipe </h3>
			<LiCSS> Name: <br />
				<InputCSS
					type="text"
					name="recipeName"
					onChange={ (newValue) => fillNewRecipeField(newValue) }
				/>
			</LiCSS><br />
			<LiCSS> Type:  <br />
				{/* <label for="type-select" ></label> */ }
				<select
					id="type-select"
					name="recipeType"
					onChange={ (newValues) => fillNewRecipeField(newValues) }
				>
					<option value="">--Please select a type--</option>
					<option value="Breakfast">Breakfast</option>
					<option value="Brunch">Brunch</option>
					<option value="Dessert">Dessert</option>
					<option value="Lunch">Lunch</option>
					<option value="Snack">Snack</option>
					<option value="Supper">Supper</option>
				</select>
			</LiCSS> <br />
			{ console.log(_newRecipe.name) }
			{ console.log(_newRecipe.type) }
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
		</ul>
	)
};