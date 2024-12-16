import axios from 'axios';
import { Member } from './Member';
import { Task } from './Task';

const API_URL = 'http://localhost:3001';

export const memberService = {
    getAll: () => axios.get<Member[]>(`${API_URL}/teamMembers`),
    create: (member: Omit<Member, 'id'>) => {
        const newMember = { ...member, id: Date.now().toString() };
        return axios.post<Member>(`${API_URL}/teamMembers`, newMember);
    },
    update: (member: Member) =>
        axios.put<Member>(`${API_URL}/teamMembers/${member.id}`, member),
    delete: (id: string) => axios.delete(`${API_URL}/teamMembers/${id}`)
};


export const taskService = {
    getAll: () =>
        axios.get<Task[]>(`${API_URL}/tasks`).then(response =>
            response.data.map(task => ({
                ...task,
                dueDate: task.dueDate ? new Date(task.dueDate) : null
            }))
        ),
    create: (task: Omit<Task, 'id'>) =>
        axios.post<Task>(`${API_URL}/tasks`, task),
    update: (task: Task) =>
        axios.put<Task>(`${API_URL}/tasks/${task.id}`, task),
    delete: (id: string) => axios.delete(`${API_URL}/tasks/${id}`),
    markAsCompleted: (id: string) =>
        axios.patch<Task>(`${API_URL}/tasks/${id}`, { isCompleted: true })
};
