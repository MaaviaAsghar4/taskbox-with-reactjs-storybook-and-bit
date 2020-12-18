export interface taskProp {
    task: TaskType;
    index: number;
    handlePinnedTask: (index: number, id: number) => void;
    handleCompletedTask: (index: number, id: number) => void;
}
export interface TaskType {
    id: number;
    title: string;
    state: string;
}
