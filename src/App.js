import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import DefaultPage from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Boxscore from "./components/BoxScore";
import ActiveTournamentBody from "./components/ActiveTournamentsBody";
import "./globalStyles.scss";
import ActiveTournaments from "./components/ActiveTournaments";
import InnerNav from "./components/InnerNav";
import TournamentLadder from "./components/TournamentLadder";
import Tournament from "./components/Tournament";
import GroupResults from "./components/GroupResults";
import GroupsTable from "./components/ActiveTournamentGroups";
import BoxscoreMatch from "./components/BoxscoreMatch";

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
							<ActiveTournaments />
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
			<Switch>
				<Route exact path="/active">
					<ActiveTournamentBody />
				</Route>
			</Switch>
		</Router>
	</IntlProvider>
);

export default App;
