function UsernameInput({ username, usernameClass, setUsername }) {
  return (
    <input
      type="text"
      value={username}
      className={usernameClass}
      onChange={(event) => setUsername(event.target.value)}
    />
  );
}

export default UsernameInput;
