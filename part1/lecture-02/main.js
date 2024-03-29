function AppContent() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (username === "" || password === "") {
      alert('"username" and "password" are required');
      return;
    }

    console.log("username: ", username);
    console.log("password: ", password);

    setUsername("");
    setPassword("");
  }

  // JSX syntax
  return (
    <main>
      <h2>Login Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center" }}
      >
        <input
          className="input"
          type="text"
          value={username}
          onChange={(event) =>
            setUsername(event.target.value)
          }
        />
        <br />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        <br />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
