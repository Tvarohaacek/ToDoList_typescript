import React, { useState } from 'react';
import { Member } from './Member';

interface TeamMemberFormProps {
    onAddMember: (member: Member) => void;
}

const TeamMemberForm: React.FC<TeamMemberFormProps> = ({ onAddMember }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('teamleader'); // Defaultní hodnota

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        const newMember: Member = {
            id: Date.now(),
            name,
            role,
            email: ''
        };

        onAddMember(newMember);
        setName('');
        setRole('teamleader'); // Reset na výchozí hodnotu
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Role:
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="teamleader">Team Leader</option>
                        <option value="member">Member</option>
                    </select>
                </label>
            </div>
            <button type="submit">Add Member</button>
        </form>
    );
};
export default TeamMemberForm;