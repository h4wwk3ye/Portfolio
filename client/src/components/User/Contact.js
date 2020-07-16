import React from 'react';
import { Grid, Paper, useMediaQuery, useTheme } from '@material-ui/core';
import { Element } from 'react-scroll';
import UserTheme from './UserTheme';
import { Link } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import ListContacts from '../ListContacts/ListContacts';

export default function Contacts() {
  const classes = UserTheme();
  const [visible, setVisible] = React.useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Element name='contact' className={classes.sectionContainer}>
      <Grid
        container
        spacing={5}
        justify='space-around'
        className={classes.containerGrid}
      >
        {matches && <Grid item md={4}></Grid>}
        <Grid item xs={12} md={4}>
          <Grid
            container
            component={Link}
            to={'contact'}
            smooth={true}
            offset={-100}
            ignoreCancelEvents={true}
          >
            <Paper className={classes.titleContainer}>
              <Grid item xs={12} className={classes.heading}>
                Contact
              </Grid>
              {/* <Grid item xs={12} md={10}>
                <LinearProgress
                  classes={{
                    root: classes.root,
                    colorPrimary: classes.colorPrimary,
                    bar: classes.bar,
                  }}
                />
              </Grid> */}
            </Paper>
          </Grid>
        </Grid>
        {matches && <Grid item md={4}></Grid>}
        <Grid item xs={12} className={classes.emptyGrid}></Grid>

        {/* <ListContacts visible={visible} /> */}

        <VisibilitySensor
          onChange={isVisible => {
            if (!visible) setVisible(isVisible);
          }}
          partialVisibility
          active={!visible}
        >
          <ListContacts visible={visible} />
        </VisibilitySensor>
      </Grid>
    </Element>
  );
}
