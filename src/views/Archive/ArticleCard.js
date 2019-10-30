import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';

import imagesStyles from 'assets/jss/material-kit-react/imagesStyles.js';

import { cardTitle } from 'assets/jss/material-kit-react.js';

import './ArticleCard.scss';

const styles = {
  ...imagesStyles,
  cardTitle
};

const useStyles = makeStyles(styles);

export default function Cards(props) {
  const classes = useStyles();
  return (
    <Card
      style={{
        minHeight: 'min-content',
        width: '20rem',
        margin: '0 5px 40px'
      }}
      className='card'
    >
      <a href={props.link} target='_blank'>
        <img
          style={{
            height: '210px',
            width: '100%',
            display: 'block',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
          className={classes.imgCardTop}
          src={props.img}
          alt='Card-img-cap'
        />
      </a>
      <CardBody style={{ position: 'relative' }}>
        <h4 className={classes.cardTitle} id='article-title'>
          <a href={props.link} target='_blank'>
            {props.title}
          </a>
        </h4>
        <p style={{ paddingBottom: '2em' }}>{props.desc}</p>
        <div className='flex-cont'>
          <span className='author'>- {props.author}</span>
          <div className='date-min-read'>
            <span>{props.date} &bull;</span>
            <span> {props.min} min read</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
