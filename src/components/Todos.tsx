import React from "react";
import Todo from "../models/todo";
import ListItem from "./ListItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <ListItem item={item} />
      ))}
    </ul>
  );
};

export default Todos;
