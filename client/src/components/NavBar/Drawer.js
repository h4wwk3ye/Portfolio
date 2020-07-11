import React from 'react';
import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid,
} from '@material-ui/core';
import { Link } from 'react-scroll';
import { v4 as uuid } from 'uuid'; // for generating random keys
import useStyles from './NavBarTheme';
import routeOptions from './routeOptions';

export default function ({ value, handleChange, handleSetActive }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor='top'
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        classes={{
          paper: classes.drawerContainer,
        }}
      >
        <List disablePadding>
          <Grid container>
            <Grid container direction='column' className={classes.drawerList}>
              {routeOptions.map((route, index) => (
                <Grid item key={uuid()}>
                  <ListItem
                    button
                    selected={value === index}
                    component={Link}
                    to={route}
                    activeClass={route}
                    smooth={true}
                    offset={-100}
                    spy={true}
                    onSetActive={handleSetActive}
                    onClick={e => {
                      setOpen(false);
                      handleChange(e, index);
                    }}
                    ignoreCancelEvents={true}
                    classes={{
                      root: classes.drawerTab,
                      selected: classes.drawerTabSelected,
                    }}
                  >
                    <ListItemIcon>
                      <img
                        src={`/images/${route}.svg`}
                        alt={route}
                        className={classes.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary={capitalizeFirstLetter(route)} />
                  </ListItem>
                </Grid>
              ))}
            </Grid>
            <Grid item className={classes.closeButton}>
              <IconButton onClick={() => setOpen(!open)}>
                <img
                  src='/images/close.svg'
                  alt='close'
                  className={classes.drawerIcon}
                />
              </IconButton>
            </Grid>
          </Grid>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpen(!open)}
        className={classes.drawerIconContainer}
      >
        <img src='/images/menu.svg' alt='menu' className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
}
