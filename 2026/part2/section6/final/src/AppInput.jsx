function AppInput({ type, value, className, setValue }) {
  return (
    <input
      type={type}
      value={value}
      className={className}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export default AppInput;
