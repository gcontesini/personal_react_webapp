export default function ComponentSummary ({_summary}) {

	return (
		<td>
			<li>Prep time:{_summary.cook_time} min</li>
			<li>Cook time:{_summary.prep_time} min</li>
			<li>Additional time:{_summary.additional_time} min</li>
			<li>Total time:{_summary.total_time} min</li>
			<li>Servings:{_summary.servings}</li>
		</td>
	)
};