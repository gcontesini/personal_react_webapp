import Button from '@mui/material/Button';

export default function ComponentButton ({
	_buttonAction,
	_buttonText
}) {
	
	return (
		<Button
			variant = "contained"
			color = "info"
			size = "small"
			onClick = { _buttonAction }
		>
			{_buttonText}
		</Button>
	)
};