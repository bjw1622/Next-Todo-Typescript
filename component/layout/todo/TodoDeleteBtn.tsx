import React from "react";

const TodoDeleteBtn = (props: { id: String; delete: (id: String) => {} }) => {
  const DeleteList = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
    }
  };
  return <button onClick={() => props.delete(props.id)}>삭제</button>;
};
export default TodoDeleteBtn;
