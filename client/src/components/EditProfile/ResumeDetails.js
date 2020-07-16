import React from 'react';
import {
  Grid,
  TextField,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  InputAdornment,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditProfileTheme from './EditProfileTheme';

import ConfirmationDialog from '../shared/ConfirmationDialog';

import { useRecoilState } from 'recoil';
import { profileState } from '../../atoms';

export default function ResumeDetails() {
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

  React.useEffect(() => {
    if (!accepted) return;
    setProfile({
      ...profile,
      resume: '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accepted]);

  const clearResume = () => {
    setAccepted(false);
    handleClickOpenConfirmationDialog();
  };

  return (
    <Accordion elevation={0} defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
        className={classes.accordion}
      >
        <Typography className={classes.heading}>Resume</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.accordion}>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            value={profile.resume}
            name='resume'
            onChange={e => {
              setProfile({
                ...profile,
                resume: e.target.value,
              });
            }}
            fullWidth
            label='Resume URL'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <img
                    className={classes.icon}
                    src='/images/resume.svg'
                    alt='resume'
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={clearResume}
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
            placeholder='Resume URL'
          />
        </Grid>

        <ConfirmationDialog
          openConfirmationDialog={openConfirmationDialog}
          handleCloseConfirmationDialog={handleCloseConfirmationDialog}
          setAccepted={setAccepted}
          message='Are you sure you want to clear the resume URL?'
        />
      </AccordionDetails>
    </Accordion>
  );
}
