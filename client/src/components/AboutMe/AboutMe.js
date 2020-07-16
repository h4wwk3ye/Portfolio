import React from 'react';
import { Grid, Paper, Grow, Link, Button, Tooltip } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { profileState } from '../../atoms';
import AboutMeTheme from './AboutMeTheme';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function AboutMe({ visible }) {
  const classes = AboutMeTheme();
  const profile = useRecoilValue(profileState);
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <Grid item container xs={12} md={6}>
      <Grow in={visible} timeout={1000}>
        <Paper
          className={hovered ? classes.paperHoverd : classes.paper}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <Grid item xs={12} className={classes.heading}>
            About Me
          </Grid>

          <Grid item xs={12}>
            <LinearProgress
              classes={{
                root: classes.root,
                colorPrimary: classes.colorPrimary,
                bar: classes.bar,
              }}
              // variant='determinate'
              // value={progress}
            />
          </Grid>

          <Grid item xs={12} className={classes.smallDescription}>
            {profile.smallDescription}
          </Grid>

          <Grid item xs={12} className={classes.about}>
            {profile.about}
          </Grid>

          {profile.education && profile.education.length && (
            <Grid item xs={12} className={classes.about}>
              {`Right now I'm, pursuing ${profile.education[0].name} from ${profile.education[0].school}.`}
            </Grid>
          )}

          <Grid container spacing={1} justify='space-around'>
            <Grid
              item
              xs={12}
              className={classes.locationContainer}
              component={Link}
              href={profile.resume}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Tooltip title={profile.resume ? '' : 'Resume Link not provided'}>
                <Button
                  variant='outlined'
                  className={classes.resumeButton}
                  classes={{
                    disabled: classes.resumeButtonDisabled,
                  }}
                  disabled={!profile.resume}
                  startIcon={
                    <img
                      src='/images/resume.svg'
                      alt='resume'
                      className={classes.resumeIcon}
                    />
                  }
                >
                  Resume
                </Button>
              </Tooltip>
            </Grid>

            {profile.loc &&
              profile.loc.city.length &&
              profile.loc.country.length && (
                <Grid item xs={12} className={classes.locationContainer}>
                  <Button
                    disabled
                    startIcon={
                      <img
                        src='/images/location.svg'
                        alt='location'
                        className={classes.locationIcon}
                      />
                    }
                  >
                    <div className={classes.locationText}>
                      {`Somewhere in ${profile.loc.city}, ${profile.loc.country}`}
                    </div>
                  </Button>
                </Grid>
              )}
          </Grid>
        </Paper>
      </Grow>
    </Grid>
  );
}
