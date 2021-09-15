import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import DefaultPage from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
<<<<<<< Updated upstream
=======
import Boxscore from "./components/BoxScore";
import ActiveTournamentBody from "./components/ActiveTournamentsBody";


>>>>>>> Stashed changes
import "./globalStyles.scss";

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
<<<<<<< Updated upstream
=======
							<Boxscore/>
>>>>>>> Stashed changes
						</Route>
					</Switch>
				</div>
			</div>
<<<<<<< Updated upstream
=======
			<Switch>
						<Route exact path="/active">
							
							<ActiveTournamentBody/>
						</Route>
					</Switch>
>>>>>>> Stashed changes
		</Router>
	</IntlProvider>
);

export default App;
