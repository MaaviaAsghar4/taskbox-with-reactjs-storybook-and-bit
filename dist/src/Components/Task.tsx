import React from "react";
import { taskProp } from "../Types/type";
import "../App.css";

const Task: React.FC<taskProp> = ({
  task: { id, title, state },
  index,
  handlePinnedTask,
  handleCompletedTask,
}) => {
  return (
    <div className="flex-task">
      <div>
        <span className={state === "TASK_COMPLETED" ? "completed" : ""}>
          {title}
        </span>
      </div>
      <div>
        {state !== "TASK_PINNED" && (
          <button
            className="pin-btn"
            onClick={() => handlePinnedTask(index, id)}
          >
            Pin
          </button>
        )}
        <button
          className="complete-btn"
          onClick={() => handleCompletedTask(index, id)}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Task;
