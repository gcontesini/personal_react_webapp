import ComponentIngredients from "./ComponentIngredients";
import ComponentSummary from "./ComponentSummary";
import ComponentProcedures from "./ComponentProcedures";

export default function ComponentSelectedItem({
	_recipe
}) {

	return (
		<div>
			<h2> Selected Item: { _recipe.name } </h2>
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
						<ComponentSummary _summary={ _recipe.summary } />
						<ComponentIngredients
							key={ _recipe.ingredients.toString() }
							_ingredients={ _recipe.ingredients }
						/>
						<ComponentProcedures _procedures={ _recipe.procedures } />
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