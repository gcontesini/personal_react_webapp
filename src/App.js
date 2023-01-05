import React from "react";
import axios from "axios";
import './App.css';
// import Recipe from "recipe-book.json"
// import PropTypes from "prop-types";
import styled from "@emotion/styled";

import ComponentRecipe from "./components/ComponentRecipe";
import ComponentSelectedItem from "./components/ComponentSelectedItem";
import ComponentHeadBar from "./components/ComponentHeadBar";
import ComponentAddRecipe from "./components/ComponentAddRecipe";

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

const NewRecipe = styled.div`
	width: 100%;
	font-size: x-large;
	gridColumnGap: 80rem;
	padding: 0 30px;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Proto-Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Main-App

export default function App () {
	
	const url = "http://localhost:3001/recipe-book.json";
	
	React.useEffect( ()=>{
		fetch( url )
		.then( ( resp ) => resp.json() )
		.then( ( recipe_book ) => setRecipeBook( recipe_book ) );
	}, []	);

	// React.useEffect( (() => {

	// 	const dataHook = response => {
	// 		setRecipeBook( response.data )
	// 	}
	// 	const promise = axios.get( url )
		
	// 	promise.then( dataHook )

	// }, []))

	// React Hook
	// state is the current state of the hook
	const [state, setState] = React.useState("");
	const [recipe, setRecipeBook] = React.useState([]);
	const [selectedItem, setSelectedItem] = React.useState(null);
	const [newRecipe, addRecipe] = React.useState(null);

	// const [recipeCounter, setRecipeUID] = React.useState(0);

	// const increaseRecipeUID = () => setRecipeUID( recipeCounter + 1 );
	// const decreaseRecipeUID = () => setRecipeUID( recipeCounter - 1 );
	// const resetRecipeUID = () => setRecipeUID( 0 );

	return ( 
		<PageCSS>
			<TitleCSS> Recipe Book </TitleCSS>
			<TwoColumnCSS>
				<ComponentHeadBar
					_state={state}
					_setState={ ( state ) => setState( state ) }
					_addRecipe={ ( newRecipe) => addRecipe( newRecipe ) }
					_setSelectedItem={ () => setSelectedItem() }
				/>
			</TwoColumnCSS>
			<NewRecipe>
				{/* { newRecipe && (
					<ComponentAddRecipe
					_newRecipe={}
					/>
				)} */}
			</NewRecipe>
			<div>
				{selectedItem && (
					<ComponentSelectedItem
						_recipe={ selectedItem }
						_setSelectedItem={ () => setSelectedItem() }
					/>
				)}
			</div>
			<TwoColumnCSS>
				{/* this can be a component */}
				<table width="100%" >
					<thead>
						<tr>
							<th> Recipe Name </th>
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
								/>
						))}
					</tbody>
				</table>
			</TwoColumnCSS>
		</PageCSS>
	);
};