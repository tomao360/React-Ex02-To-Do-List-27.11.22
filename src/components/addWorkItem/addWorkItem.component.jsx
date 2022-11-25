import React, { useState } from "react";

import "./style.css";

export const AddWorkItem = ({ handleAddTask, handleClearTasksBtn }) => {
  const [task, setTask] = useState("");

  const handleAddNewTaskData = (onChangeEvent) => {
    let newTask = onChangeEvent.target.value;
    setTask(newTask);
  };

  return (
    <div>
      <h1>My To Do List</h1>
      <div className="input-group">
        <input
          type="text"
          className="form-control input-task"
          placeholder="Add New Task"
          aria-label="Recipient's username with two button addons"
          onChange={handleAddNewTaskData}
        />
        <button
          onClick={() => {
            if (task) {
              handleAddTask(task);
              setTask("");
              document
                .querySelectorAll("input")
                .forEach((input) => (input.value = ""));
            }
          }}
          className="btn btn-outline-secondary task-btn"
          type="button"
        >
          Add Task
        </button>
        <button
          onClick={handleClearTasksBtn}
          className="btn btn-danger clear"
          type="button"
        >
          Clear All Tasks
        </button>
      </div>
    </div>
  );
};
