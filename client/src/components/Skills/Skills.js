import React from 'react';
import { Grid, Paper, LinearProgress, Grow } from '@material-ui/core';
import SkillsTheme from './SkillsTheme';
import { useRecoilValue } from 'recoil';
import { profileState } from '../../atoms';
import { v4 as uuid } from 'uuid'; // for generating random keys

export default function Skills({ visible }) {
  const classes = SkillsTheme();
  const profile = useRecoilValue(profileState);
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);

  const setOfSkills = new Set([
    // skills for which icon is present
    'c++',
    'python',
    'javascript',
    'mongodb',
    'reactjs',
    'nodejs',
    'typescript',
  ]);

  return profile.skills.length ? (
    <Grid item container md={4} xs={12}>
      <Grow in={visible} timeout={1000}>
        <Paper
          className={
            hovered ? classes.skillsContainerHoverd : classes.skillsContainer
          }
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <Grid item xs={12} className={classes.heading}>
            Skills
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
          <Grid
            container
            spacing={5}
            justify='space-around'
            className={classes.allSkillsContainer}
          >
            {profile.skills.map(skill => (
              <Grid
                item
                xs={6}
                className={classes.singleSkillContainer}
                key={uuid()}
              >
                <Grid container direction='column'>
                  <Grid item xs={12} className={classes.skillIconContainer}>
                    {setOfSkills.has(skill.toLowerCase()) ? (
                      <img
                        src={`/images/skills/${skill.toLowerCase()}.svg`}
                        alt={skill}
                        className={classes.skillIcon}
                      />
                    ) : (
                      <img
                        src={`/images/skills/defaultSkill.svg`}
                        alt={skill}
                        className={classes.skillIcon}
                      />
                    )}
                  </Grid>
                  <Grid item xs={12} className={classes.skillName}>
                    {skill}
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grow>
    </Grid>
  ) : null;
}
