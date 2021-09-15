import React from "react";
import Team from "../TeamsBody";
import "./styles.scss";



const TeamMembers = [
	{
        team_name: "Analitycy",
		name1: "Wiktoria ",
		name2: "Julia ",
		

	},
	{
        team_name: "Devopsi",
		name1: "Roman ",
		name2: "Roman2 ",
		

	},
   
];
const TeamList= () => {
	return (
		<div className="boxscoreBody">
			<div className="boxscoreHeader">
				<span>Teams</span>
				<p>Teams management</p>
			</div>
		
				<div className="tournament">
				{TeamMembers.map((match) => (
					<Team
                        team_name={match.team_name}
						name1={match.name1}
						name2={match.name2}
						
						
					/>
				
				))}
				</div>
		
		</div>
	);
};

export default TeamList;