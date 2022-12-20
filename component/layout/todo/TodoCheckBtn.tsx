import React from "react";

const TodoCheckBtn = (props: {
  id: String;
  check: boolean;
  checkClick: (id: String, check: Boolean) => {};
}) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={() => props.checkClick(props.id, props.check)}
        checked={props.check}
      ></input>
      <style jsx>{`
        input {
          width: 30px !important;
        }
      `}</style>
    </>
  );
};
export default TodoCheckBtn;
