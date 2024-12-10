import React, { useState } from 'react';
import { Task, TeamMember } from './models';

interface TaskProps {
    task?: Task;
    teamMembers: TeamMember[];
    onCompleteTask?: (taskId: number) => void;
    onAddTask: (newTask: Task) => void;
    isFormVisible?: boolean;  // Add this optional prop
}

export const TaskComponent: React.FC<TaskProps> = ({
                                                       task,
                                                       teamMembers,
                                                       onCompleteTask,
                                                       onAddTask,
                                                       isFormVisible = false,  // Default to false if not provided
                                                   }) => {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [assignedMembers, setAssignedMembers] = useState<TeamMember[]>([]);

    const handleAddTask = () => {
        const newTask: Task = {
            id: Date.now(),  // Generate a unique ID
            title: newTaskTitle,
            isCompleted: false,
            description: '',
            assignedMembers: assignedMembers,
        };
        onAddTask(newTask);
        setNewTaskTitle('');
        setAssignedMembers([]);
    };

    const handleCompleteTask = () => {
        if (task && onCompleteTask) {
            onCompleteTask(task.id);
        }
    };

    // Update assigned members when selection changes
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIds = Array.from(e.target.selectedOptions, option => parseInt(option.value));
        const selectedMembers = teamMembers.filter(member => selectedIds.includes(member.id));
        setAssignedMembers(selectedMembers);
    };

    return (
        <div>
            {task ? (
                <div>
                    <h3>{task.title}</h3>
                    <button onClick={handleCompleteTask}>Mark as Complete</button>
                </div>
            ) : null}

            {/* Conditionally render the form if isFormVisible is true */}
            {isFormVisible && (
                <div>
                    <h3>Add New Task</h3>
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                    />
                    <select
                        multiple
                        value={assignedMembers.map((member) => member.id.toString())}
                        onChange={handleSelectChange}
                    >
                        {teamMembers.map((member) => (
                            <option key={member.id} value={member.id.toString()}>
                                {member.name}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleAddTask}>Add Task</button>
                </div>
            )}
        </div>
    );
};
