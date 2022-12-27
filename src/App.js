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

	const HandlerRecipe = ({_recipe, selectRecipe}) => (
		<tbody>
		{_recipe
			.filter((_recipe) => _recipe.name
			.toLowerCase()
			.includes( state.toLowerCase() ))
			.map(_recipe_ => (
				<tr
				key={_recipe_.id}
				// onSelect = {(Recipe.name) => setSelectedItem( Recipe.name ) }
				>
					<td>{_recipe_.name}</td>
					<td>{_recipe_.type}</td>
					<HandlerSummary _summary={_recipe_.summary}/>
					<HandlerIngredients key={_recipe_.ingredients.toString()} _ingredients={_recipe_.ingredients}/>
					<td>
						<a href={_recipe_.link} target="_blank"> Full Recipe </a>
					</td>
					{/* <td >
						<button onClick={() => setSelectedItem( Recipe.name )} >Select</button>
					</td> */}
				</tr>
			))}
		</tbody>
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
			<div
				dyplay={{
					// display: "grid",
					gridTemplateColumns: "70% 30%",
					gridColumnGap: "1rem",
				}}
			>
				<div>
					<table 
						width="150%"
					>
						<thead>
							<tr>
								<th width="0%"> Recipe </th>
								<th width="0%"> Type </th>
								<th width="25%"> Summary</th>
								<th width="70%"> Ingredients </th>
								<th width="65%"> Link </th>
							</tr>
						</thead>
						<HandlerRecipe key={Recipe.id} _recipe={Recipe}/>
					</table>
				</div>
				{selectedItem && (
					<div>
						<h1>{selectedItem.name}</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default App;