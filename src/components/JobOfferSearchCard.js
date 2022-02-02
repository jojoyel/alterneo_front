import React from 'react';
import Button from "./form/Button";

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
		<div className="card">
			<img src={props.company.avatar_url} alt={"Image de l'entreprise " + props.company.name} />
			<p>{props.offer_name}</p>
			<p>{props.contract_type} / {props.company.name}</p>
			<p>{props.contract_duration}</p>
			<p>{props.requirements}</p>
			<Button text="Plus de détails" style="rounded" />
		</div>
	);
};

export default JobOfferSearchCard;