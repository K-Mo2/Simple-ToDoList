import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputText = useRef<HTMLInputElement>(null);
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTodoText = todoInputText.current!.value;

    if (enteredTodoText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredTodoText);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor="text">New Todo</label>
      <input type="text" name="text" id="text" ref={todoInputText} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
