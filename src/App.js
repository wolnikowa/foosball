import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import DefaultPage from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "./globalStyles.scss";
import ActiveTournaments from "./components/ActiveTournaments";
import InnerNav from "./components/InnerNav";
import TournamentLadder from "./components/TournamentLadder";
import Tournament from "./components/Tournament";

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
						</Route>
						<Route exact path="/Active-tournament">
							<ActiveTournaments />
						</Route>
						<Route exact path="/Active-tournament/tournament-groups">
							<Tournament />
						</Route>
						<Route exact path="/Active-tournament/tournament-group-results">
							<Tournament />
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
