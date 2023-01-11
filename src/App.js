import React from "react";
import axios from "axios";
import './App.css';
// import Recipe from "recipe-book.json"
// import PropTypes from "prop-types";
import styled from "@emotion/styled";


import ComponentListRecipes from "./components/ComponentListRecipes";
import ComponentSelectedItem from "./components/ComponentSelectedItem";
import ComponentHeadBar from "./components/ComponentHeadBar";
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

const NewRecipe = styled.div`
	width: 100%;
	font-size: x-large;
	gridColumnGap: 80rem;
	padding: 0 30px;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Proto-Components


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Main-App

export default function App () {

	const url = "http://localhost:3001/recipes";

	// React Hook
	// state is the current state of the hook
	const [ state, setState ] = React.useState("");
	const [ recipes, setRecipeBook ] = React.useState([]);
	const [ selectedItem, setSelectedItem ] = React.useState( null );
	const [ addRecipe, setAddRecipe ] = React.useState(null);
	const [ newRecipe, setNewRecipe ] = React.useState('');


	// const update = (id, newRecipe) => {
	// 	const request = axios.put(`${url}/${id}`, newRecipe)
	// 	return request.then( response => response.data )
	// }

	React.useEffect( () => {
		axios.get( url )
			.then( savedRecipeBook => {
				setRecipeBook( savedRecipeBook.data )
			})
	}, [])

		// {
		// 	name: "",
		// 	type: "",
		// 	link: "",
		// 	summary: {
		// 		prep_time: 0,
		// 		cook_time: 0,
		// 		additional_time: 0,
		// 		total_time: 0,
		// 		servings: 0,
		// 	},
		// 	ingredients: "",
		// 	procedures: "",
		// }

	const addRecipeDB = event => {
		
		event.preventDefault()

		const newRecipeObject = {
			id: Object.values( recipes ).map( recipes => recipes.length+1 ),
			name: newRecipe,
			type: "foo",
			link: ["http://localhost:3001/recipes"],
			summary: {
				prep_time: 1,
				cook_time: 2,
				additional_time: 3,
				total_time: 4,
				servings: 5,
			},
			ingredients: [
				"asd1",
				"asd2"
			],
			procedure: [
				"asa1",
				"asa2"
			],
		}

		axios.post( 'http://localhost:3001/recipes', newRecipeObject )
			.then( response => {
				console.log(response)
				// setRecipeBook( recipes.concat( response.data ) )
				// setNewRecipe('')
			})
			.catch( function ( error ) {
				console.log( error );
			})
	}

	const handleRecipeBookChange = ( event ) => {
		setNewRecipe( event.target.value )
	}

	return ( 
		<PageCSS>
			<TitleCSS> Recipe Book {} </TitleCSS>
			<TwoColumnCSS>
				<ComponentHeadBar
					_state = { state }
					_setState = { ( state ) => setState( state ) }
					_addRecipe = { ( addRecipe ) => setAddRecipe( addRecipe ) }
					_setSelectedItem = { ( selectedItem ) => setSelectedItem( selectedItem ) }
				/>
			</TwoColumnCSS>
			<NewRecipe>
				{ addRecipe && (
					<form onSubmit={addRecipeDB}>
						<input
							value={newRecipe}
							onChange={handleRecipeBookChange}	
						/>
						<button type="submit">Save</button>
					</form>
					// <ComponentAddRecipe
					// 	_newRecipe = { newRecipe }
					// 	_setNewRecipe ={ ( newRecipe ) => setNewRecipe( newRecipe ) }
				)}
			</NewRecipe>
			<div>
				{selectedItem && (
					<ComponentSelectedItem
						_recipe={ selectedItem }
					/>
				)}
			</div>
			<TwoColumnCSS>
				<ComponentListRecipes
					_recipe = { recipes }
					_state = { state }
					_setSelectedItem = { ( recipes ) => setSelectedItem( recipes ) } 
				/>
			</TwoColumnCSS>
		</PageCSS>
	);
};

