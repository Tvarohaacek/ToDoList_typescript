export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    assignedMembers: number[];
    isCompleted: boolean;
}