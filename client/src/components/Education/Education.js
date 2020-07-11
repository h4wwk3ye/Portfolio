import React from 'react';
import { Grid, Paper, LinearProgress, Grow } from '@material-ui/core';
import EducationTheme from './EducationTheme';
import { useRecoilValue } from 'recoil';
import { profileState } from '../../atoms';
import { v4 as uuid } from 'uuid'; // for generating random keys

export default function Education({ visible }) {
  const classes = EducationTheme();
  const profile = useRecoilValue(profileState);
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);

  return profile.education.length ? (
    <Grid item container xs={12} md={4} data-aos='fade-up'>
      <Grow in={visible} timeout={1000}>
        <Paper
          className={
            hovered
              ? classes.educationContainerHoverd
              : classes.educationContainer
          }
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <Grid item xs={12} className={classes.heading}>
            Education
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

          {profile.education.map((edu, index) => (
            <Grid container className={classes.schoolContainer} key={uuid()}>
              <Grid item xs={12} className={classes.schoolName}>
                {edu.name}
              </Grid>
              <Grid item xs={12} className={classes.text}>
                {edu.school}
              </Grid>
              <Grid item xs={12} className={classes.text}>
                {`Score: ${edu.score.value} ${edu.score.postfix}`}
              </Grid>
              {index !== profile.education.length - 1 && (
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
