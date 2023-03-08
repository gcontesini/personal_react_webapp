import ComponentButton from "./ComponentButton";

export default function ComponentRecipe({
	_recipe,
	_selectRecipe,
	_setDelRecipe
}) {

	return (
		<tr>
			<td>{ _recipe.name }</td>
			<td>{ _recipe.type }</td>
			<td >
				<ComponentButton
					_buttonAction={ () => _selectRecipe(_recipe) }
					_buttonText="Select"
				/>
			</td>
			<td>
				<ComponentButton
					_buttonAction={ () => _setDelRecipe(_recipe) }
					_buttonText="Delete"
				/>
			</td>
		</tr>
	)
};