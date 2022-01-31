import React from 'react';
import './../../styles/_button.scss'

const Button = ({type, text, onClick, disabled}) => {
	return (
		<button className={'button ' + type}
		        disabled={disabled}
		        onClick={onClick}>
			{"text"}
		</button>
	);
};

export default Button;