import React, { useState } from "react";

import { AddWorkItem, WorkItem } from "../";

import "./style.css";

export const ToDoList = (props) => {
  const [taskComponent, setTaskComponent] = useState([]);

  const handleAddTask = (task) => {
    let newTask = {
      id: taskComponent.length + 1,
      value: task,
    };
    if (task) {
      setTaskComponent([...taskComponent, newTask]);
    }
  };

  const handleClearTasksBtn = () => {
    setTaskComponent([]);
  };

  const handleDoneBtn = (id) => {
    let filteredArr = taskComponent.filter((element) => element.id !== id);
    setTaskComponent([...filteredArr]);
  };

  return (
    <div className="container">
      <AddWorkItem
        className="header-input"
        handleAddTask={handleAddTask}
        handleClearTasksBtn={handleClearTasksBtn}
      ></AddWorkItem>
      <div>
        {taskComponent &&
          taskComponent.map((m) => {
            return (
              <WorkItem
                key={m.id}
                taskValue={m.value}
                handleDoneBtn={handleDoneBtn}
                taskId={m.id}
              ></WorkItem>
            );
          })}
      </div>
    </div>
  );
};
