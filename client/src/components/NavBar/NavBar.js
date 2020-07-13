import React from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { Events, scrollSpy, animateScroll } from 'react-scroll';
import useStyles from './NavBarTheme';
import { useRecoilValue } from 'recoil';
import { profileState } from '../../atoms';
import Tabs from './Tabs';
import Drawer from './Drawer';

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
  const profile = useRecoilValue(profileState);
  const theme = useTheme();
  const removeTabs = useMediaQuery(theme.breakpoints.down('md'));

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
              {profile.user.name}
            </Typography>
            {!removeTabs ? (
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
