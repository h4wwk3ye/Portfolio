import React, { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import getProfile from '../../actions/getProfile';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import NavBar from '../NavBar/NavBar';
import Name from '../Name/Name';
import About from '../About/About';
import LoadingAnimation from '../Loading/LoadingAnimation';
import WaveAnimation from '../WaveAnimation/WaveAnimation';
import useStyles from './ProfileTheme';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  const classes = useStyles();

  useEffect(() => {
    // setTimeout(() => {
    //   dispatch(getProfile());
    // }, 700);
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <Fragment>
      {Object.keys(profile).length ? (
        <Fragment>
          <Grid container className={classes.home}>
            <NavBar />
            <Name />
            <WaveAnimation />
          </Grid>
          <Grid container className={classes.about}>
            <About />
          </Grid>
        </Fragment>
      ) : (
        <LoadingAnimation />
      )}
    </Fragment>
  );
}
