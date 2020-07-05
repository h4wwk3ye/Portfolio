import React from 'react';
import useStyles from './ProfileTheme';
import { Element } from 'react-scroll';

import Name from '../Name/Name';
import WaveAnimation from '../WaveAnimation/WaveAnimation';

export default function Home() {
  const classes = useStyles();
  return (
    <Element name='home' className={classes.home}>
      <Name />
      <WaveAnimation />
    </Element>
  );
}
