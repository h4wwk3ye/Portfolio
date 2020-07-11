import React from 'react';
import { useRecoilState } from 'recoil';
import { profileState } from '../../atoms';
import { getProfile } from '../../services/profileService';

import { Events, scrollSpy } from 'react-scroll';

import NavBar from '../NavBar/NavBar';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Projects from './Projects';
import LoadingAnimation from '../Loading/LoadingAnimation';
import Contact from './Contact';
import Footer from '../Footer/Footer';

export default function User() {
  const [profile, setProfile] = useRecoilState(profileState);

  React.useEffect(() => {
    (async () => {
      const profileData = await getProfile();
      setProfile(profileData);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <React.Fragment>
      {Object.keys(profile).length ? (
        <React.Fragment>
          <NavBar />
          <Home />
          <About />
          <Profile />
          <Projects />
          <Contact />
          <Footer />
        </React.Fragment>
      ) : (
        <LoadingAnimation />
      )}
    </React.Fragment>
  );
}
