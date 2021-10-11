import React from "react";


const Edition = ({name, value}) => {
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
