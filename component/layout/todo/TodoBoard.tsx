import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = (props: {
  //props=>todolist, change, checkClick, delte
  todoList: [];
  // change: (id: string) => void;
  change: string;
  delete: {};
  checkClick: {};
}) => {
  return (
    <div>
      {props.todoList.map(
        (item: { id: string; inputValue: string; check: boolean }) => {
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
        }
      )}
    </div>
  );
};
export default TodoBoard;
