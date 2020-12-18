import React, { useState } from "react";
import "../App.css";
import { TaskType } from "../Types/type";
import Task from "./Task";
const TaskList = () => {
  let [taskList, setTaskList] = useState<TaskType[]>([]);
  let [taskValue, setTaskValue] = useState<string>("");
  const handleCompletedTask = (index: number, id: number) => {
    // let newList = [...taskList];
    // newList[index].state = "TASK_COMPLETED";
    let handledTask = taskList.filter((task: TaskType) => task.id === id);
    handledTask.state = "TASK_COMPLETED";
    let handleOtherTask = taskList.filter((task: TaskType) => task.id !== id);
    console.log(handledTask, handleOtherTask);
    // setTaskList((tasks: any) => {
    //   return newList;
    // });
  };
  const handlePinnedTask = (index: number, id: number) => {
    // let newList = [...taskList];
    // console.log(index);
    // newList[index].state = "TASK_PINNED";
    // setTaskList((tasks: any) => {
    //   return newList;
    // });
    console.log(id);
  };
  const orderingTasks = [
    ...taskList.filter((task: TaskType) => task.state === "TASK_PINNED"),
    ...taskList.filter((task: TaskType) => task.state !== "TASK_PINNED"),
  ];
  const setTasks = (e: any) => {
    setTaskValue(e.target.value);
  };

  const addTask = () => {
    const newTask: TaskType = {
      id: Math.floor(Math.random() * 333333333333),
      title: taskValue,
      state: "TASK_DEFAULT",
    };

    setTaskList((tasks: any) => {
      return [newTask, ...tasks];
    });
    setTaskValue("");
  };
  return (
    <div>
      <div className="add-task">
        <input
          className="input-task"
          type="text"
          value={taskValue}
          onChange={(e) => setTasks(e)}
        />
        <button className="pin-btn" onClick={addTask}>
          Add Task
        </button>
      </div>
      {orderingTasks.length !== 0 ? (
        orderingTasks.map((task: TaskType, index: number) => {
          return (
            <Task
              key={task.id}
              task={task}
              index={index}
              handleCompletedTask={handleCompletedTask}
              handlePinnedTask={handlePinnedTask}
            />
          );
        })
      ) : (
        <div className="flex-task">No Tasks at the moment</div>
      )}
    </div>
  );
};

export default TaskList;
