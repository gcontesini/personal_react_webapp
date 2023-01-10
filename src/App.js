import React from "react";
import axios from "axios";
import './App.css';
// import Recipe from "recipe-book.json"
// import PropTypes from "prop-types";
import styled from "@emotion/styled";


import ComponentListRecipes from "./components/ComponentListRecipes";
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

	// Data retrieve using Axios
	const dataHook = response => {
		setRecipeBook( response.data )
	}

	axios.get( url, {
		timeout: 2000,
	})
		.then( dataHook )
		.catch( (err) => {
			if (err.response) {
				const { status } = err.response;

				if (status === 401) {
					// console.log("Client authentication problems!")
				}
				else if (status === 502) {
					// console.log("Serve invalid response!")
				}
			}
			else if (err.request) {
				// console.log("No response was receive!")
			} 
			else {
				// console.log("There is no cow level!")
			}
		});

	// React Hook
	// state is the current state of the hook
	const [ state, setState ] = React.useState( "" );
	const [ recipe, setRecipeBook ] = React.useState( [] );
	const [ selectedItem, setSelectedItem ] = React.useState( null );
	const [ addRecipe, setAddRecipe ] = React.useState(null)
	const [ newRecipe, setNewRecipe ] = React.useState(
		{
			name: "",
			type: "",
			link: "",
			summary: {
				prep_time: 0,
				cook_time: 0,
				additional_time: 0,
				total_time: 0,
				servings: 0,
			},
			ingredients: "",
			procedures: "",
		}
	);

	const addRecipeDB = ( event ) => {
		
		event.preventDefault()

		const newRecipeForm = {
			name: "cow",
			type: "foo",
			link: "bar",
			summary: {
				prep_time: 1,
				cook_time: 2,
				additional_time: 3,
				total_time: 4,
				servings: 5,
			},
			ingredients: "asd",
			procedures: "asa",
		}

		axios
			.post(url, newRecipeForm)
			.then( response => {
				console.log( response )
				setRecipeBook( recipe.concat(response.data) )
				setNewRecipe('')
			})
	}

	const handleRecipeBookChange = ( event ) => {
		setRecipeBook(event.target.value);
		console.log(event.target.value);
	};

	return ( 
		<PageCSS>
			<TitleCSS> Recipe Book </TitleCSS>
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
					<form onSubmit = { addRecipeDB }>
						<button type="form" onChange={handleRecipeBookChange}>Save</button>
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
					_recipe = { recipe }
					_state = { state }
					_setSelectedItem = { ( recipe ) => setSelectedItem( recipe ) } 
				/>
			</TwoColumnCSS>
		</PageCSS>
	);
};