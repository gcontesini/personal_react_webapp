import React from "react";
import './App.css';
// import Recipe from "recipe-book.json"
// import PropTypes from "prop-types";
import styled from "@emotion/styled";

import ComponentRecipe from "./components/ComponentRecipe";
import ComponentSelectedItem from "./components/ComponentSelectedItem";
import ComponentButton from "./components/ComponentButton";
// import ComponentAddRecipe from "./components/ComponentAddRecipe";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @Emotion-CSS

const TitleCSS = styled.h1`
	text-align: center;
`;

const TwoColumnCSS = styled.div`
	gridTemplateColumns: 70% 30%;
	gridColumnGap: 80rem;
	margin-bottom: 0.5cm;
`;

const PageCSS = styled.div`
	width: 800px;
`;

const InputCSS = styled.input`
	width: 100%;
	font-size: x-large;
	padding: 0 30px;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Main-App

const App = () => {
	
	// React Hook
	// state is the current state of the hook
	const [state, setState] = React.useState("");

	const [recipe, setRecipe] = React.useState([]);

	const [selectedItem, setSelectedItem] = React.useState(null);

	// const [newRecipe, addRecipe] = React.useState(null);

	// const [recipeCounter, setRecipeUID] = React.useState(0);

	// const increaseRecipeUID = () => setRecipeUID( recipeCounter + 1 );
	// const decreaseRecipeUID = () => setRecipeUID( recipeCounter - 1 );
	// const resetRecipeUID = () => setRecipeUID( 0 );
		

	React.useEffect( ()=>{
		fetch("http://localhost:3001/recipe-book.json")
		.then( ( resp ) => resp.json() )
		.then( ( recipe_book ) => setRecipe( recipe_book ) );
	}, []	);

	return ( 
		<PageCSS>
			<TitleCSS> Recipe Book </TitleCSS>
			<TwoColumnCSS>
				<table width="100%">
					<thead>
						<tr>
							<th width="50%"> Search for Recipe</th>
							<th width="10%"></th>
							<th width="40%"> Add a Recipe </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<InputCSS
									value={state}
									onChange={( _state ) => setState( _state.target.value )}
								/>
							</td>
							<td> </td>
							<td>
								<ComponentButton
									// _buttonAction={ () => setNewRecipe(newRecipe) }
									_buttonAction={ () => console.log("newRecipe!") }
									_buttonText="Add Recipe"
								/>
								<ComponentButton
									// _buttonAction={ () => () => setSelectedItem() }
									_buttonAction={ () => console.log("cleared!") }
									_buttonText="Clear Recipe"
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</TwoColumnCSS>
			<div>
				{selectedItem && (
					<ComponentSelectedItem
						_recipe={ selectedItem }
						_setSelectedItem={ () => setSelectedItem() }
					/>
				)}
			</div>
			<TwoColumnCSS>
				<table width="100%" >
					<thead>
						<tr>
							<th> List of Recipes </th>
							<th> Type </th>
							<th> Selection </th>
						</tr>
					</thead>
					<tbody>
						{recipe
							.filter(( _recipe ) => _recipe.name
							.toLowerCase()
							.includes( state.toLowerCase() ))
							.map( _recipe => (
								<ComponentRecipe
									key={_recipe.id }
									_recipe={ _recipe }
									_selectRecipe={( _recipe ) => setSelectedItem( _recipe )}
									// _selectRecipe={() => console.log( "Recipe Selected!" )}
								/>
						))}
					</tbody>
				</table>
			</TwoColumnCSS>
		</PageCSS>
	);
};

export default App;