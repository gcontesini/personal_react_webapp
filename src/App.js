import React from "react";
// import PropTypes from "prop-types";
import './App.css';

const ComponentIngredients = ({_ingredients}) => (

	<td>{_ingredients.map((_ingredients_) => 
		<li key={_ingredients_.toString()}> {_ingredients_} </li>
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

const ComponentProcedure = ({_procedure}) => (

	<td> {_procedure.map((_procedure) => 
		<li key={_procedure.toString()}> {_procedure} </li>
	)}
	</td>
);

const ComponentRecipe = ({_recipe, _selectRecipe}) => (

	<tr>
		<td>{_recipe.name}</td>
		<td>{_recipe.type}</td>
		<td>
			<a href={_recipe.link} target="blank"> Full Recipe </a>
		</td>
		<td >
			<button onClick={() => _selectRecipe(_recipe)}>Select</button>
		</td>
	</tr>
	
);

function App() {
	
	// React Hook
	// state is the current state of the hook
	// setState is the setter of the variable state 
	const [state, setState] = React.useState("");
	const [recipe, setRecipe] = React.useState([]);
	const [selectedItem, setSelectedItem] = React.useState(null);
	const [newRecipe, setNewRecipe] = React.useState(null);

	React.useEffect( ()=>{
		fetch("http://localhost:3001/recipe-book.json")
		.then( (resp) => resp.json() )
		.then( (recipe_book) => setRecipe(recipe_book) );
	}, []	);

	return ( 
		<div 
			style={{
				width: 800,
			}}
		>
			<h1 className="title">
				Recipe Book 
			</h1>
			<div
				display={{ 
					// display: "grid",
					gridTemplateColumns: "70% 30%",
					gridColumnGap: "80rem:",
					}}
				>
				<table width="100%">
					<thead>
						<tr>
							<th width="40%"> Search for Recipe</th>
							<th width="30%">  </th>
							<th width="30%"> Add a Recipe </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input
									value={state}
									onChange={( _state ) => setState( _state.target.value )}
								/>
							</td>
							<td></td>
							<td>
								<button onClick={() => setNewRecipe(newRecipe)}> Add Recipe</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				{selectedItem && (
					<div>
							<h3> Selected Item: {selectedItem.name} </h3>
							<h3>
								<button onClick={() => setSelectedItem(null)}> Clear Selection</button>
							</h3>
							<table width="200%" >
								<thead>
									<tr>
										<th width="20%"> Summary</th>
										<th width="35%"> Ingredients </th>
										<th width="200%"> Procedure </th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<ComponentSummary _summary={selectedItem.summary}/>
										<ComponentIngredients key={selectedItem.ingredients.toString()} _ingredients={selectedItem.ingredients}/>
										<ComponentProcedure _procedure={selectedItem.procedure}/>
									</tr>
								</tbody>
							</table>
					</div>
				)}
			</div>
			<div
				display={{
					// display: "grid",
					gridTemplateColumns: "70% 30%",
					gridColumnGap: "1rem",
				}}
			>
				<table width="100%" >
					<thead>
						<tr>
							<th width="50%"> List of Recipes </th>
							<th width="0%"> Type </th>
							{/* <th width="30%"> Summary</th>
							<th width="70%"> Ingredients </th> */}
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
			</div>
		</div>
	);
};

export default App;