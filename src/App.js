import React from 'react';
import './App.css';
import styled from '@emotion/styled';

import ComponentListRecipes from './components/ComponentListRecipes';
import ComponentSelectedItem from './components/ComponentSelectedItem';
import ComponentHeadBar from './components/ComponentHeadBar';
import ComponentAddRecipe from './components/ComponentAddRecipe';

import ComponentListRecipes from "./components/ComponentListRecipes";
import ComponentSelectedItem from "./components/ComponentSelectedItem";
import ComponentHeadBar from "./components/ComponentHeadBar";
import ComponentAddRecipe from "./components/ComponentAddRecipe";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @Emotion-CSS

const TitleCSS = styled.h1`
	text-align: center;
`;

const TwoColumnCSS = styled.div`
	gridtemplatecolumns: 70% 30%;
	gridcolumngap: 80rem;
	margin-bottom: 0.5cm;
`;

const PageCSS = styled.div`
	width: 800px;
`;

const NewRecipe = styled.div`
	width: 100%;
	font-size: x-large;
	gridcolumngap: 80rem;
	padding: 0 30px;
`;

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
	}, [delRecipe]);

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Add Recipe
	const handleNewRecipe = (newRecipe) => {

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


	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Return
	return (
		<PageCSS>
			<TitleCSS> Recipe Book {} </TitleCSS>
			<TwoColumnCSS>
				<ComponentHeadBar
					_searchRecipe={ searchRecipe }
					_setSearchRecipe={ (event) => setSearchRecipe(event) }
					_addRecipe={ (event) => setAddRecipe(event) }
					_setSelectedRecipe={ (event) => setSelectedRecipe(event) }
					_setDelRecipe={ (event) => setDelRecipe(event) }
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
			<>
				{ selectedItem && (
					<ComponentSelectedItem _recipe={ selectedItem } />
				) }
			</>
			<TwoColumnCSS>
				<ComponentListRecipes
					_recipe = { recipe }
					_state = { state }
					_setSelectedItem = { ( recipe ) => setSelectedItem( recipe ) } 
				/>
			</TwoColumnCSS>
		</PageCSS >
	);
};