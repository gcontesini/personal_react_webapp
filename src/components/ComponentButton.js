import Button from '@mui/material/Button';

export default function ComponentButton({
	_buttonType,
	_buttonAction,
	_buttonChange,
	_buttonText
}) {

	return (
		<Button
			variant="contained"
			color="info"
			size="small"
			type={ _buttonType }
			onClick={ _buttonAction }
			onChange={ _buttonChange }
		>
			{ _buttonText }
		</Button >
	)
};