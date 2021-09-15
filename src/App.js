import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import DefaultPage from "./components/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "./globalStyles.scss";
import GroupsTable from "./components/ActiveTournamentGroups";

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
							{/* temporarily */}
							<GroupsTable />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	</IntlProvider>
);

export default App;
