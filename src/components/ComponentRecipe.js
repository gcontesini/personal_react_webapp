import ComponentButton from "./ComponentButton";

export default function ComponentRecipe ({ _recipe, _selectRecipe }) {
	
	return (
		<tr>
			<td>{ _recipe.name }</td>
			<td>{ _recipe.type }</td>
			<td >
				<ComponentButton
					_buttonAction={() => _selectRecipe( _recipe )}
					_buttonText="Select"
				/>
			</td>
		</tr>
	)
};