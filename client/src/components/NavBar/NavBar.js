import React from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from '@material-ui/core';
import { Events, scrollSpy, animateScroll } from 'react-scroll';
import useStyles from './NavBarTheme';
import { useRecoilValue, useRecoilState } from 'recoil';
import { profileState } from '../../atoms';
import Tabs from './Tabs';
import Drawer from './Drawer';
import { useHistory } from 'react-router-dom';
import { authState } from '../../atoms';

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

export default function NavBar({ editPage = false }) {
  const classes = useStyles();
  const profile = useRecoilValue(profileState);
  const theme = useTheme();
  const removeTabs = useMediaQuery(theme.breakpoints.down('md'));
  const history = useHistory();
  const [auth, setAuth] = useRecoilState(authState);

  // This is for detrmining the active tab
  const [value, setValue] = React.useState(0);
  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      // console.log(to, arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      // console.log(to, arguments);
      if (to === 'home') {
        setValue(0);
      } else if (to === 'about') {
        setValue(1);
      } else if (to === 'profile') {
        setValue(2);
      } else if (to === 'projects') {
        setValue(3);
      } else if (to === 'contact') {
        setValue(4);
      }
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // This is determined from the active class of the tab by using Link of react-scroll
  const handleSetActive = to => {
    if (to === 'home') {
      setValue(0);
    } else if (to === 'about') {
      setValue(1);
    } else if (to === 'profile') {
      setValue(2);
    } else if (to === 'projects') {
      setValue(3);
    } else if (to === 'contact') {
      setValue(4);
    }
  };

  const scrollTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: 'easeInQuad',
    });
<<<<<<< HEAD
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth({
      token: localStorage.getItem('token'),
      isAuthenticated: false,
      user: null,
    });
    history.push('/login');
=======
>>>>>>> 57670d9a8d0aedab8e5f7bbc2a349df8c4357d5e
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='sticky' className={classes.appBar}>
          <Toolbar>
            <Typography
              variant='h4'
              className={classes.name}
              noWrap
              onClick={scrollTop}
            >
<<<<<<< HEAD
              {editPage ? auth.user.name : profile.user.name}
              {/* {`${profile && profile.user ? profile.user.name : ''}`} */}
=======
              {profile.user.name}
>>>>>>> 57670d9a8d0aedab8e5f7bbc2a349df8c4357d5e
            </Typography>
            {/* Showing logout button on edit page */}
            {editPage ? (
              <Button
                variant='contained'
                onClick={handleLogout}
                className={classes.logOutButton}
              >
                Log Out
              </Button>
            ) : !removeTabs ? (
              <Tabs
                value={value}
                handleChange={handleChange}
                handleSetActive={handleSetActive}
              />
            ) : (
              <Drawer
                value={value}
                handleChange={handleChange}
                handleSetActive={handleSetActive}
              />
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
