import React from 'react';
import {
  Grid,
  TextField,
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditProfileTheme from './EditProfileTheme';
import ConfirmationDialog from '../shared/ConfirmationDialog';

import { useRecoilState } from 'recoil';
import { profileState } from '../../atoms';

export default function SocialMedia() {
  const classes = EditProfileTheme();
  const [profile, setProfile] = useRecoilState(profileState);

  // ******** for the confirmation doalog
  const [openConfirmationDialog, setOpenConfirmationDialog] = React.useState(
    false
  );
  const handleClickOpenConfirmationDialog = () => {
    setOpenConfirmationDialog(true);
  };
  const handleCloseConfirmationDialog = () => {
    setOpenConfirmationDialog(false);
  };
  const [accepted, setAccepted] = React.useState(false);
  // ****************

  const handleChange = e => {
    setProfile({
      ...profile,
      connect: { ...profile.connect, [e.target.name]: e.target.value },
    });
  };

  // **** Clear URL;
  const [Name, setName] = React.useState('');
  React.useEffect(() => {
    if (!accepted) return;
    setProfile({
      ...profile,
      connect: { ...profile.connect, [Name]: '' },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accepted]);

  const clearText = name => {
    setAccepted(false);
    setName(name);
    handleClickOpenConfirmationDialog();
  };
  // *****

  return (
    // <Grid item xs={12} >
    <Accordion elevation={0} defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
        className={classes.accordion}
      >
        <Typography className={classes.heading}>Social Media Links</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.accordion}>
        <Grid container spacing={3}>
          {/* Facebook */}
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              value={profile.connect.facebook}
              name='facebook'
              onChange={handleChange}
              fullWidth
              label='Facebook'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img
                      className={classes.icon}
                      src='/images/contact/facebook.svg'
                      alt='facebook'
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => {
                        clearText('facebook');
                      }}
                      className={classes.iconContainer}
                    >
                      <img
                        className={classes.endIcon}
                        src='/images/clear.svg'
                        alt='clear'
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder='Facebook URL'
            />
          </Grid>

          {/* Instagram */}
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              value={profile.connect.instagram}
              name='instagram'
              onChange={handleChange}
              fullWidth
              label='Instagram'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img
                      className={classes.icon}
                      src='/images/contact/instagram.svg'
                      alt='insta'
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => {
                        clearText('instagram');
                      }}
                      className={classes.iconContainer}
                    >
                      <img
                        className={classes.endIcon}
                        src='/images/clear.svg'
                        alt='clear'
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder='Instagram URL'
            />
          </Grid>

          {/* LinkedIn */}
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              value={profile.connect.linkedin}
              name='linkedin'
              onChange={handleChange}
              fullWidth
              label='LinkedIn'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img
                      className={classes.icon}
                      src='/images/contact/linkedin.svg'
                      alt='linkedin'
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => {
                        clearText('linkedin');
                      }}
                      className={classes.iconContainer}
                    >
                      <img
                        className={classes.endIcon}
                        src='/images/clear.svg'
                        alt='clear'
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder='LinkedIn URL'
            />
          </Grid>

          {/* GitHub */}
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              value={profile.connect.github}
              name='github'
              onChange={handleChange}
              fullWidth
              label='Github'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img
                      className={classes.icon}
                      src='/images/contact/github.svg'
                      alt='github'
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => {
                        clearText('github');
                      }}
                      className={classes.iconContainer}
                    >
                      <img
                        className={classes.endIcon}
                        src='/images/clear.svg'
                        alt='clear'
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder='Github URL'
            />
          </Grid>

          {/* Twitter */}
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              value={profile.connect.twitter}
              name='twitter'
              onChange={handleChange}
              fullWidth
              label='Twitter'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img
                      className={classes.icon}
                      src='/images/contact/twitter.svg'
                      alt='twitter'
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => {
                        clearText('twitter');
                      }}
                      className={classes.iconContainer}
                    >
                      <img
                        className={classes.endIcon}
                        src='/images/clear.svg'
                        alt='clear'
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder='Twitter URL'
            />
          </Grid>

          {/* Steam */}
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              value={profile.connect.steam}
              name='steam'
              onChange={handleChange}
              fullWidth
              label='Steam'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img
                      className={classes.icon}
                      src='/images/contact/steam.svg'
                      alt='steam'
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => {
                        clearText('steam');
                      }}
                      className={classes.iconContainer}
                    >
                      <img
                        className={classes.endIcon}
                        src='/images/clear.svg'
                        alt='clear'
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder='Steam URL'
            />
          </Grid>
        </Grid>
      </AccordionDetails>

      <ConfirmationDialog
        openConfirmationDialog={openConfirmationDialog}
        handleCloseConfirmationDialog={handleCloseConfirmationDialog}
        setAccepted={setAccepted}
        message='Are you sure you want to clear this URL?'
      />
    </Accordion>
    // </Grid>
  );
}
