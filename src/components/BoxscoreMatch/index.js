import React from "react";
import "./styles.scss";
const BoxscoreMatch = ({ date, matchName, teamName1, teamName2, score }) => {
	return (
		<div className="box">
			<div className="boxHeaderMatch">
				<span>{date.toISOString().slice(0, 10)}</span>
				<p>{matchName}</p>
			</div>
			<div className="boxBodyMatch">
				<p>{teamName1}</p>
				<p className="score">{score}</p>
				<p>{teamName2}</p>
			</div>
		</div>
	);
};

export default BoxscoreMatch;
