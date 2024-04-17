function AppInput({ value, setState, children }) {
  return (
    <label>
      {children}
      <input
        type="number"
        value={value}
        onChange={(event) => setState(event.target.value)}
      />
    </label>
  );
}

export default AppInput;
