import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';

import image from 'assets/img/faces/avatar.jpg';
import image1 from 'assets/img/bg.jpg';
import image2 from 'assets/img/bg2.jpg';
import image3 from 'assets/img/bg3.jpg';

import styles from 'assets/jss/material-kit-react/views/componentsSections/carouselStyle.js';
import imgStyles from 'assets/jss/material-kit-react/views/componentsSections/typographyStyle.js';
import './SectionCarousel.scss';
const useStyles = makeStyles(styles);
const useImgStyles = makeStyles(imgStyles);

export default function SectionCarousel() {
  const classes = useStyles();
  const imgClasses = useImgStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings} className={classes.bgCol}>
                <div>
                  {/* <img src={image1} alt="First slide" className="slick-image" /> */}
                  <img
                    style={{ width: '40%', margin: '4%' }}
                    src={image}
                    alt='...'
                    className={
                      imgClasses.imgRaised +
                      ' ' +
                      imgClasses.imgRoundedCircle +
                      ' ' +
                      imgClasses.imgFluid
                    }
                  />
                  <div className={classes.nameWithSt} id='nameWithSt'>
                    <h3 className={classes.name} id='name'>
                      Raghavendra
                    </h3>
                    <h4 className={classes.testimonial} id='test'>
                      <em>Fuck</em>
                    </h4>
                  </div>
                </div>
                <div>
                  {/* <img src={image1} alt="First slide" className="slick-image" /> */}
                  <img
                    style={{ width: '40%', margin: '4%' }}
                    src={image}
                    alt='...'
                    className={
                      imgClasses.imgRaised +
                      ' ' +
                      imgClasses.imgRoundedCircle +
                      ' ' +
                      imgClasses.imgFluid
                    }
                  />
                  <div className={classes.nameWithSt} id='nameWithSt'>
                    <h3 className={classes.name} id='name'>
                      Raghavendra
                    </h3>
                    <h4 className={classes.testimonial} id='test'>
                      <em>Fuck</em>
                    </h4>
                  </div>
                </div>
                <div>
                  {/* <img src={image1} alt="First slide" className="slick-image" /> */}
                  <img
                    style={{ width: '40%', margin: '4%' }}
                    src={image}
                    alt='...'
                    className={
                      imgClasses.imgRaised +
                      ' ' +
                      imgClasses.imgRoundedCircle +
                      ' ' +
                      imgClasses.imgFluid
                    }
                  />
                  <div className={classes.nameWithSt} id='nameWithSt'>
                    <h3 className={classes.name} id='name'>
                      Raghavendra
                    </h3>
                    <h4 className={classes.testimonial} id='test'>
                      <em>Fuck</em>
                    </h4>
                  </div>
                </div>
                {/* <div>
                  <img
                    src={image2}
                    alt='Second slide'
                    className='slick-image'
                  />
                  <div className='slick-caption'>
                    <h4>
                      <LocationOn className='slick-icons' />
                      Somewhere Beyond, United States
                    </h4>
                  </div>
                </div> */}
                <div>
                  {/* <img src={image3} alt='Third slide' className='slick-image' /> */}
                  <img
                    style={{ width: '40%', margin: '4%' }}
                    src={image}
                    alt='...'
                    className={
                      imgClasses.imgRaised +
                      ' ' +
                      imgClasses.imgRoundedCircle +
                      ' ' +
                      imgClasses.imgFluid
                    }
                  />
                  <div className={classes.nameWithSt} id='nameWithSt'>
                    <h3 className={classes.name} id='name'>
                      Raghavendra
                    </h3>
                    <h4 className={classes.testimonial} id='test'>
                      <em>Fuck</em>
                    </h4>
                  </div>
                  {/* <div className='slick-caption'>
                    <h4>
                      <LocationOn className='slick-icons' />
                      Yellowstone National Park, United States
                    </h4>
                  </div> */}
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
