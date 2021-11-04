import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import TodosContext from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoInputText = useRef<HTMLInputElement>(null);
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTodoText = todoInputText.current!.value;

    if (enteredTodoText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredTodoText);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <label htmlFor="text">New Todo</label>
      <input type="text" name="text" id="text" ref={todoInputText} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
