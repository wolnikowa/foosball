import React from "react";
import "./styles.scss";
import jitLogo from "./../../assets/jit_logo.svg";
import defaultUser from "./../../assets/default_user.jpg";



class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="content">
					<img src={jitLogo} className="right" />
					<div className="right">
						<span>Foosball</span>
					</div>
					<button>ADD NEW GAME</button>
					<img src={defaultUser} className="left" />
				</div>
			</div>
		);
	}
}
export default Header;
