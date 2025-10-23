import { TaskStatus } from "../app/types/TaskStatus";

export interface TaskItem {
    task: string;
    status: TaskStatus;
}