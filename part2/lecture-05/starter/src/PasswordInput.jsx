function PasswordInput({ className, value, onChange }) {
  return (
    <input
      className={className}
      type="password"
      value={value}
      onChange={onChange}
    />
  );
}

export default PasswordInput;
