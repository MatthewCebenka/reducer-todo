import React from "react";

const TodoCard = props => {
  console.log(props.item);
  console.log(props.completed);
  return (
    <div
      key={props.id}
      className={`task${props.completed ? "completed" : ""}`}
      onClick={() => {
        props.dispatch({ type: "TOGGLE_TODO", payload: props.id });
      }}
    >
      <div className="card">
        <div className="card-content">
          <p className="title">{props.item}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;