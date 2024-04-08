/*
  1. Implement adding and deleting todo items.
  2. Implement completing todo items (completed items should be moved to the bottom).
*/

function MyApp() {
  const [currentTodoItem, setCurrentTodoItem] = React.useState("");
  const [todoList, setTodoList] = React.useState([
    {
      id: 1,
      item: "Learn React",
      isCompleted: false,
    },
    {
      id: 2,
      item: "Learn Svelte",
      isCompleted: true,
    },
  ]);

  const sortTodo = (o1, o2) => {
    if (o1.isCompleted !== o2.isCompleted) {
      return o1.isCompleted ? 1 : -1;
    }

    return o1.id - o2.id;
  };

  function handleAddTodo() {
    if (!currentTodoItem.length) {
      alert("Please enter a todo item");
      return;
    }

    const addedList = [
      ...todoList,
      {
        id: Math.random() + Date.now(),
        item: currentTodoItem,
        isCompleted: false,
      },
    ];
    addedList.sort(sortTodo);

    setTodoList(addedList);

    setCurrentTodoItem("");
  }

  function handleDeleteTodo(id) {
    const deletedTodoList = todoList.filter((todo) => todo.id !== id);
    deletedTodoList.sort(sortTodo);

    setTodoList(deletedTodoList);
  }

  function handleToggleTodo(id) {
    const toggledTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }

      return todo;
    });

    toggledTodoList.sort(sortTodo);

    setTodoList(toggledTodoList);
  }

  return (
    <main>
      <h1>React Todo List</h1>
      <input
        type="text"
        placeholder="Add item into as todo"
        value={currentTodoItem}
        onChange={(event) => setCurrentTodoItem(event.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todoList.map((todo) => (
          <li className={todo.isCompleted ? "deleted" : ""} key={todo.id}>
            <input
              type="checkbox"
              defaultChecked={todo.isCompleted}
              onClick={() => handleToggleTodo(todo.id)}
            />
            {todo.item}
            <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
