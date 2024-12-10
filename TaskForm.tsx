import React, { useState } from 'react';
import { Member } from './Member';
import { Task } from './Task';

interface TaskFormProps {
    members: Member[];
    onAddTask: (task: Omit<Task, 'id' | 'isCompleted'>) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ members, onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [assignedMembers, setAssignedMembers] = useState<number[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validace formuláře
        if (!title.trim() || !description.trim() || !dueDate || assignedMembers.length === 0) {
            alert('Please fill in all fields and assign at least one member');
            return;
        }

        // Vytvoření úkolu
        const newTask: Omit<Task, 'id' | 'isCompleted'> = {
            title,
            description,
            dueDate: new Date(dueDate),
            assignedMembers
        };

        // Předání úkolu nadřazené komponentě
        onAddTask(newTask);

        // Reset formuláře
        setTitle('');
        setDescription('');
        setDueDate('');
        setAssignedMembers([]);
    };

    const handleMemberSelect = (memberId: number) => {
        setAssignedMembers(prev =>
            prev.includes(memberId)
                ? prev.filter(id => id !== memberId)
                : [...prev, memberId]
        );
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                required
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                required
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="form-control"
                required
            />

            <div className="member-select">
                <h4>Assign Members</h4>
                {members.map(member => (
                    <label key={member.id} className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={assignedMembers.includes(member.id)}
                            onChange={() => handleMemberSelect(member.id)}
                        />
                        {member.name}
                    </label>
                ))}
            </div>

            <button type="submit" className="btn">Create Task</button>
        </form>
    );
};

export default TaskForm;