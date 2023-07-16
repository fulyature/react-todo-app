import "./App.css";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState(null);
  return (
    <div className="App">
      <div className="todo-app">
        <input onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleAdd}>ToDo Add</button>
      </div>
    </div>
  );
}

export default App;
