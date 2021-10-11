import React from "react";
import BoxscoreMatch from "../BoxscoreMatch";
import "./styles.scss";
import axios from "axios";
import { allTeams } from "../../services/url.txt";

const mock_data_boxscore = [
	{
		date: new Date(2021, 7, 21),
		matchName: "Single match",
		teamName1: "Stażyści smerfy",
		teamName2: "Analitycy rolnicy",
		score: "2:1",
	},
	{
		date: new Date(2021, 7, 21),
		matchName: "Single match",
		teamName1: "FC Devopsy",
		teamName2: "UKK Smacznej Kawusi",
		score: "0:3",
	},
	{
		date: new Date(2021, 7, 20),
		matchName: "Jit CUP 2021",
		teamName1: "One handers",
		teamName2: "Timeports queens",
		score: "1:3",
	},
	{
		date: new Date(2021, 7, 19),
		matchName: "Jit CUP 2021",
		teamName1: "FC Devopsy",
		teamName2: "Niedźwiedź i plik",
		score: "3:1",
	},
	{
		date: new Date(2021, 7, 19),
		matchName: "Jit CUP 2021",
		teamName1: "O&O",
		teamName2: "OBV winners",
		score: "2:1",
	},
	{
		date: new Date(2021, 7, 19),
		matchName: "Single match",
		teamName1: "Piłkarze z Oslo",
		teamName2: "UKK Smacznej kawusi",
		score: "2:3",
	},
];
console.log(axios.get(allTeams))

const Boxscore = () => {
	return (
		<div className="boxscoreBody">
			<div className="boxscoreHeader">
				<span>Boxscore</span>
				<p>Newest matches</p>
			</div>
			<div className="flexBoxes">
				{mock_data_boxscore.map((match) => (
					<BoxscoreMatch
						date={match.date}
						matchName={match.matchName}
						teamName1={match.teamName1}
						teamName2={match.teamName2}
						score={match.score}
					/>
				))}
			</div>
		</div>
	);
};

export default Boxscore;
