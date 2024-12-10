import React from 'react';
import { Member } from './Member';

interface TeamMemberListProps {
    members: Member[];
    onSelectMember?: (member: Member) => void;
}

const TeamMemberList: React.FC<TeamMemberListProps> = ({ members, onSelectMember }) => {
    return (
        <ul className="team-list">
            {members.map(member => (
                    <li
                        key={member.id}
                onClick={() => onSelectMember && onSelectMember(member)}
>
    <strong>{member.name}</strong>
    <p>{member.role}</p>
    </li>
))}
    </ul>
);
};

export default TeamMemberList;