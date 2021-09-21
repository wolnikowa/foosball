import React, { useState } from "react";
import "./style.scss";
import GroupsTableLine from "../ActiveTournamentGroupsLine";

const mock_data=[{
    team1Name: 'FC Devops',
    team2Name: 'One Handers',
    score: null
},{
    team1Name: 'Piłkarze z Oslo',
    team2Name: 'One Handers',
    score: null
},{
    team1Name: 'Piłkarze z Oslo',
    team2Name: 'FC Devops',
    score: '3:1'
},
]
const GroupsTable = () => {
	return (
		<div className="groupTableContent">
			{mock_data.map((groupLine)=>(
                <GroupsTableLine team1Name={groupLine.team1Name} team2Name={groupLine.team2Name} score={groupLine.score} />
            ))}
            
		</div>
	);
};

export default GroupsTable;