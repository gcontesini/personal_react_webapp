import React from "react";
import PropTypes from "prop-types";
import './App.css';
import Recipe from "./recipe-book.json";

// React Components

const Ingredients = ({_ingredients}) => (
	<td> {_ingredients.map((_ingredients_) => 
		<li key={_ingredients_.toString()}> {_ingredients_} </li>
	)}
	</td>
);

const Summary = ({_summary}) => (
	<td>
		<li>Prep time:{_summary.cook_time} min</li>
		<li>Cook time:{_summary.prep_time} min</li>
		<li>Additional time:{_summary.additional_time} min</li>
		<li>Total time:{_summary.total_time} min</li>
		<li>Servings:{_summary.servings}</li>
	</td>
);

function App() {
	// React Hook
	// state is the current state of the hook
	// setState is the setter of the variable state 
	const [state, setState] = React.useState("");

	return ( 
		<div 
			style={{
				margin: "auto",
				width: 800,
				paddingTop: "1rem",
			}}
		>
			<h1 className="title">
				Recipe Search 
			</h1>
			<input
				value={state}
				onChange={(_state) => setState(_state.target.value)}
			/>
			<table 
				width="150%"
			>
				<thead>
					<tr>
						<th width="0%"> Recipe </th>
						<th width="0%"> Type </th>
						<th width="25%"> Summary</th>
						<th width="80%"> Ingredients </th>
						<th width="75%"> Link </th>
					</tr>
				</thead>
				<tbody>
					{Recipe
						.filter((Recipe) => Recipe.name.includes(state))
						.slice(0,2)
						.map(Recipe => (
						<tr key={Recipe.id}>
							<td>{Recipe.name}</td>
							<td>{Recipe.type}</td>
							<Summary _summary={Recipe.summary}/>
							<Ingredients key={Recipe.ingredients.toString()} _ingredients={Recipe.ingredients}/>
							<td>
								<a href={Recipe.link} target="_blank"> Full Recipe </a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default App;