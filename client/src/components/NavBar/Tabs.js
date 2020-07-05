import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-scroll';
import useStyles from './NavBarTheme';
import routeOptions from './routeOptions';

export default function ({ value, handleChange, handleSetActive }) {
  const classes = useStyles();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Tabs
      className={classes.tabContainer}
      value={value}
      onChange={handleChange}
    >
      {routeOptions.map((route, index) => (
        <Tab
          className={classes.tab}
          label={
            <div>
              <img
                src={`/images/${route}.svg`}
                alt={route}
                className={classes.icon}
              />
              {capitalizeFirstLetter(route)}
            </div>
          }
          component={Link}
          to={route}
          activeClass={route}
          smooth={true}
          offset={-100}
          spy={true}
          onSetActive={handleSetActive}
        />
      ))}
    </Tabs>
  );
}
