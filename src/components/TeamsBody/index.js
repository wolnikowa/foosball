import React from "react";

import EditIcon from '@material-ui/icons/Edit';
const Team = ({teamName, name1, name2}) => {
	return (
		<div className="box">
			<div className="boxHeader">
				<p>{teamName}</p>
                <span>{name1}</span>
                <span>{name2}</span>
				<EditIcon/>
			</div>
		</div>
	);
};

export default Team;
