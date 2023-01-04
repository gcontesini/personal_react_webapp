import ComponentButton from "./ComponentButton";
// import ComponentButton from "./ComponentButton";
// import ComponentButton from "./ComponentButton";
// import ComponentButton from "./ComponentButton";

export default function ComponentAddRecipe ({ _recipe, _setSelectedItem }) {
	
	return(
		<div>
			<h3>
				<ComponentButton _buttonAction={() => _setSelectedItem(null)} _buttonText="Clear Selection" />
			</h3>
			<h3> Selected Item: {_recipe.name} </h3>
			<table width="200%" >
				<thead>
					<tr>
						<th width="20%"> Summary </th>
						<th width="35%"> Ingredients </th>
						<th width="200%"> Procedure </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						{/* <ComponentSummary _summary={ _recipe.summary }/>
						<ComponentIngredients key={ _recipe.ingredients.toString() } _ingredients={ _recipe.ingredients }/>
						<ComponentProcedure _procedure={ _recipe.procedure }/> */}
					</tr>
				</tbody>
			</table>
		</div>
	)
};