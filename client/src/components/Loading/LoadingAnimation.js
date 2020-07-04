import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './LoadingAnimationTheme';

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress />
      <LinearProgress color='secondary' />
    </div>
  );
}
