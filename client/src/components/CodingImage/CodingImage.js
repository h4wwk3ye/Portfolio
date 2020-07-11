import React from 'react';
import { Grid, Paper, Grow } from '@material-ui/core';
import CodingImageTheme from './CodingImageTheme';
import { useRecoilValue } from 'recoil';
import { profileState } from '../../atoms';

export default function CodingImage({ visible }) {
  const classes = CodingImageTheme();
  const profile = useRecoilValue(profileState);
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);

  return profile.image ? (
    <Grid item container xs={12} md={6}>
      <Grow in={visible} timeout={1000}>
        <Paper
          className={
            hovered ? classes.imageContainerHoverd : classes.imageContainer
          }
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <img
            src={profile.image}
            alt='programming'
            className={classes.programmingImage}
          />
        </Paper>
      </Grow>
    </Grid>
  ) : null;
}
