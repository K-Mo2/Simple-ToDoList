import React from "react";

const NewTodo = () => {
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor="text">New Todo</label>
      <input type="text" name="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
