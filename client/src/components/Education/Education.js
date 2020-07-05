import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import EducationTheme from './EducationTheme';
import { useSelector } from 'react-redux';

export default function Education() {
  const classes = EducationTheme();
  const profile = useSelector(state => state.profile);

  return (
    <Grid item md={6} xs={12} className={classes.educationContainer}>
      <Paper elevation={6}>
        <p className={classes.title}>Education</p>
      </Paper>
    </Grid>
  );
}
