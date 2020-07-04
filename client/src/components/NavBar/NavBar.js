import React from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';
import useStyles from './NavBarTheme';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  AccountTree as ProjectIcon,
  Work as ExperienceIcon,
  ContactMail as ContactIcon,
} from '@material-ui/icons';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function NavBar() {
  const classes = useStyles();
  const profile = useSelector(state => state.profile);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar>
            <Typography variant='h4' className={classes.name}>
              {profile.user.name}
            </Typography>
            <Tabs className={classes.tabContainer}>
              <Tab
                className={classes.tab}
                label={
                  <div>
                    <img
                      src='/images/home.svg'
                      alt='home'
                      className={classes.icon}
                    />
                    Home
                  </div>
                }
              />
              <Tab
                className={classes.tab}
                label={
                  <div>
                    <img
                      src='/images/info.svg'
                      alt='about'
                      className={classes.icon}
                    />{' '}
                    About
                  </div>
                }
              />
              <Tab
                className={classes.tab}
                label={
                  <div>
                    <img
                      src='/images/projects.svg'
                      alt='projects'
                      className={classes.icon}
                    />{' '}
                    Projects
                  </div>
                }
              />
              <Tab
                className={classes.tab}
                label={
                  <div>
                    <img
                      src='/images/experience.svg'
                      alt='experience'
                      className={classes.icon}
                    />{' '}
                    Experience
                  </div>
                }
              />
              <Tab
                className={classes.tab}
                label={
                  <div>
                    <img
                      src='/images/contact.svg'
                      atl='contact'
                      className={classes.icon}
                    />{' '}
                    Contact
                  </div>
                }
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* This div just pushes the content downwards below the appBar */}
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
}
