/*
  1. Implement adding and deleting todo items.
  2. Implement completing todo items (completed items should be moved to the bottom).
*/

function MyApp() {
  const [todoList, setTodoList] = React.useState([]);
  const [currentTodo, setCurrentTodo] = React.useState("");

  function handleAddTodo() {
    if (!currentTodo.trim().length) {
      alert("Please enter a todo item");
    }

    const newTodoList = [
      ...todoList,
      {
        id: Math.random() + Date.now(),
        content: currentTodo,
        isCompleted: false,
      },
    ];

    setTodoList(newTodoList);
    setCurrentTodo("");
  }

  function deleteTodo(deleteTodoId) {
    const deletedTodoList = todoList.filter(
      (todo) => todo.id !== Number(deleteTodoId)
    );

    setTodoList(deletedTodoList);
  }

  function toggleTodo(toggleTodoId) {
    const toggledTodoList = todoList.map((todo) => {
      if (todo.id === Number(toggleTodoId)) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }

      return todo;
    });

    sortTodoList(toggledTodoList);
  }

  function sortTodoList(newTodoList) {
    const sortedTodoList = newTodoList.sort((o1, o2) => {
      if (o1.isCompleted !== o2.isCompleted) {
        return o1.isCompleted ? 1 : -1;
      }

      return o1.id - o2.id;
    });

    setTodoList(sortedTodoList);
  }

  return (
    <main>
      <h1>React Todo List</h1>
      <input
        type="text"
        placeholder="Add item into as todo"
        onChange={(e) => setCurrentTodo(e.target.value)}
        value={currentTodo}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todoList.length > 0 &&
          todoList.map((todo) => (
            <li key={todo.id} className={todo.isCompleted ? "deleted" : ""}>
              <input type="checkbox" onChange={() => toggleTodo(todo.id)} />
              {todo.content}{" "}
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
            </li>
          ))}
      </ul>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
