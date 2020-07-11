import React from 'react';
import { Grid, Paper, LinearProgress, Grow } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { profileState } from '../../atoms';
import ExperiencesTheme from './ExperiencesTheme';
import { v4 as uuid } from 'uuid'; // for generating random keys
import moment from 'moment';

export default function Experience({ visible }) {
  const classes = ExperiencesTheme();
  const profile = useRecoilValue(profileState);
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);

  return profile.experiences.length ? (
    <Grid item container md={4} xs={12}>
      <Grow in={visible} timeout={1000}>
        <Paper
          className={
            hovered
              ? classes.experienceContainerHoverd
              : classes.experienceContainer
          }
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <Grid item xs={12} className={classes.heading}>
            Experience
          </Grid>
          <Grid item xs={12}>
            <LinearProgress
              classes={{
                root: classes.root,
                colorPrimary: classes.colorPrimary,
                bar: classes.bar,
              }}
            />
          </Grid>

          {profile.experiences.map((experience, index) => (
            <Grid
              container
              className={classes.singleExperienceContainer}
              key={uuid()}
            >
              <Grid item xs={12} className={classes.roleName}>
                {experience.role}
              </Grid>
              <Grid item xs={12} className={classes.time}>
                {`${moment(experience.timeFrom).format('MMM YYYY')} - ${
                  experience.currentlyWorking
                    ? 'Present'
                    : moment(experience.timeTo).format('MMM YYYY')
                }`}
              </Grid>
              <Grid item xs={12} className={classes.company}>
                {experience.name}
              </Grid>
              {index !== profile.experiences.length - 1 && (
                <Grid item xs={12}>
                  <hr className={classes.divider} />
                </Grid>
              )}
            </Grid>
          ))}
        </Paper>
      </Grow>
    </Grid>
  ) : null;
}
