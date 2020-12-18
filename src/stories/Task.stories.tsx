import React from "react";
import Task from "../Components/Task";
import { Story } from "@storybook/react/types-6-0";
import { taskProp } from "../Types/type";

export default {
  component: Task,
  title: "Task",
};

const Template: Story<taskProp> = (args) => <Task {...args} />;
export const Default = Template.bind({});
Default.args = {
  task: {
    id: 1,
    title: "test",
    state: "TASK_DEFAULT",
  },
};

export const Completed = Template.bind({});
Completed.args = {
  task: {
    id: 1,
    title: "test",
    state: "TASK_COMPLETED",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: 1,
    title: "test",
    state: "TASK_PINNED",
  },
};
