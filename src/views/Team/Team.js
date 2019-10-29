import React, { Fragment } from 'react';
import Footer from '../../components/Footer/OldFooter';
import TeamMemberCard from './TeamMemberCard';
import TeamList from './TeamList';
import './Team.scss';

export default function Archive() {
  return (
    <Fragment>
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
      <Footer />
    </Fragment>
  );
}
