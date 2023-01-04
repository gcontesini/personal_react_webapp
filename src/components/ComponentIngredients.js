export default function ComponentIngredients ({ _ingredients }) {

	return (
		<td>{ _ingredients.map(( _ingredients_ ) => 
			<li key={ _ingredients_.toString() }> { _ingredients_ } </li>
			)}
		</td>
	)
};