import React from "react";
import './App.css';
// import Recipe from "recipe-book.json"
// import PropTypes from "prop-types";
import styled from "@emotion/styled";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// Export these components to external files

const ComponentIngredients = ({ _ingredients }) => (

	<td>{ _ingredients.map(( _ingredients_ ) => 
		<li key={ _ingredients_.toString() }> { _ingredients_ } </li>
		)}
	</td>
);

const ComponentSummary = ({_summary}) => (

	<td>
		<li>Prep time:{_summary.cook_time} min</li>
		<li>Cook time:{_summary.prep_time} min</li>
		<li>Additional time:{_summary.additional_time} min</li>
		<li>Total time:{_summary.total_time} min</li>
		<li>Servings:{_summary.servings}</li>
	</td>
);

const ComponentProcedure = ({ _procedure }) => (

	<td> { _procedure.map(( _procedure ) => 
		<li key={ _procedure.toString() }> { _procedure } </li>
	)}
	</td>
);

const ComponentRecipe = ({ _recipe, _selectRecipe }) => (

	<tr>
		<td>{ _recipe.name }</td>
		<td>{ _recipe.type }</td>
		<td>
			<a href={ _recipe.link } target="blank"> Full Recipe </a>
		</td>
		<td >
			<button onClick={() => _selectRecipe( _recipe )}> Select </button>
		</td>
	</tr>
	
);

const ComponentButton = ({ _buttonAction, _buttonText }) => (
	<button onClick={ _buttonAction }>
		{_buttonText}
	</button>

);

const ComponentAddRecipe = ({ _recipe, _setSelectedItem }) => (
	<div>
		<h3>
			<ComponentButton _buttonAction={() => _setSelectedItem(null)} _buttonText="Clear Selection" />
		</h3>
		<h3> Selected Item: {_recipe.name} </h3>
		<table width="200%" >
			<thead>
				<tr>
					<th width="20%"> Summary </th>
					<th width="35%"> Ingredients </th>
					<th width="200%"> Procedure </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<ComponentSummary _summary={ _recipe.summary }/>
					<ComponentIngredients key={ _recipe.ingredients.toString() } _ingredients={ _recipe.ingredients }/>
					<ComponentProcedure _procedure={ _recipe.procedure }/>
				</tr>
			</tbody>
		</table>
	</div>
);

const ComponentSelectedItem = ({ _recipe, _setSelectedItem }) =>(
	<div>
		<h3>
			<ComponentButton _buttonAction={() => _setSelectedItem(null)} _buttonText="Clear Selection" />
		</h3>
		<h3> Selected Item: { _recipe.name } </h3>
		<table width="200%" >
			<thead>
				<tr>
					<th width="20%"> Summary </th>
					<th width="35%"> Ingredients </th>
					<th width="200%"> Procedure </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<ComponentSummary _summary={ _recipe.summary }/>
					<ComponentIngredients key={ _recipe.ingredients.toString() } _ingredients={ _recipe.ingredients }/>
					<ComponentProcedure _procedure={ _recipe.procedure }/>
				</tr>
			</tbody>
		</table>
	</div>
);

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

function App() {
	
	// React Hook
	// state is the current state of the hook
	const [state, setState] = React.useState("");

	const [recipe, setRecipe] = React.useState([]);

	const [selectedItem, setSelectedItem] = React.useState(null);

	const [newRecipe, setNewRecipe] = React.useState(null);

	const [recipeCounter, setRecipeUID] = React.useState(0);

	const increaseRecipeUID = () => setRecipeUID( recipeCounter + 1 );
	const decreaseRecipeUID = () => setRecipeUID( recipeCounter - 1 );
	const resetRecipeUID = () => setRecipeUID( 0 );
		

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
								<ComponentButton _buttonAction={ () => setNewRecipe(newRecipe) } _buttonText="Add Recipe" />
							</td>
						</tr>
					</tbody>
				</table>
			</TwoColumnCSS>
			<div>
				{ newRecipe && (
					<div>	
							<h3> Selected Item: </h3>
							<></>
					</div>
				)}
				{selectedItem && ( <ComponentSelectedItem _recipe={selectedItem} _setSelectedItem={setSelectedItem}/> )}
			</div>
			<TwoColumnCSS>
				<table width="100%" >
					<thead>
						<tr>
							<th width="50%"> List of Recipes </th>
							<th width="0%"> Type </th>
							<th width="40%"> Link </th>
							<th width="0%"> Selection </th>
						</tr>
					</thead>
					<tbody>
						{recipe
							.filter((_recipe) => _recipe.name
							.toLowerCase()
							.includes( state.toLowerCase() ))
							.map(_recipe => (
								<ComponentRecipe
									key={_recipe.id}
									_recipe={_recipe}
									_selectRecipe={(_recipe)=> setSelectedItem(_recipe)}
								/>
						))}
					</tbody>
				</table>
			</TwoColumnCSS>
		</PageCSS>
	);
};

export default App;