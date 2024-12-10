import React, { useState } from 'react';
import { Team, TeamMember } from './models';

interface TeamProps {
    team: Team;
    onAddMember: (member: TeamMember) => void;
}

export const TeamComponent: React.FC<TeamProps> = ({ team, onAddMember }) => {
    const [newMemberName, setNewMemberName] = useState('');
    const [newMemberRole, setNewMemberRole] = useState<'Teamleader' | 'Member'>('Member');

    const handleAddMember = () => {
        if (newMemberName) {
            const newMember: TeamMember = {
                id: Date.now(), // Example ID generation
                name: newMemberName,
                role: newMemberRole,
            };
            onAddMember(newMember);
            setNewMemberName('');
        }
    };

    return (
        <div>
            <h3>Team: {team.name}</h3>
            <p>Max Members: {team.maxMembers}</p>
            <ul>
                {team.members.map((member) => (
                    <li key={member.id}>{member.name} - {member.role}</li>
                ))}
            </ul>

            <h4>Add New Member</h4>
            <input
                type="text"
                placeholder="Member Name"
                value={newMemberName}
                onChange={(e) => setNewMemberName(e.target.value)}
            />
            <select
                value={newMemberRole}
                onChange={(e) => setNewMemberRole(e.target.value as 'Teamleader' | 'Member')}
            >
                <option value="Member">Member</option>
                <option value="Teamleader">Teamleader</option>
            </select>
            <button onClick={handleAddMember}>Add Member</button>
        </div>
    );
};
