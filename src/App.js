import React from 'react';
import './App.css';
import styled from '@emotion/styled';

import ComponentListRecipes from './components/ComponentListRecipes';
import ComponentSelectedItem from './components/ComponentSelectedItem';
import ComponentHeadBar from './components/ComponentHeadBar';
import ComponentAddRecipe from './components/ComponentAddRecipe';

import Services from './services/services'

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
export default function App() {

	// React Hook

	const [searchRecipe, setSearchRecipe] = React.useState('');
	const [recipe, setRecipeBook] = React.useState([]);
	const [selectedItem, setSelectedRecipe] = React.useState(null);
	const [addRecipe, setAddRecipe] = React.useState(null);
	const [delRecipe, setDelRecipe] = React.useState(null);
	const [newRecipe, setNewRecipe] = React.useState({
		name: "-",
		type: "-",
		link: [],
		summary: {
			prep_time: 0,
			cook_time: 0,
			additional_time: 0,
			total_time: 0,
			servings: 0,
		},
		ingredients: "-",
		procedures: "-",

	})
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Fetching DB

	React.useEffect(() => {
		Services.serviceGetAll().then((recipeBook) => {
			setRecipeBook(recipeBook);
		});
	}, []);

	React.useEffect(() => {
		if (delRecipe !== null) {
			Services.serviceDelete(delRecipe.id,).then((response) => {
				console.log("Recipe Deleted");
				setDelRecipe(null);
			});
		}
	}, [delRecipe]);

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Add Recipe
	const handleNewRecipe = (newRecipe) => {

		console.log({ newRecipe });

		// Services.serviceCreate(newRecipe).then((response) => {
		// 	console.log(response);
		// 	setRecipeBook(recipe.concat(response.data));
		// 	setAddRecipe(null);
		// });
	};


	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Return
	return (
		<PageCSS>
			<TitleCSS> Recipe Book </TitleCSS>
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
					<ComponentAddRecipe
						_recipeUID={ recipe.length + 1 }
						_onSave={ handleNewRecipe }
						_newRecipe={ newRecipe }
					/>
				) }
			</NewRecipe>
			<>
				{ selectedItem && (
					<ComponentSelectedItem _recipe={ selectedItem } />
				) }
			</>
			<TwoColumnCSS>
				<ComponentListRecipes
					_recipe={ recipe }
					_searchRecipe={ searchRecipe }
					_setSelectedRecipe={ (event) => setSelectedRecipe(event) }
					_setDelRecipe={ (event) => setDelRecipe(event) }
				/>
			</TwoColumnCSS>
		</PageCSS >
	);
}
