import React from 'react';
import UserTheme from './UserTheme';
import { Element } from 'react-scroll';
import { Grid, Paper, useMediaQuery, useTheme } from '@material-ui/core';
import { Link } from 'react-scroll';
import Education from '../Education/Education';
import Experience from '../Experiences/Experiences';
import Skills from '../Skills/Skills';
import VisibilitySensor from 'react-visibility-sensor';

export default function Profile() {
  const classes = UserTheme();
  const [visible, setVisible] = React.useState({
    education: false,
    experience: false,
    skills: false,
  });

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Element name='profile' className={classes.sectionContainer}>
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
            to={'profile'}
            smooth={true}
            offset={-100}
            ignoreCancelEvents={true}
          >
            <Paper className={classes.titleContainer}>
              <Grid item xs={12} className={classes.heading}>
                Profile
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

        <VisibilitySensor
          onChange={isVisible => {
            if (!visible.education)
              setVisible({ ...visible, education: isVisible });
          }}
          partialVisibility
          active={!visible.education}
        >
          <Education visible={visible.education} />
        </VisibilitySensor>

        <VisibilitySensor
          onChange={isVisible => {
            if (!visible.experience)
              setVisible({
                ...visible,
                experience: isVisible,
              });
          }}
          partialVisibility
          active={!visible.experience}
        >
          <Experience visible={visible.experience} />
        </VisibilitySensor>

        <VisibilitySensor
          onChange={isVisible => {
            if (!visible.skills)
              setVisible({
                ...visible,
                skills: isVisible,
              });
          }}
          partialVisibility
          active={!visible.skills}
        >
          <Skills visible={visible.skills} />
        </VisibilitySensor>
      </Grid>
    </Element>
  );
}
