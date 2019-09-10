import React, { useState } from "react";

export const Login = ({ updateCurrentUser = console.log }) => {
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");

	const login = async e => {
		e.preventDefault();

		try {
			const res = await fetch("/login", {
				method: "POST",
				body: JSON.stringify({ user, pass }),
			});

			updateCurrentUser(await res.json());
		} catch (err) {
			throw err;
		}
	};

	return (
		<form onSubmit={login}>
			<div>
				<label style={{ marginRight: "30px" }} htmlFor="user">
					Username
				</label>
				<input
					type="text"
					value={user}
					onChange={e => setUser(e.target.value)}
					id="user"
				/>
			</div>
			<div>
				<label style={{ marginRight: "30px" }} htmlFor="pass">
					Pass
				</label>
				<input
					type="password"
					value={pass}
					onChange={e => setPass(e.target.value)}
					id="pass"
				/>
			</div>
			<button>Login</button>
		</form>
	);
};
