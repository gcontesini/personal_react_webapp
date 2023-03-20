import { useState, useEffect } from 'react';
import { useForm, useController } from 'react-hook-form';
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

	const [searchRecipe, setSearchRecipe] = useState('');
	const [recipe, setRecipeBook] = useState([]);
	const [selectedItem, setSelectedRecipe] = useState(null);
	const [addRecipe, setAddRecipe] = useState(null);
	const [delRecipe, setDelRecipe] = useState(null);
	const { register, control, handleSubmit } = useForm();
	const { field } = useController({ name: "type", control });
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Fetching DB

	useEffect(() => {
		Services.serviceGetAll().then((recipeBook) => {
			setRecipeBook(recipeBook);
		});
	}, []);

	useEffect(() => {
		if (delRecipe !== null) {
			alert(JSON.stringify("Recipe Deleted"));
			Services.serviceDelete(delRecipe.id,).then((response) => {
				console.log("Recipe Deleted");
				setDelRecipe(null);
			});
		}
	}, [delRecipe]);

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Add Recipe

	const handleNewRecipe = (event) => {

		const newRecipe = { ...{ "id": recipe.length + 1 }, ...event };
		// alert(JSON.stringify(newRecipe));

		Services.serviceCreate(newRecipe).then((response) => {
			console.log(response);
			setRecipeBook(recipe.concat(response.data));
			setAddRecipe(null);
		});
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
					< ComponentAddRecipe
						_register={ register }
						_field={ field }
						_onSubmit={ (event) => handleNewRecipe(event) }
						_handleSubmit={ (event) => handleSubmit(event) }
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
