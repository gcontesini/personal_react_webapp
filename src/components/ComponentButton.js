export default function ComponentButton ({ _buttonAction, _buttonText }) {
	
	return (
		<button onClick={ _buttonAction }>
			{_buttonText}
		</button>
	)
};