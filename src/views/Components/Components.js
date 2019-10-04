import React, { useState, Fragment } from 'react';
import { AnimateOnChange } from 'react-animation';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/OldFooter.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.js';
import SectionBasics from './Sections/SectionBasics.js';
import SectionNavbars from './Sections/SectionNavbars.js';
import SectionTabs from './Sections/SectionTabs.js';
import SectionPills from './Sections/SectionPills.js';
import SectionNotifications from './Sections/SectionNotifications.js';
import SectionTypography from './Sections/SectionTypography.js';
import SectionJavascript from './Sections/SectionJavascript.js';
import SectionCarousel from './Sections/SectionCarousel.js';
import SectionCompletedExamples from './Sections/SectionCompletedExamples.js';
import SectionLogin from './Sections/SectionLogin.js';
import SectionExamples from './Sections/SectionExamples.js';
import SectionDownload from './Sections/SectionDownload.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

import styles from 'assets/jss/material-kit-react/views/components.js';

const useStyles = makeStyles(styles);

export default function Components(props) {
  const [isNotSub, setIsNotSub] = useState(true);
  const classes = useStyles();
  const { ...rest } = props;
  const logo = (
    <img
      style={{ width: '80%' }}
      alt='IIT Tech Ambit Logo'
      src='https://cdn.iit-techambit.in/websiteAssets/logo.png'
      className='logo'
    />
  );
  return (
    <div>
      {/* <Header
        rightLinks={<HeaderLinks />}
        fixed
        color='white'
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      /> */}
      {/*here in parallax a background image can be placed with image={require('assets/img/bg4.jpg')} */}
      <Parallax>
        <div className={classes.container}>
          <AnimateOnChange>
            {isNotSub ? (
              <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <h1 className={classes.title}>{logo}</h1>
                    <h3 className={classes.subContTitle}>
                      Become tech savy in just 5 minutes
                    </h3>
                    <h3 className={classes.subtitle}>
                      Get Updated with latest research and tech stories from the
                      PAN IIT Ecosystem, for free!
                    </h3>
                    <CustomInput labelText='Your Mail' id='float' focussed />
                  </div>
                  <Button
                    type='button'
                    color='info'
                    round
                    onClick={() => setIsNotSub(false)}
                  >
                    Smash
                  </Button>
                </GridItem>
              </GridContainer>
            ) : (
              <Fragment>
                <h1 className={classes.title}>Welcome to the tech world</h1>
                <h3 className={classes.subtitle}>
                  Watch out for weekly dose of the tech gospel every Sunday
                  morning!
                </h3>
                <br />
                <h3 className={classes.subtitle}>
                  Can't Wait ?{' '}
                  <a href='/archive'>Checkout the latest issue here</a>
                </h3>
              </Fragment>
            )}
          </AnimateOnChange>
        </div>
      </Parallax>
      <SectionCarousel />

      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={'/login-page'} className={classes.link}>
            <Button color='primary' size='lg' simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div>*/}
      {/* <Footer /> */}
    </div>
  );
}
