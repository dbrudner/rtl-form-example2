import React, { useState } from 'react';

export default function Login() {
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = async e => {
		e.preventDefault();
		try {
			await fetch('/login', {
				method: 'POST',
				body: JSON.stringify({ user, pass })
			});

			await setIsLoggedIn(true);
		} catch (err) {
			throw err;
		}
	};

	return (
		<form onSubmit={login}>
			<div>
				<label style={{ marginRight: '30px' }} htmlFor="user">
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
				<label style={{ marginRight: '30px' }} htmlFor="pass">
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
			{isLoggedIn && <p>You are logged in</p>}
		</form>
	);
}
