import React from "react";
import Edition from "../TournamentEditionBody";
import "./styles.scss";
import EditIcon from '@material-ui/icons/Edit';


const TournamentEditionFields = [
	{
		name: "Limit of teams",
		value: 3,
		

	},
	{
		name: "Number of groups",
		value: 4,

		
	},
    {
		name: "Number of groups",
		value: 4,

		
	},
    {
		name: "Number of teams leaving a group",
		value: 4,

		
	},
	{
		name: "Signing deadline",
		value: "2021-08-13",
	

	},
    {
		name: "Date",
		value: '2021-09-12',
	

	},
];
const TournamentEdition = () => {
	return (
		<div className="boxscoreBody">
			<div className="boxscoreHeader">
				<span>Tournament edition</span>
				<p>Tournament Configuration</p>
			</div>
		
				<div className="tournament">
				{TournamentEditionFields.map((match) => (
					<Edition
						name={match.name}
						value={match.value}
						
						
					/>
				
				))}
				</div>
		
		</div>
	);
};

export default TournamentEdition;
