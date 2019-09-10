import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="App">
      <h1>Login</h1>
      <form>
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
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
