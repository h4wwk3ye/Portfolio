import React from 'react';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import useStyles from './NavBarTheme';
import { useSelector } from 'react-redux';
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
  const profile = useSelector(state => state.profile);
  const theme = useTheme();
  const removeTabs = useMediaQuery(theme.breakpoints.down('md'));

  // This is for detrmining the active tab
  const [value, setValue] = React.useState(0);
  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  // This is determined from the active class of the tab by using Link of react-scroll
  const handleSetActive = to => {
    if (to === 'home') {
      setValue(0);
    } else if (to === 'about') {
      setValue(1);
    } else if (to === 'projects') {
      setValue(2);
    } else if (to === 'experience') {
      setValue(3);
    } else if (to === 'contact') {
      setValue(4);
    }
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='h4' className={classes.name}>
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
