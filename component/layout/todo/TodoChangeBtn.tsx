import React from "react";
const TodoChangeBtn = (props: { id: string; change: (id: string) => {} }) => {
  return (
    <button
      onClick={() => {
        props.change(props.id);
      }}
    >
      수정
    </button>
  );
};
export default TodoChangeBtn;
