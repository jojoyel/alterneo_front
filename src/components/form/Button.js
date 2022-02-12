import React from 'react';
import './../../styles/_button.scss'

const Button = (props) => {
	if (props.icon !== undefined) {
		return (
			<button className={props.style === undefined ? '' : props.style + " iconed"} onClick={props.callback}>
				<span className="button-content">
					<span className="material-icons">
						{props.icon}
					</span>
					{props.text}
				</span>
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