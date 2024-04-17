import { useState } from "react";
import UsernameInput from "./UsernameInput";
import "./App.css";
import PasswordInput from "./PasswordInput";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameClass = username.length <= 5 ? "input-error" : "input";
  const passwordClass = password.length <= 5 ? "input-error" : "input";

  function handleSubmit(event) {
    event.preventDefault();

    if (usernameClass === "input-error" || passwordClass === "input-error") {
      return;
    }

    console.log("username: ", username);
    console.log("password: ", password);

    setUsername("");
    setPassword("");
  }

  return (
    <main>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <UsernameInput
          className={usernameClass}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <PasswordInput
          className={passwordClass}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <br />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </main>
  );
}

export default App;
