import React from "react";
import SignUpBox from "../SignUpForTournamentBox";

const MOCK_DATA = [
	{
		tournamentName: "JIT Euro",
		tournamentStartDate: new Date(2021, 8, 15),
		tournamentStartTime: "16:00",
		DeadlineDate: new Date(2021, 8, 14),
	},
	{
		tournamentName: "JIT CUP",
		tournamentStartDate: new Date(2021, 8, 30),
		tournamentStartTime: "16:00",
		DeadlineDate: new Date(2021, 8, 29),
	},
	{
		tournamentName: "JIT Hunger Games",
		tournamentStartDate: new Date(2021, 9, 11),
		tournamentStartTime: "16:00",
		DeadlineDate: new Date(2021, 9, 9),
	},
];

const DefaultPage = () => {
	return (
		<>
			{MOCK_DATA.map((tournament) => (
				<SignUpBox
					tournamentName={tournament.tournamentName}
					tournamentStartDate={tournament.tournamentStartDate.toDateString()}
					tournamentStartTime={tournament.tournamentStartTime}
					DeadlineDate={tournament.DeadlineDate.toDateString()}
				/>
			))}
		</>
	);
};
export default DefaultPage;
