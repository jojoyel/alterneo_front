import React from 'react';
import './../../styles/_button.scss'

const Button = (props) => {
	if (props.icon !== null) {
		return (
			<button className={props.style === undefined ? '' : props.style} onClick={props.callback}>
				<span className="material-icons">
					{props.icon}
				</span>
				{props.text}
			</button>
		);
	} else {
		return (
			<button className={props.style === undefined ? '' : props.style} onClick={props.callback}>
				{props.text}
			</button>
		);
	}
};

export default Button;