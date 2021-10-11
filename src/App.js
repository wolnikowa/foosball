import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import DefaultPage from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Boxscore from "./components/BoxScore";
import ActiveTournamentBody from "./components/ActiveTournamentsBody";
import "./globalStyles.scss";
import GroupsTable from "./components/ActiveTournamentGroups";
import TournamentEdition from "./components/TournamentEdition";
import TeamList from "./components/Teams";
import ActiveTournaments from "./components/ActiveTournaments";
import Tournament from "./components/Tournament";
import TournamentLadder from "./components/TournamentLadder";
import GroupResults from "./components/GroupResults";

const App = () => (
	<IntlProvider locale="pl" defaultLocale="pl">
		<Router>
			<div>
				<Header />
				<Nav />
				<div className="contentPage">
					<Switch>
						<Route exact path="/">
							<DefaultPage />
							<Boxscore />
						</Route>
						<Route exact path="/Active-tournament">
							<ActiveTournamentBody />
							<TournamentEdition />
							<TeamList />
						</Route>
						<Route exact path="/Active-tournament/tournament-groups">
							<Tournament />
							<GroupsTable />
						</Route>
						<Route exact path="/Active-tournament/tournament-group-results">
							<Tournament />
							<GroupResults />
						</Route>
						<Route exact path="/Active-tournament/tournament-table">
							<Tournament />
							<TournamentLadder />
						</Route>
					</Switch>
				</div>
			</div>

		</Router>
	</IntlProvider>
);

export default App;

