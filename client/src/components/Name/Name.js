import React from 'react';
import { Typography } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { profileState } from '../../atoms';
import Typist from 'react-typist';
import useStyles from './NameTheme';

export default function Name() {
  const classes = useStyles();
  const profile = useRecoilValue(profileState);

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
