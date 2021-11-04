import React from "react";
import Todo from "../models/todo";
import ListItem from "./ListItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <ListItem
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          item={item}
        />
      ))}
    </ul>
  );
};

export default Todos;
