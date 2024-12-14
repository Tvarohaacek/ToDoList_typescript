import React from 'react';
import { Task } from './Task';
import { Member } from './Member';

interface TaskListProps {
    tasks: Task[];
    members: Member[];
    currentDate: Date;
    onTaskComplete: (taskId: string) => void; // Změna na string
}

const TaskList: React.FC<TaskListProps> = ({
                                               tasks,
                                               members,
                                               currentDate,
                                               onTaskComplete
                                           }) => {
    const isTaskOverdue = (task: Task) => {
        return !task.isCompleted && currentDate > task.dueDate;
    };

    const getAssignedMemberNames = (assignedMemberIds: string[]) => {
        return assignedMemberIds
            .map(id => {
                const member = members.find(m => m.id === id);
                return member ? member.name : 'Unknown';
            })
            .join(', ');
    };

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <li
                    key={task.id}
                    className={`
                        ${task.isCompleted ? 'completed' : ''} 
                        ${isTaskOverdue(task) ? 'overdue' : ''}
                    `}
                >
                    <div className="task-header">
                        <strong>{task.title}</strong>
                        {!task.isCompleted && (
                            <button
                                onClick={() => {
                                    try {
                                        onTaskComplete(task.id);
                                    } catch (error) {
                                        console.error('Error marking task as completed:', error);
                                        // Zobrazit uživateli chybovou hlášku nebo jinak reagovat na chybu
                                    }
                                }}
                                className="btn complete-btn"
                                disabled={task.isCompleted}
                            >
                                {isTaskOverdue(task) ? 'Overdue' : 'Complete Task'}
                            </button>
                        )}
                    </div>
                    <p>{task.description}</p>
                    <div className="task-meta">
                        <p>
                            <strong>Due:</strong> {task.dueDate.toLocaleDateString()}
                        </p>
                        <p>
                            <strong>Assigned to:</strong> {getAssignedMemberNames(task.assignedMembers)}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;