import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './LoadingAnimationTheme';
import { withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 10,
    borderRadius: 5,
    marginTop: '50vh',
    width: '30vw',
    margin: '0 auto',
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

export default function LinearIndeterminate() {
  const classes = useStyles();

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 1000) return 0;
        return oldProgress + 10;
      });
    }, 67); // 67 because this fits well with 1 sec inital timer

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress
        variant='determinate'
        value={progress}
        color='secondary'
      />
      <BorderLinearProgress color='secondary' />
    </div>
  );
}
