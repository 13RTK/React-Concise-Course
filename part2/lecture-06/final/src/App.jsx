import { useState } from "react";
import "./App.css";

import AppInput from "./AppInput";
import AppButton from "./AppButton";

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
        <AppInput
          className={usernameClass}
          type="text"
          value={username}
          setState={setUsername}
        />
        <br />
        <AppInput
          className={passwordClass}
          type="password"
          value={password}
          setState={setPassword}
        />

        <br />
        <AppButton>
          <span style={{ color: "red" }}>Login</span>
        </AppButton>
        <AppButton>Register</AppButton>
      </form>
    </main>
  );
}

export default App;
