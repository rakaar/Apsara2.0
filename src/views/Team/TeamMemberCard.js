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

export default function Cards() {
  const classes = useStyles();
  return (
    <Card style={{ width: '20rem' }} className='card'>
      <img
        style={{ height: '250px', width: '100%', display: 'block' }}
        className={classes.imgCardTop}
        src='...'
        alt='Card-img-cap'
      />
      <CardBody className='name-role'>
        <h3 className={classes.cardTitle}>Shivam Kumar Jha</h3>
        <h4 className='role'>Head of Technology</h4>
      </CardBody>
    </Card>
  );
}
