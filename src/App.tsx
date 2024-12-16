import React, { useState, useEffect } from 'react';
import Calendar from './ToDoList/Calendar';
import TeamMemberForm from './ToDoList/TeamMemberForm';
import TaskForm from './ToDoList/TaskForm';
import TeamMemberList from './ToDoList/TeamMemberList';
import TaskList from './ToDoList/TaskList';
import { Member } from './ToDoList/Member';
import { Task } from './ToDoList/Task';
import './ToDoList/styles.css';

const API_URL = 'http://localhost:3001'; // Base URL for json-server

const App: React.FC = () => {
    const [teamMembers, setTeamMembers] = useState<Member[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    useEffect(() => {
        // Load data from the database on initial render
        const fetchData = async () => {
            try {
                const membersResponse = await fetch(`${API_URL}/teamMembers`);
                const tasksResponse = await fetch(`${API_URL}/tasks`);
                const members = await membersResponse.json();
                const tasks = await tasksResponse.json();

                setTeamMembers(members);
                setTasks(
                    tasks.map((task: Task) => ({
                        ...task,
                        dueDate: task.dueDate ? new Date(task.dueDate) : null,
                    }))
                );
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Nastavení intervalu pro aktualizaci času každou minutu
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 60000);

        // Úklid intervalu při unmountování komponenty
        return () => clearInterval(timer);
    }, []);

    const addMember = async (member: Member) => {
        const newMember = { ...member, id: Date.now().toString() };
        try {
            const response = await fetch(`${API_URL}/teamMembers`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newMember),
            });
            if (response.ok) {
                setTeamMembers([...teamMembers, newMember]);
            }
        } catch (error) {
            console.error('Error adding member:', error);
        }
    };

    const addTask = async (task: Omit<Task, 'id' | 'isCompleted'>) => {
        const newTask: Task = {
            ...task,
            id: Date.now().toString(),
            isCompleted: false,
        };
        try {
            const response = await fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask),
            });
            if (response.ok) {
                setTasks([...tasks, newTask]);
            }
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const markTaskAsCompleted = async (taskId: string) => {
        const taskToUpdate = tasks.find(task => task.id === taskId);
        if (!taskToUpdate) return;

        const updatedTask = { ...taskToUpdate, isCompleted: true };

        try {
            const response = await fetch(`${API_URL}/tasks/${taskId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTask),
            });
            if (response.ok) {
                const updatedTaskFromServer = await response.json();
                setTasks(tasks.map(task => (task.id === taskId ? updatedTaskFromServer : task)));
            }
        } catch (error) {
            console.error('Error marking task as completed:', error);
        }
    };

    return (
        <div className="app-container">
            <Calendar
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