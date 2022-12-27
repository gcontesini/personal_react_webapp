import React from "react";
import PropTypes from "prop-types";
import './App.css';
import Recipe from "./recipe-book.json";


function App() {
	// React Hook
	// state is the current state of the hook
	// setState is the setter of the variable state 
	const [state, setState] = React.useState("");
	const [selectedItem, setSelectedItem] = React.useState(null);

	const HandlerIngredients = ({_ingredients}) => (

		<td> {_ingredients.map((_ingredients_) => 
			<li key={_ingredients_.toString()}> {_ingredients_} </li>
		)}
		</td>

	);

	const HandlerSummary = ({_summary}) => (

		<td>
			<li>Prep time:{_summary.cook_time} min</li>
			<li>Cook time:{_summary.prep_time} min</li>
			<li>Additional time:{_summary.additional_time} min</li>
			<li>Total time:{_summary.total_time} min</li>
			<li>Servings:{_summary.servings}</li>
		</td>
	);

	const HandlerRecipe = ({_recipe, _selectRecipe}) => (
	
		<tr>
			<td>{_recipe.name}</td>
			<td>{_recipe.type}</td>
			<HandlerSummary _summary={_recipe.summary}/>
			<HandlerIngredients key={_recipe.ingredients.toString()} _ingredients={_recipe.ingredients}/>
			<td>
				<a href={_recipe.link} target="_blank"> Full Recipe </a>
			</td>
			<td >
				<button onClick={() => _selectRecipe(_recipe)}>Select</button>
			</td>
		</tr>
		
	);

	return ( 
		<div 
			style={{
				// margin: "auto",
				width: 800,
				// paddingTop: "1rem",
			}}
		>
			<h1 className="title">
				Recipe Search 
			</h1>
			<input
				value={state}
				onChange={( _state ) => setState( _state.target.value )}
			/>
			<div>
				{selectedItem && (
					<div>
						<h3>
							Selected Item: {selectedItem.name}
							<button onClick={() => setSelectedItem(null)}> Clear Selection </button>
						</h3>
					</div>
				)}
			</div>
			<div
				dyplay={{
					// display: "grid",
					gridTemplateColumns: "70% 30%",
					gridColumnGap: "1rem",
				}}
			>
				<table width="200%" >
					<thead>
						<tr>
							<th width="0%"> Recipe </th>
							<th width="0%"> Type </th>
							<th width="30%"> Summary</th>
							<th width="70%"> Ingredients </th>
							<th width="40%"> Link </th>
							<th width="0%"> Selection </th>
						</tr>
					</thead>
					<tbody>
						{Recipe
							.filter((Recipe) => Recipe.name
							.toLowerCase()
							.includes( state.toLowerCase() ))
							.map(_recipe => (
								<HandlerRecipe
									key={_recipe.id}
									_recipe={_recipe}
									_selectRecipe={(_recipe)=> setSelectedItem(_recipe)}
								/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default App;