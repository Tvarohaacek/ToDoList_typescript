import React, { useState } from 'react';
import { Member } from './Member';

interface TeamMemberFormProps {
    onAddMember: (member: Member) => void;
}

const TeamMemberForm: React.FC<TeamMemberFormProps> = ({ onAddMember }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !role.trim()) return;

        const newMember: Member = {
            id: Date.now().toString(), // Změna na string
            name,
            role,
            email: ''
        };

        onAddMember(newMember);
        setName('');
        setRole('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Member Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                required
            />
            <input
                type="text"
                placeholder="Member Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="form-control"
                required
            />
            <button type="submit" className="btn">Add Member</button>
        </form>
    );
};

export default TeamMemberForm;