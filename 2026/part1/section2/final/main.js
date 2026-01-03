function App() {
  return (
    <>
      <h1>Hello from React</h1>
      <input type="text" />
      <p></p>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
