export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    assignedMembers: string[];
    isCompleted: boolean;
}

export default Task;