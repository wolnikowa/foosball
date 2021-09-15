import React from "react";
import "./styles.scss";
import EditIcon from '@material-ui/icons/Edit';
const Team = ({team_name, name1, name2}) => {
	return (
		<div className="box">
			<div className="boxHeader">
		
				<p>{team_name}</p>
                <span>{name1}</span>
                <span>{name2}</span>

                
				<EditIcon/>
			

			

			</div>
		
			
		</div>
	);
};

export default Team;
