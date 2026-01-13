function App() {
  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    const changedText = event.target.value;

    setInputText(changedText);
  }

  return (
    <>
      <h1>Hello from React</h1>
      <input type="text" onChange={handleChange} />
      <p>{inputText}</p>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
