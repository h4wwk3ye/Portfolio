import React, { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import getProfile from '../../actions/getProfile';
import { useSelector } from 'react-redux';

import { Events, scrollSpy } from 'react-scroll';

import NavBar from '../NavBar/NavBar';
import Home from './Home';
import About from './About';
import LoadingAnimation from '../Loading/LoadingAnimation';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);

  useEffect(() => {
    // setTimeout(() => {
    //   dispatch(getProfile());
    // }, 1000);
    dispatch(getProfile());
  }, [dispatch]);

  React.useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <Fragment>
      {Object.keys(profile).length ? (
        <React.Fragment>
          <NavBar />
          <Home />
          <About />
        </React.Fragment>
      ) : (
        <LoadingAnimation />
      )}
    </Fragment>
  );
}
