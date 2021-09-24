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


							<Boxscore/>

							
							<GroupsTable />
						
						</Route>
					</Switch>
				</div>
			</div>


			<Switch>
						<Route exact path="/Active-tournament">
							
							<ActiveTournamentBody />
							<TournamentEdition />
							<TeamList />
  
						</Route>
					</Switch>

		</Router>
	</IntlProvider>
);

export default App;
