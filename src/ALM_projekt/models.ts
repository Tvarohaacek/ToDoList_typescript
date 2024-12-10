
// models.ts
export interface TeamMember {
    id: number;
    name: string;
    role: 'Teamleader' | 'Member';
}

export interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
    description: string;
    assignedMembers: TeamMember[];
}

export interface Team {
    id: number;
    name: string;
    maxMembers: number;
    members: TeamMember[];
}
