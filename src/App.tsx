import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
