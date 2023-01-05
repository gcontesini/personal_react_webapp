import styled from "@emotion/styled";

const InputCSS = styled.input`
	width: 100%;
	font-size: x-large;
	padding: 0 20px;
`;

const LiCSS = styled.li`
	list-style-type: none;
`;

export default function ComponentAddRecipe ({ _newRecipe }) {
	
	return(
				
		<ul>
			<h3>New Recipe</h3>
			<LiCSS> Name:<br/>
				<InputCSS
					// value={_newRecipe.newRecipeName}
					// onChange={( newRecipeName ) => setState( newRecipeName.target.value )}
				/>
			</LiCSS> <br/>
			<LiCSS> Type: <br/>
				{/* <label for="type-select"></label> */}
				<select name="select type" id="type-select">
						{/* <option _newRecipe.type="">--Please select a type--</option>
						<option _newRecipe.type="Breakfast">Breakfast</option>
						<option _newRecipe.type="Brunch">Brunch</option>
						<option _newRecipe.type="Dessert">Dessert</option>
						<option _newRecipe.type="Lunch">Lunch</option>
						<option _newRecipe.type="Snack">Snack</option>
						<option _newRecipe.type="Supper">Supper</option> */}
				</select>
			</LiCSS> <br/>
			<LiCSS> Summary: <br/>
				<ul>
					<LiCSS>Prep time:
							<InputCSS
							// value={_newRecipe.prepTime}
							// onChange={( _newRecipe.prepTime ) => setState( _newRecipe.prepTime.target.value )}
						/>
					</LiCSS>
					<LiCSS>Cook time:
						<InputCSS
							// value={_newRecipe.cookTime}
							// onChange={( newRecipe.cookTime ) => setState( _newRecipe.cookTime.target.value )}
						/>
					</LiCSS>
					<LiCSS>Additional time:
						<InputCSS
							// value={_newRecipe.AadditionalTime}
							// onChange={( newRecipeAdditionalTime ) => setState( _newRecipe.additionalTime.target.value )}
						/>
					</LiCSS>
					<LiCSS>Total time:
						<InputCSS
							// value={_newRecipe.TotalTime}
							// onChange={( _newRecipe.TotalTime ) => setState( _newRecipe.totalTime.target.value )}
						/>
					</LiCSS>
					<LiCSS>Servings:
						<InputCSS
							// value={newRecipeServings}
							// onChange={( _newRecipe.Servings ) => setState( _newRecipe.Servings.target.value )}
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
					// value={newRecipeLink}
					// onChange={( newRecipe ) => setState( newRecipe.target.value )}
				/>
			</LiCSS> <br/>
		</ul>
	)
};