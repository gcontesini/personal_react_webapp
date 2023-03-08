import React from 'react';
import './App.css';
import styled from '@emotion/styled';

import ComponentListRecipes from './components/ComponentListRecipes';
import ComponentSelectedItem from './components/ComponentSelectedItem';
import ComponentDeleteItem from './components/ComponentDeleteItem';
import ComponentHeadBar from './components/ComponentHeadBar';
import ComponentButton from './components/ComponentButton';
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
	const [selectedItem, setSelectedItem] = React.useState(null);
	const [addRecipe, setAddRecipe] = React.useState(null);
	const [delRecipe, setDelRecipe] = React.useState(null);

	const [newRecipe, setNewRecipe] = React.useState({
		id: recipe.length + 1,
		name: '',
		type: '',
		link: '',
		summary: {
			prep_time: 0,
			cook_time: 0,
			additional_time: 0,
			total_time: 0,
			servings: 0,
		},
		ingredients: '',
		procedures: '',
	});
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Fetching DB

	React.useEffect(() => {
		Services.serviceGetAll().then((recipeBook) => {
			setRecipeBook(recipeBook);
		});
	}, []);

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Add Recipe
	const addRecipeDB = (event) => {
		event.preventDefault();

		const newRecipeForm = {
			id: recipe.length + 1,
			name: 'cow',
			type: 'foo',
			link: 'bar',
			summary: {
				prep_time: 1,
				cook_time: 2,
				additional_time: 3,
				total_time: 4,
				servings: 5,
			},
			ingredients: 'asd',
			procedures: 'asa',
		};

		Services.serviceCreate(newRecipeForm).then((response) => {
			console.log(response);
			setRecipeBook(recipe.concat(response.data));
			setNewRecipe('');
		});
	};

	const handleRecipeBookChange = (event) => {
		setRecipeBook(event.target.value);
		console.log(event.target.value);
	};

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Return
	return (
		<PageCSS>
			<TitleCSS> Recipe Book </TitleCSS>
			<TwoColumnCSS>
				<ComponentHeadBar
					_searchRecipe={ searchRecipe }
					_setSearchRecipe={ (searchRecipe) => setSearchRecipe(searchRecipe) }
					_addRecipe={ (addRecipe) => setAddRecipe(addRecipe) }
					_setSelectedItem={ (selectedItem) => setSelectedItem(selectedItem) }
					_setDelRecipe={ (delRecipe) => setDelRecipe(delRecipe) }
				/>
			</TwoColumnCSS>
			<NewRecipe>
				{ addRecipe && (
					<form onSubmit={ addRecipeDB }>
						<ComponentAddRecipe
							_newRecipe={ newRecipe }
							_setNewRecipe={ (newRecipe) => setNewRecipe(newRecipe) }
						/>
						<ComponentButton
							_buttonType="submit"
							_buttonText="Add Recipe"
							_buttonChange={ handleRecipeBookChange }
						/>
					</form>
				) }
			</NewRecipe>
			<div>
				{ delRecipe && <ComponentDeleteItem _recipe={ delRecipe } /> }
			</div>
			<div>
				{ selectedItem && <ComponentSelectedItem _recipe={ selectedItem } /> }
			</div>
			<TwoColumnCSS>
				<ComponentListRecipes
					_recipe={ recipe }
					_searchRecipe={ searchRecipe }
					_setSelectedItem={ (recipe) => setSelectedItem(recipe) }
					_setDelRecipe={ (recipe) => setDelRecipe(recipe) }
				/>
			</TwoColumnCSS>
		</PageCSS>
	);
}
