import React from 'react';
import {
  Grid,
  TextField,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditProfileTheme from './EditProfileTheme';

import { useRecoilState } from 'recoil';
import { profileState } from '../../atoms';

export default function PersonalDetails() {
  const classes = EditProfileTheme();
  const [profile, setProfile] = useRecoilState(profileState);

  const uploadImage = event => {
    event.preventDefault();
    setProfile({ ...profile, image: event.target.files[0] });
  };

  const handleChange = event => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Accordion elevation={0} defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
        className={classes.accordion}
      >
        <Typography className={classes.heading}>Personal Details</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.accordion}>
        <Grid container spacing={3}>
          {/* Small Description */}
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              value={profile.smallDescription}
              name='smallDescription'
              onChange={handleChange}
              required
              fullWidth
              label='Small Description'
              helperText='1 line Description about yourself'
            />
          </Grid>

          {/* About */}
          <Grid item xs={12}>
            <TextField
              multiline // acts as text area
              variant='outlined'
              value={profile.about}
              name='about'
              onChange={handleChange}
              required
              fullWidth
              label='About'
              helperText='Short bio about yourself'
            />
          </Grid>

          {/* Location */}
          <Grid item xs={12}>
            <Grid container spacing={5} justify='space-around'>
              {/* City */}
              <Grid item xs={12} md={6}>
                <TextField
                  variant='outlined'
                  value={profile.loc.city}
                  onChange={e => {
                    let address = { ...profile.loc };
                    address.city = e.target.value;
                    setProfile({ ...profile, loc: address });
                  }}
                  required
                  fullWidth
                  label='City'
                />
              </Grid>

              {/* Coutnry */}
              <Grid item xs={12} md={6}>
                <TextField
                  variant='outlined'
                  value={profile.loc.country}
                  onChange={e => {
                    let address = { ...profile.loc };
                    address.country = e.target.value;
                    setProfile({ ...profile, loc: address });
                  }}
                  required
                  fullWidth
                  label='Country'
                />
              </Grid>

              {/* Image */}
              <Grid item xs={12} sm={4}>
                <input
                  accept='image/*'
                  type='file'
                  id='image'
                  hidden
                  onChange={uploadImage}
                />
                <FormControl
                  fullWidth
                  variant='outlined'
                  className={classes.uploadContainer}
                >
                  <label htmlFor='image'>
                    <Button
                      fullWidth
                      component='span'
                      className={classes.uploadButton}
                    >
                      <Grid container>
                        <Grid item xs={10} className={classes.textContainer}>
                          <Typography className={classes.text}>
                            Upload Image
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <img
                            src='/images/upload.svg'
                            alt='upload'
                            className={classes.icon}
                          />
                        </Grid>
                      </Grid>
                    </Button>
                  </label>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
