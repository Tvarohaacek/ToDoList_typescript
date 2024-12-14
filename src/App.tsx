import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import TeamMemberForm from './TeamMemberForm';
import TaskForm from './TaskForm';
import TeamMemberList from './TeamMemberList';
import TaskList from './TaskList';
import { Member } from './Member';
import { Task } from './Task';
//@ts-ignore
import "./styles.css"

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
        const updatedMembers = [
            ...teamMembers, 
            { ...member, id: Date.now().toString() } // Převod id na string
        ];
        setTeamMembers(updatedMembers);
        sessionStorage.setItem('teamMembers', JSON.stringify(updatedMembers));
    };

    const addTask = (task: Omit<Task, 'id' | 'isCompleted'>) => {
        const newTask: Task = {
            ...task,
            id: Date.now().toString(),
            isCompleted: false
        };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const markTaskAsCompleted = (taskId: number) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId.toString() // Převod čísla na řetězec
                ? { ...task, isCompleted: true }
                : task
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