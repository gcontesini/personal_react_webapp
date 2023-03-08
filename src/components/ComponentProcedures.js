export default function ComponentProcedures({
	_procedures
}) {

	return (
		<td> { _procedures.map((_procedures) =>
			<li key={ _procedures.toString() }> { _procedures } </li>
		) }
		</td>
	)
};