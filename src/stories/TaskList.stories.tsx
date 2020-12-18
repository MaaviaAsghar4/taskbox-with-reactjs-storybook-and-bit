import React from "react";
import TaskList from "../Components/TaskList";

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [
    (story: any) => <div style={{ padding: "3rem" }}>{story()}</div>,
  ],
};

export const Default = () => <TaskList />;
