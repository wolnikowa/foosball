import React, { useState } from "react";
import "./style.scss";
import SignUpDialog from "../../dialog/SignUpDialog";
const SignUpBox = ({
	tournamentName,
	tournamentStartDate,
	tournamentStartTime,
	DeadlineDate,
}) => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const handleClick = () => {
		setDialogOpen(true);
	};
	const handleClose = () => {
		setDialogOpen(false);
	};
	return (
		<div key={tournamentName}>
			<div className="TournamentBox">
				<div className="SignUp">
					<p onClick={() => handleClick()}>
						Sign up for tournament <span>{tournamentName}</span>!
					</p>
				</div>
				<div className="dateTime">
					{tournamentStartDate}, {tournamentStartTime}
				</div>
				<div className="deadline">Deadline: {DeadlineDate}</div>
			</div>
			{dialogOpen && (
				<SignUpDialog
					tournamentName={tournamentName}
					open={dialogOpen}
					handleClose={handleClose}
				/>
			)}
		</div>
	);
};

export default SignUpBox;
