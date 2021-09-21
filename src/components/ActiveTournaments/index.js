import React from "react";
import "./styles.scss";

// const ActiveTournaments = () => (

//     <div className="pageStyle">
//         Tu zwracamy listę aktywnych turniejów
//         <h1><a href='/Active-tournament/tournament-groups'>Jit Euro</a></h1>
//         <h1>Igrzyska Śmierci</h1>
//     </div>
// );

// export default ActiveTournaments;


import EditIcon from '@material-ui/icons/Edit';
const BoxscoreMatch = ({ date, name }) => {
	return (
		<div className="box">
			<div className="boxHeader">

				<p>{name}</p>
				<span>{date.toISOString().slice(0, 10)}</span>
				<EditIcon />


			</div>


		</div>
	);
};

export default BoxscoreMatch;
