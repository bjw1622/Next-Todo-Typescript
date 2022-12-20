import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (props: {
  todoListAR: Array<{ id: string; inputValue: string; check: boolean }>;
  change: Function;
  delete: {};
  checkClick: {};
}) => {
  return (
    <div>
      {props.todoListAR.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item.inputValue}
            delete={props.delete}
            id={item.id}
            check={item.check}
            checkClick={props.checkClick}
            change={props.change}
          />
        );
      })}
    </div>
  );
};
export default TodoBoard;
