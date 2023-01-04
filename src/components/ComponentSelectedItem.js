import ComponentIngredients from "./ComponentIngredients";
import ComponentSummary from "./ComponentSummary";
import ComponentProcedure from "./ComponentProcedure";
import ComponentButton from "./ComponentButton";

export default function ComponentSelectedItem ({ _recipe, _setSelectedItem }) {

	return (
		<div>
			<h3>
				<ComponentButton
					_buttonAction={ () => _setSelectedItem(null) }
					// _buttonAction={ () => console.log("Cleared Selection!") }
					_buttonText="Clear Selection"
				/>
			</h3>
			<h3> Selected Item: { _recipe.name } </h3>
			<table width="200%" >
				<thead>
					<tr>
						<th width="15%"> Summary </th>
						<th width="32%"> Ingredients </th>
						<th> Procedure </th>
						<th> Link </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<ComponentSummary _summary={ _recipe.summary }/>
						<ComponentIngredients
							key={ _recipe.ingredients.toString() }
							_ingredients={ _recipe.ingredients }
						/>
						<ComponentProcedure _procedure={ _recipe.procedure }/>
						<td>
							<a href={ _recipe.link } target="blank"> Full Recipe </a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
};

// export default ComponentSelectedItem;