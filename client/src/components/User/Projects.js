import React from 'react';
import useStyles from './UserTheme';
import { Element } from 'react-scroll';
import { Grid, Paper, useMediaQuery, useTheme } from '@material-ui/core';
import { Link } from 'react-scroll';
import ListProjects from '../ListProjects/ListProjects';
import { useRecoilValue } from 'recoil';
import { profileState } from '../../atoms';
import { v4 as uuid } from 'uuid'; // for generating random keys

export default function Projects() {
  const classes = useStyles();
  const profile = useRecoilValue(profileState);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Element name='projects' className={classes.sectionContainer}>
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
            to={'projects'}
            smooth={true}
            offset={-100}
            ignoreCancelEvents={true}
          >
            <Paper className={classes.titleContainer}>
              <Grid item xs={12} className={classes.heading}>
                Projects
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
        <Grid
          container
          justify='space-around'
          spacing={5}
          className={classes.containerGrid}
        >
          {profile.projects.map(project => (
            <ListProjects project={project} key={uuid()} />
          ))}
        </Grid>
      </Grid>
    </Element>
  );
}
