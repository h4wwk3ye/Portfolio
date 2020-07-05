import React from 'react';
import './waveAnimation.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

export default function WaveAnimation() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.toolbarMargin}></div>
      <div className='waveWrapper waveAnimation'>
        <div className='waveWrapperInner bgTop'>
          <div className='wave waveTop' />
        </div>
        <div className='waveWrapperInner bgMiddle'>
          <div className='wave waveMiddle' />
        </div>
        <div className='waveWrapperInner bgBottom'>
          <div className='wave waveBottom' />
        </div>
      </div>
    </React.Fragment>
  );
}
