import React, { Fragment } from 'react';
import Footer from '../../components/Footer/OldFooter';
import TeamMemberCard from './TeamMemberCard';
import TeamList from './TeamList';
import './Team.scss';

export default function Archive() {
  return (
    <Fragment>
      <div className='team-intro'>
        <h1>Meet Our Team</h1>
        <h2>We're dedicated to make research accessible to all!</h2>
      </div>
      <div className='team'>
        {TeamList.map(member => {
          return (
            <TeamMemberCard
              img={member.img}
              name={member.name}
              role={member.role}
              ln={member.ln}
              fb={member.fb}
            />
          );
        })}
      </div>
      <Footer />
    </Fragment>
  );
}
