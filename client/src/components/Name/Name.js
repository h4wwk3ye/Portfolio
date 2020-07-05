import React from 'react';
import { Typography } from '@material-ui/core';
import Typist from 'react-typist';
import { useSelector } from 'react-redux';
import useStyles from './NameTheme';

export default function Name() {
  const classes = useStyles();
  const profile = useSelector(state => state.profile);

  return (
    <Typography variant='h4' className={classes.nameContainer}>
      <div className={classes.text}>
        <Typist>
          {`Hi, there \n I'm ${profile.user.name}. `}
          <Typist.Delay ms={1000} />
          <br />
          {`I'm a ${profile.smallDescription}.`}
        </Typist>
      </div>
    </Typography>
  );
}
