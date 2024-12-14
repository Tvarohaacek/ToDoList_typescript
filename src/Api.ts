import axios from 'axios';
import { Member } from './Member';
import { Task } from './Task';

const API_URL = 'http://localhost:3001';

export const memberService = {
    getAll: () => axios.get<Member[]>(`${API_URL}/members`),
    create: (member: Omit<Member, 'id'>) =>
        axios.post<Member>(`${API_URL}/members`, member),
    update: (member: Member) =>
        axios.put<Member>(`${API_URL}/members/${member.id}`, member),
    delete: (id: number) => axios.delete(`${API_URL}/members/${id}`)
};

export const taskService = {
    getAll: () => axios.get<Task[]>(`${API_URL}/tasks`),
    create: (task: Omit<Task, 'id'>) =>
        axios.post<Task>(`${API_URL}/tasks`, task),
    update: (task: Task) =>
        axios.put<Task>(`${API_URL}/tasks/${task.id}`, task),
    delete: (id: number) => axios.delete(`${API_URL}/tasks/${id}`)
};