import { useState } from "react";
import "./styles.css";
import Todo from "./Todo";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      description: todo
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };
  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="write todo task..."
        />
        <button onClick={(e) => handleAddTodo(e)}> Add Todo </button>
      </form>

      <button onClick={() => setCount((prev) => prev + 1)}> Increment </button>
      {count}
      <Todo todos={todos} />
    </div>
  );
}
