import { useState } from "react";
import UsernameInput from "./UsernameInput.jsx";
import PasswordInput from "./PasswordInput.jsx";
import AppInput from "./AppInput.jsx";

function App() {
  const [username, setUsername] = useState("");
  const usernameClass =
    username.length <= 2 && username.length > 0 ? "input-error" : "";

  const [password, setPassword] = useState("");
  const passwordClass =
    password.length <= 2 && password.length > 0 ? "input-error" : "";

  function handleSubmit(event) {
    event.preventDefault();

    if (!username.length || !password.length) {
      alert("Invalid username or password");
      return;
    }

    alert(`Username: ${username} Password: ${password}`);

    setUsername("");
    setPassword("");
  }

  return (
    <main>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <AppInput
          type="text"
          value={username}
          className={usernameClass}
          setValue={setUsername}
        />
        <br />
        <AppInput
          type="password"
          value={password}
          className={passwordClass}
          setValue={setPassword}
        />

        <br />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default App;
