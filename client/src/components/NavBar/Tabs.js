import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-scroll';
import { v4 as uuid } from 'uuid'; // for generating random keys
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
      {routeOptions.map(route => (
        <Tab
          key={uuid()}
          classes={{
            root: classes.tab,
            selected: classes.tabSelected,
          }}
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
          ignoreCancelEvents={true}
        />
      ))}
    </Tabs>
  );
}
