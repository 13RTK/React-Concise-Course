function AppContent() {
  const [text, setText] = React.useState("");

  return (
    <main>
      <input
        onChange={(event) => setText(event.target.value)}
      />
      <p>{text}</p>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
