import React from "react";
import "./styles.scss";
import EditIcon from '@material-ui/icons/Edit';
const BoxscoreMatch = ({ date, name}) => {
	return (
		<div className="box">
			<div className="boxHeader">
		
				<p>{name}</p>
				<span>{date.toISOString().slice(0, 10)}</span>
	<EditIcon/>
			

			</div>
		
			
		</div>
	);
};

export default BoxscoreMatch;
