import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';

import imagesStyles from 'assets/jss/material-kit-react/imagesStyles.js';

import { cardTitle } from 'assets/jss/material-kit-react.js';
import './TeamMemberCard.scss';

const styles = {
  ...imagesStyles,
  cardTitle
};

const useStyles = makeStyles(styles);

export default function Cards(props) {
  const classes = useStyles();
  return (
    <Card
      style={{ width: '19rem', margin: '40px 20px', position: 'relative' }}
      className='card'
    >
      <img
        style={{ height: '304px', width: '100%', display: 'block' }}
        className={classes.imgCardTop}
        src={props.img}
        alt='Card-img-cap'
        id='team-pic'
      />
      <CardBody className='name-role'>
        <h3 className={classes.cardTitle}>{props.name}</h3>
        <h4 className='role'>{props.role}</h4>
        <div className='social-links'>
          <a href={props.ln}>
            <i class='fab fa-linkedin'></i>
          </a>
          <a href={props.fb}>
            <i class='fab fa-facebook-f'></i>
          </a>
        </div>
      </CardBody>
    </Card>
  );
}
