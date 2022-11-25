import React from "react";

import "./style.css";

export const WorkItem = ({ taskValue, taskId, handleDoneBtn }) => {
  return (
    <div className="card text-center ">
      <div className="card-header ">Task</div>
      <div className="card-body">
        <h5 className="card-title">{taskValue}</h5>
        <button
          onClick={() => handleDoneBtn(taskId)}
          className="btn btn-primary done-btn"
        >
          Done
        </button>
      </div>
    </div>
  );
};
