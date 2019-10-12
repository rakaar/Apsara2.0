import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import TeamList from './TeamList';
import './Team.scss';

export default function Archive() {
  return (
    <div className='team'>
      {TeamList.map(member => {
        return (
          <TeamMemberCard
            img={member.img}
            name={member.name}
            role={member.role}
          />
        );
      })}
    </div>
  );
}
