import React from 'react';
import Button from "./form/Button";
import '../../src/styles/_card.scss';

const JobOfferSearchCard = (props) => {
	if (props.emergency !== undefined || props.limited !== undefined) {
		return (
			<div className="card">
				<img className="company-logo" src={props.company.avatar_url}
				     alt={"Image de l'entreprise " + props.company.company_name}/>
				<div className="centered-part">
					<div>
						<p className="offer-name">{props.offer_name}</p>
						<p className="">{props.contract_type} / <a href="#">{props.company.company_name}</a></p>
						<p>{props.contract_duration}</p>
						<p>{props.requirements}</p>
					</div>
					<Button text="Plus de détails" style="rounded" icon="chevron_right"/>
				</div>
				<div className="right-part">
					<span className="material-icons">priority_high</span>
					<span className="material-icons">groups</span>
				</div>
			</div>
		);
	} else {
		return (
			<div className="card">
				<img className="company-logo" src={props.company.avatar_url}
				     alt={"Image de l'entreprise " + props.company.company_name}/>
				<div className="centered-part">
					<div>
						<p className="offer-name">{props.offer_name}</p>
						<p className="">{props.contract_type} / <a href="#">{props.company.company_name}</a></p>
						<p>{props.contract_duration}</p>
						<p>{props.requirements}</p>
					</div>
					<Button text="Plus de détails" style="rounded" icon="chevron_right"/>
				</div>
			</div>
		);
	}
};

export default JobOfferSearchCard;