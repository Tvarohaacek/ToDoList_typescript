import React, { useState, useEffect } from 'react';
import Calendar from './ToDoList/Calendar';
import TeamMemberForm from './ToDoList/TeamMemberForm';
import TaskForm from './ToDoList/TaskForm';
import TeamMemberList from './ToDoList/TeamMemberList';
import TaskList from './ToDoList/TaskList';
import { Member } from './ToDoList/Member';
import { Task } from './ToDoList//Task';
import './ToDoList/styles.css';

const App: React.FC = () => {
    const [teamMembers, setTeamMembers] = useState<Member[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    useEffect(() => {
        // Load data from sessionStorage on initial render
        const storedMembers = JSON.parse(sessionStorage.getItem('teamMembers') || '[]');
        const storedTasks = JSON.parse(sessionStorage.getItem('tasks') || '[]').map((task: Task) => ({
            ...task,
            dueDate: new Date(task.dueDate)
        }));

        setTeamMembers(storedMembers);
        setTasks(storedTasks);
    }, []);

    const addMember = (member: Member) => {
        const updatedMembers = [...teamMembers, { ...member, id: Date.now() }];
        setTeamMembers(updatedMembers);
        sessionStorage.setItem('teamMembers', JSON.stringify(updatedMembers));
    };

    const addTask = (task: Omit<Task, 'id' | 'isCompleted'>) => {
        const newTask: Task = {
            ...task,
            id: Date.now(),
            isCompleted: false
        };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const markTaskAsCompleted = (taskId: number) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, isCompleted: true } : task
        );
        setTasks(updatedTasks);
        sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <div className="app-container">
            <Calendar
                currentDate={currentDate}
                onDateChange={setCurrentDate}
            />
            <div className="row">
                <div className="col">
                    <h2>Team Members</h2>
                    <TeamMemberForm onAddMember={addMember} />
                    <TeamMemberList
                        members={teamMembers}
                    />
                </div>
                <div className="col">
                    <h2>Tasks</h2>
                    <TaskForm
                        members={teamMembers}
                        onAddTask={addTask}
                    />
                    <TaskList
                        tasks={tasks}
                        members={teamMembers}
                        currentDate={currentDate}
                        onTaskComplete={markTaskAsCompleted}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;