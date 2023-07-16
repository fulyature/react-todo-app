import "./App.css";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const handleAdd = () => {
    const newTodo = {
      val: value,
      id: todos.length,
    };

    setTodos([...todos, newTodo]);
    setValue("");
  };

  return (
    <div className="App">
      <div className="todo-app">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleAdd}>ToDo Add</button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.val}</span>
            <button
              onClick={() =>
                setTodos((prev) => prev.filter((item) => item.id !== todo.id))
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
