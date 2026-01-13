function CircleProperty({ children, value, setValue }) {
  return (
    <label>
      {children}
      <input
        type="number"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </label>
  );
}

export default CircleProperty;
