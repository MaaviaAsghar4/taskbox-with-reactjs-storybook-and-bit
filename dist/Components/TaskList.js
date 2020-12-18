import React, { useState } from "react";
import "../App.css";
import Task from "./Task";
const TaskList = () => {
    let [taskList, setTaskList] = useState([]);
    let [taskValue, setTaskValue] = useState("");
    const handleCompletedTask = (index, id) => {
        let newList = [...taskList];
        let CompletedList = newList.map((task) => {
            return task.id === id ? Object.assign(Object.assign({}, task), { state: "TASK_COMPLETED" }) : task;
        });
        setTaskList(CompletedList);
    };
    const handlePinnedTask = (index, id) => {
        let newList = [...taskList];
        let PinnedList = newList.map((task) => {
            return task.id === id ? Object.assign(Object.assign({}, task), { state: "TASK_PINNED" }) : task;
        });
        setTaskList(PinnedList);
        console.log(id);
    };
    const orderingTasks = [
        ...taskList.filter((task) => task.state === "TASK_PINNED"),
        ...taskList.filter((task) => task.state !== "TASK_PINNED"),
    ];
    const setTasks = (e) => {
        setTaskValue(e.target.value);
    };
    const addTask = () => {
        const newTask = {
            id: Math.floor(Math.random() * 333333333333),
            title: taskValue,
            state: "TASK_DEFAULT",
        };
        setTaskList((tasks) => {
            return [newTask, ...tasks];
        });
        setTaskValue("");
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "add-task" },
            React.createElement("input", { className: "input-task", type: "text", value: taskValue, onChange: (e) => setTasks(e) }),
            React.createElement("button", { className: "pin-btn", onClick: addTask }, "Add Task")),
        orderingTasks.length !== 0 ? (orderingTasks.map((task, index) => {
            return (React.createElement(Task, { key: task.id, task: task, index: index, handleCompletedTask: handleCompletedTask, handlePinnedTask: handlePinnedTask }));
        })) : (React.createElement("div", { className: "flex-task" }, "No Tasks at the moment"))));
};
export default TaskList;
