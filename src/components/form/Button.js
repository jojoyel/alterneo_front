import React from 'react';
import './../../styles/_button.scss'

const Button = (props) => {
	return (
		<button className={props.style === undefined ? '' : props.style} onClick={props.callback}>
			{props.text}
		</button>
	);
};

export default Button;