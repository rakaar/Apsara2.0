import React, { Fragment } from 'react';
import ArticleCard from './ArticleCard';
import Footer from '../../components/Footer/OldFooter';

import './Archive.scss';
import MediumArticlesList from './MediumArticlesList.js';

const basecdn = 'https://cdn.iit-techambit.in/storyImages/';

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
            />
          );
        })}
      </div>
      <Footer />
    </Fragment>
  );
}
