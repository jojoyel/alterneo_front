import React from 'react';
import Button from "./components/form/Button";
import JobOfferSearchCard from "./components/JobOfferSearchCard";

const App = () => {
	return (
		<div>
			<Button text="Normal">
			</Button>
			<Button style="outlined" text="outlined">
			</Button>
			<Button style="rounded" text="rounded">
			</Button>
			<Button style="rounded outlined" text="rounded outlined">
			</Button>
			<JobOfferSearchCard />
		</div>
	);
};

export default App;
