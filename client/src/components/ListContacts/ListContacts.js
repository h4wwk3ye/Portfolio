import React from 'react';
import {
  Grid,
  Paper,
  Grow,
  Link,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { profileState } from '../../atoms';
import ListContactsTheme from './ListContactsTheme';
import { v4 as uuid } from 'uuid'; // for generating random keys

export default function ListContacts({ visible }) {
  const classes = ListContactsTheme();
  const profile = useRecoilValue(profileState);
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const setOfContacts = new Set([
    // skills for which icon is present
    'facebook',
    'twitter',
    'instagram',
    'linkedin',
    'github',
    'steam',
  ]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Grid
      container
      justify='space-around'
      spacing={5}
      className={classes.containerGrid}
    >
      {matches && <Grid item md={3}></Grid>}
      <Grow in={visible} timeout={1000}>
        <Grid item container xs={12} md={6}>
          <Paper
            className={
              hovered
                ? classes.contactsContainerHoverd
                : classes.contactsContainer
            }
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            <Grid
              container
              spacing={5}
              justify='space-around'
              className={classes.allContactsContainer}
            >
              {Object.entries(profile.connect).map(
                service =>
                  service[1] !== '' && (
                    <Grid
                      item
                      xs={6}
                      key={uuid()}
                      className={classes.singleContactContainer}
                      // Link Part
                      component={Link}
                      href={`${service[1]}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Grid container direction='column'>
                        <Grid
                          item
                          xs={12}
                          className={classes.contactIconContainer}
                        >
                          {setOfContacts.has(service[0].toLowerCase()) ? (
                            <img
                              src={`/images/contact/${service[0].toLowerCase()}.svg`}
                              alt={service[0]}
                              className={classes.contactIcon}
                            />
                          ) : (
                            <img
                              src={`/images/contact/defaultcontact.svg`}
                              alt={service[0]}
                              className={classes.contactIcon}
                            />
                          )}
                        </Grid>
                        <Grid item xs={12} className={classes.contactName}>
                          {capitalizeFirstLetter(service[0])}
                        </Grid>
                      </Grid>
                    </Grid>
                  )
              )}

              {/* Email */}
              <Grid
                item
                container
                direction='column'
                xs={6}
                key={uuid()}
                className={classes.singleContactContainer}
                // Link Part
                component={Link}
                href={`mailto:${profile.user.email}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Grid item xs={12} className={classes.contactIconContainer}>
                  <img
                    src={`/images/contact/email.svg`}
                    alt='email'
                    className={classes.contactIcon}
                  />
                </Grid>
                <Grid item xs={12} className={classes.contactName}>
                  Email
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grow>
      {matches && <Grid item md={3}></Grid>}
    </Grid>
  );
}
