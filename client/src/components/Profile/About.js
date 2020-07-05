import React from 'react';
import useStyles from './ProfileTheme';
import { Element } from 'react-scroll';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

export default function About() {
  const classes = useStyles();
  const profile = useSelector(state => state.profile);
  console.log(profile);

  return (
    <Element name='about' className={classes.about}>
      <Grid container justify='space-around'>
        <Grid item xs={12} ms={6}>
          <img
            src='/images/programming.jpg'
            alt='programming'
            className={classes.programmingImage}
          />
        </Grid>
      </Grid>
    </Element>
  );
}
