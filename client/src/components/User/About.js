import React from 'react';
import useStyles from './UserTheme';
import { Element } from 'react-scroll';
import { Grid, Paper, useMediaQuery, useTheme } from '@material-ui/core';
import { Link } from 'react-scroll';
import CodingImage from '../CodingImage/CodingImage';
import AboutMe from '../AboutMe/AboutMe';
import VisibilitySensor from 'react-visibility-sensor';

export default function About() {
  const classes = useStyles();

  const [visible, setVisible] = React.useState({
    aboutMe: false,
    codingImage: false,
  });

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Element name='about' className={classes.sectionContainer}>
      <Grid
        container
        spacing={5}
        justify='space-around'
        className={classes.containerGrid}
      >
        {matches && <Grid item md={4}></Grid>}
        <Grid item xs={12} md={4}>
          <Grid
            container
            component={Link}
            to={'about'}
            smooth={true}
            offset={-100}
            ignoreCancelEvents={true}
          >
            <Paper className={classes.titleContainer}>
              <Grid item xs={12} className={classes.heading}>
                About
              </Grid>
              {/* <Grid item xs={12} md={10}>
                <LinearProgress
                  classes={{
                    root: classes.root,
                    colorPrimary: classes.colorPrimary,
                    bar: classes.bar,
                  }}
                />
              </Grid> */}
            </Paper>
          </Grid>
        </Grid>
        {matches && <Grid item md={4}></Grid>}

        <Grid item xs={12} className={classes.emptyGrid}></Grid>

        {/* <AboutMe visible={visible.aboutMe} />
        <CodingImage visible={visible.codingImage} /> */}

        <VisibilitySensor
          onChange={isVisible => {
            if (!visible.aboutMe)
              setVisible({ ...visible, aboutMe: isVisible });
          }}
          partialVisibility
          active={!visible.aboutMe}
        >
          <AboutMe visible={visible.aboutMe} />
        </VisibilitySensor>

        <VisibilitySensor
          onChange={isVisible => {
            if (!visible.codingImage)
              setVisible({ ...visible, codingImage: isVisible });
          }}
          partialVisibility
          active={!visible.codingImage}
        >
          <CodingImage visible={visible.codingImage} />
        </VisibilitySensor>
      </Grid>
    </Element>
  );
}
