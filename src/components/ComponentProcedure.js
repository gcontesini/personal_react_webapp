export default function ComponentProcedure  ({ _procedure }) {

	return (
		<td> { _procedure.map(( _procedure ) => 
			<li key={ _procedure.toString() }> { _procedure } </li>
		)}
		</td>
	)
};