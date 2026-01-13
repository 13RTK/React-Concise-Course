/*
  1. Implement adding and deleting todo items.
  2. Implement completing todo items (completed items should be moved to the bottom).
*/

function MyApp() {
  return (
    <main>
      <h1>React Todo List</h1>
      <input type="text" placeholder="Add item into as todo" />
      <button>Add</button>
      <ul>
        <li className="deleted">
          <input type="checkbox" />
          Learn React <button>delete</button>
        </li>
        <li>
          Learn Angular <button>delete</button>
        </li>
        <li>
          Learn Vue <button>delete</button>
        </li>
        <li>
          Learn Svelte <button>delete</button>
        </li>
      </ul>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
