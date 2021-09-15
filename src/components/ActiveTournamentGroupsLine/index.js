import React, { useState } from "react";
import "./style.scss";
const GroupsTableLine = ({
	team1Name,
    team2Name,
    score
}) => {
	return (
		<div key={`${team1Name}-${team2Name}`} className="groupLine">
			<div className="groupTeamName">
				<p >
					{team1Name}
				</p>
			</div>
			<div className="scorePlace">
				{score ? <><p>{score[0]}</p><p>{score[1]}</p><p>{score[2]}</p></> : <><div className="greySquare"></div>:<div className="greySquare"></div></>}
			</div>
            <div className="groupTeamName">
				<p >
					{team1Name}
				</p>
			</div>
		</div>
	);
};

export default GroupsTableLine;
