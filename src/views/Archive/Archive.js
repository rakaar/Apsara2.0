import React, { Fragment } from 'react';
import ArticleCard from './ArticleCard';
import Footer from '../../components/Footer/OldFooter';

import './Archive.scss';
import MediumArticlesList from './MediumArticlesList.js';

const basecdn = 'https://ambitcdn.sgp1.digitaloceanspaces.com/storyImages/';

export default function Archive() {
  return (
    <Fragment>
      <div className='archive'>
        {/* <ArticleCard /> */}
        {MediumArticlesList.map(item => {
          return (
            <ArticleCard
              title={item.title}
              desc={item.desc}
              link={item.link}
              date={item.date}
              min={item.min}
              img={basecdn + item.img}
              author={item.author}
            />
          );
        })}
      </div>
      <Footer />
    </Fragment>
  );
}
