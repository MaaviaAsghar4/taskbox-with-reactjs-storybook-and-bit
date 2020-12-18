import React from "react";
import "../App.css";
const Task = ({ task: { id, title, state }, index, handlePinnedTask, handleCompletedTask, }) => {
    return (React.createElement("div", { className: "flex-task" },
        React.createElement("div", null,
            React.createElement("span", { className: state === "TASK_COMPLETED" ? "completed" : "" }, title)),
        React.createElement("div", null,
            state !== "TASK_PINNED" && (React.createElement("button", { className: "pin-btn", onClick: () => handlePinnedTask(index, id) }, "Pin")),
            React.createElement("button", { className: "complete-btn", onClick: () => handleCompletedTask(index, id) }, "Done"))));
};
export default Task;
