import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import "./dialog.scss";
const mock_data = [
	"Julia Bessman",
	"Wiktoria Wolnik",
	"Alicja Kempa",
	"Ryszard Jakielski",
	"Tomasz Piasek",
	"Matylda Badowska",
];

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

const SignUpDialog = ({ tournamentName, open, handleClose }) => {
	const classes = useStyles();
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");
	const handleChangePlayer1 = (event) => {
		setPlayer1(event.target.value || "");
	};
	const handleChangePlayer2 = (event) => {
		setPlayer2(event.target.value || "");
	};

	return (
		<div>
			<Dialog open={open}>
				<DialogTitle>
					<div className="headerDialogWrapper">
						<p>
							Sign up for{" "}
							<span className="tournamentNameSpan">{tournamentName}</span>!
						</p>
						<div onClick={handleClose} className="close">
							<CloseIcon />
						</div>
					</div>
				</DialogTitle>
				<DialogContent>
					<form className={classes.container}>
						<FormControl className={classes.formControl}>
							<TextField id="standard-basic" label="Team Name" />
						</FormControl>
						<FormControl className={classes.formControl}>
							<TextField id="standard-basic" label="Player 1" />
							{/* <InputLabel id="demo-dialog-select-label">Player 1</InputLabel>
							<Select
								labelId="demo-dialog-select-label"
								id="demo-dialog-select"
								value={player1}
								onChange={handleChangePlayer1}
								required={true}
								input={<Input />}
							>
								{mock_data.map((person) => {
									<MenuItem key={person} value={person}>
										{person}
									</MenuItem>;
								})}
								<MenuItem key={mock_data[1]}>{mock_data[1]}</MenuItem>
							</Select> */}
						</FormControl>{" "}
						<br></br>
						<FormControl className={classes.formControl}>
							<TextField id="standard-basic" label="Player 2" />
							{/* <InputLabel id="demo-dialog-select-label">Player 2</InputLabel>
							<Select
								labelId="demo-dialog-select-label"
								id="demo-dialog-select"
								value={player2}
								onChange={handleChangePlayer2}
								required={true}
								input={<Input />}
							>
								<MenuItem value={"Julia Bessman"}>Julia Bessman</MenuItem>
								<MenuItem value={"Alicja Kempa"}>Alicja Kempa</MenuItem>
								<MenuItem value={"Ryszard Jakielski"}>
									Ryszard Jakielski
								</MenuItem>
							</Select> */}
						</FormControl>
					</form>
				</DialogContent>
				<DialogActions>
					<div className="buttonsActions">
						<button
							color="primary"
							type="submit"
							// disabled={form.isValid}
							onClick={handleClose}
							className="buttonsSignUp"
						>
							SIGN UP
						</button>
						<button
							color="primary"
							onClick={handleClose}
							className="buttonsSignUp"
						>
							CANCEL
						</button>
					</div>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default SignUpDialog;
