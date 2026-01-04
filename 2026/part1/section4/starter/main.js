function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert(`Username: ${username} Password: ${password}`);

    setUsername("");
    setPassword("");
  }

  return (
    <main>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <br />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
