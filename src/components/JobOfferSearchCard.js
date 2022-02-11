import React from 'react';
import Button from "./form/Button";
import '../../src/styles/_card.scss';

const test = {
	"company": {
		"company_name": "Nextfor",
		"avatar_url": "https://lh3.googleusercontent.com/ogw/ADea4I7ATXeycU9QtgOPRkGR4xdtEOXzs91p1H0fAoHVHQ=s64-c-mo"
	},
	"offer_name": "Développeur Android H/F",
	"contract_type": "CDD",
	"contract_duration": "1 mois",
	"requirements": "Android natif, bac +5"
}

const JobOfferSearchCard = (props) => {
	return (
		<div className="card test">
			<img src={props.company.avatar_url} alt={"Image de l'entreprise " + props.company.company_name}/>
			<div>
				<div>
					<p className="offer-name">{props.offer_name}</p>
					<p className="">{props.contract_type} / {props.company.company_name}</p>
					<p>{props.contract_duration}</p>
					<p>{props.requirements}</p>
				</div>
				<Button text="Plus de détails" style="rounded" icon="chevron_right"/>
			</div>
		</div>
	);
};

export default JobOfferSearchCard;