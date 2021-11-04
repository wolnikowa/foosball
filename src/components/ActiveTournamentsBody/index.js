import React from "react";
import ActiveTournament from "../ActiveTournaments";
import "./styles.scss";
import EditIcon from '@material-ui/icons/Edit';


const Active_tournament = [
	{
		name: "JIT Euro 2021",
		date: new Date(2021, 8, 15),
	},
	{
		name: "JIT Euro 2022",
		date: new Date(2021, 8, 30),
	},
	{
		name: "JIT puchar o nic",
		date: new Date(2021, 9, 11),
	},
];
const Active = () => {
	return (
		<div className="boxscoreBody">
			<div className="boxscoreHeader">
				<span>Active tournaments</span>
				<p>Tournaments in progress</p>
			</div>
			<div className="tournament">
				{Active_tournament.map((t) => (
					<ActiveTournament
						name={t.name}
						date={t.date}
					/>
				))}
			</div>
		</div>
	);
};

export default Active;
