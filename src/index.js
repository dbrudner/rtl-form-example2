import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export const Login = ({ updateCurrentUser = console.log }) => {
	return (
		<div className="App">
			<h1>Login</h1>
			<Login />
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);
