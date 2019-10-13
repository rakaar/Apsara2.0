import React, { useState, useEffect } from 'react';
import StoriesCard from './StoriesCard';

import config from '../../config';
import integrate from '../../integrate';

import './Stories.scss';

const issueEndpoint = config.endpoints.issue.getAll;

export default function Archive() {
  const [issuesArr, SetIssuesArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await integrate.getData(issueEndpoint, {});
      if (res == undefined) window.location.reload();
      SetIssuesArr(res.data.resource);
    };
    fetchData();
  }, []);

  return (
    <div className='stories'>
      {issuesArr.map(item => {
        return (
          <StoriesCard
            cover_link={item.cover_link}
            month={item.month}
            year={item.year}
            link={item.link}
          />
        );
      })}
    </div>
  );
}
