import React from "react";
import "./styles.scss";

const Edition = ({ name, value}) => {
	return (
		<div className="box">
			<div className="boxHeader">
		
				<p>{name}</p>
                <span>{value} </span>
			

			

			</div>
		
			
		</div>
	);
};

export default Edition;
