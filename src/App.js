import React from 'react';
import Button from "./components/form/Button";
import JobOfferSearchCard from "./components/JobOfferSearchCard";

const test = {
	"company": {
		"company_name": "Nextfor",
		"avatar_url": "https://previews.123rf.com/images/sabelskaya/sabelskaya1603/sabelskaya160300156/54119905-carr%C3%A9-neon-lumi%C3%A8re-bleue-au-n%C3%A9on-.jpg"
	},
	"offer_name": "Développeur Android H/F",
	"contract_type": "CDD",
	"contract_duration": "1 mois",
	"requirements": "Android natif, bac +5"
}
const App = () => {
	return (
		<div>
			<Button style="test" text="Normal">
			</Button>
			<Button style="outlined test" text="outlined">
			</Button>
			<Button style="rounded test" text="rounded">
			</Button>
			<Button style="rounded test outlined" text="rounded outlined">
			</Button>
			<JobOfferSearchCard company={test.company} offer_name={test.offer_name} contract_type={test.contract_type}
			                    contract_duration={test.contract_duration} requirements={test.requirements}/>
		</div>
	);
};

export default App;
