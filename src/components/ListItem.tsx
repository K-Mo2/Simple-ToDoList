import React from "react";
import { RefactorTriggerReason } from "typescript";
import Todo from "../models/todo";
import classes from "./ListItem.module.css";

const ListItem: React.FC<{ item: Todo; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li
      className={classes.item}
      key={props.item.id}
      onClick={props.onRemoveTodo}
    >
      {props.item.text}
    </li>
  );
};

export default ListItem;
