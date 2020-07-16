import React from 'react';
import {
  Grid,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  FormControlLabel,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Checkbox,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import EditProfileTheme from '../EditProfileTheme';
import ConfirmationDialog from '../../shared/ConfirmationDialog';

import { useRecoilState } from 'recoil';
import { profileState } from '../../../atoms';

export default function ExperienceDetails() {
  const classes = EditProfileTheme();
  const [profile, setProfile] = useRecoilState(profileState);
  const theme = useTheme();
  const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));

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

  const handleChange = (e, index, type) => {
    let experiences = [...profile.experiences];
    let experience = {
      ...experiences[index],
    };

    if (type === 'role') {
      experience.role = e.target.value;
    } else if (type === 'name') {
      experience.name = e.target.value;
    } else if (type === 'currentlyWorking') {
      experience.currentlyWorking = !experience.currentlyWorking;
    }

    experiences[index] = experience;
    setProfile({
      ...profile,
      experiences,
    });
  };

  const handleDateChange = (newDate, index, type) => {
    let experiences = [...profile.experiences];
    let experience = {
      ...experiences[index],
    };

    if (type === 'from') {
      try {
        experience.timeFrom = newDate.toDate();
      } catch (error) {
        experience.timeFrom = null;
      }
    } else {
      try {
        experience.timeTo = newDate.toDate();
      } catch (error) {
        experience.timeTo = null;
      }
    }

    experiences[index] = experience;
    setProfile({
      ...profile,
      experiences,
    });
  };

  const addExperience = () => {
    setProfile({
      ...profile,
      experiences: [
        ...profile.experiences,
        {
          role: '',
          name: '',
          currentlyWorking: false,
          timeFrom: Date.now(),
          timeTo: Date.now(),
        },
      ],
    });
  };

  // **** Deleting an experience
  const [Index, setIndex] = React.useState(0);
  React.useEffect(() => {
    if (!accepted) return;

    let experiences = [...profile.experiences];
    experiences.splice(Index, 1);
    setProfile({ ...profile, experiences });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accepted]);

  const removeExperience = index => {
    setAccepted(false);
    setIndex(index);
    handleClickOpenConfirmationDialog(index);
  };
  // *****

  return (
    <Accordion elevation={0} defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
        className={classes.accordion}
      >
        <Typography className={classes.heading}>Experiences</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.accordion}>
        <Grid container spacing={5}>
          {profile.experiences.map((experience, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Grid container spacing={3}>
                {/* Role Name */}
                <Grid item xs={12}>
                  <TextField
                    label='Role'
                    variant='outlined'
                    value={experience.role}
                    onChange={e => {
                      handleChange(e, index, 'role');
                    }}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            onClick={() => {
                              removeExperience(index);
                            }}
                            className={classes.iconContainer}
                          >
                            <img
                              src='/images/delete.svg'
                              alt='delete'
                              className={classes.endIcon}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Company Name */}
                <Grid item xs={12}>
                  <TextField
                    label='Company Name'
                    variant='outlined'
                    value={experience.name}
                    onChange={e => {
                      handleChange(e, index, 'name');
                    }}
                    fullWidth
                  />
                </Grid>

                {/* Time From */}
                <Grid item xs={12} sm={6}>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                      fullWidth
                      label='Time From'
                      inputVariant='outlined'
                      views={(['year'], ['month'])}
                      variant='inline'
                      format=' MMM yyyy'
                      value={experience.timeFrom}
                      onChange={newDate => {
                        handleDateChange(newDate, index, 'from');
                      }}
                      keyboardIcon={
                        <img
                          src='/images/date.svg'
                          alt='date'
                          className={classes.icon}
                        />
                      }
                    />
                  </MuiPickersUtilsProvider>
                </Grid>

                {/* Time To */}
                <Grid item xs={12} sm={6}>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                      fullWidth
                      disabled={experience.currentlyWorking}
                      label='Time To'
                      inputVariant='outlined'
                      views={(['year'], ['month'])}
                      variant='inline'
                      format=' MMM yyyy'
                      value={experience.timeTo}
                      onChange={newDate => {
                        handleDateChange(newDate, index, 'to');
                      }}
                      keyboardIcon={
                        <img
                          src='/images/date.svg'
                          alt='date'
                          className={classes.icon}
                        />
                      }
                    />
                  </MuiPickersUtilsProvider>
                </Grid>

                <Grid
                  item
                  xs={12}
                  // no bottom margin in case of last row
                  // no of rows  * no of elements in each row (2) - ( 1 + 2);
                  // 1 for index, 2 for elements in each row
                  className={
                    // since only 1 item in a row ifs sreen width is smaller than sm
                    smallerThanSm
                      ? index < profile.experiences.length - 1
                        ? classes.sectionContainer
                        : null
                      : index <=
                        Math.ceil(profile.experiences.length / 2) * 2 - 3
                      ? classes.sectionContainer
                      : null
                  }
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        color='secondary'
                        checked={experience.currentlyWorking}
                        onChange={e => {
                          handleChange(e, index, 'currentlyWorking');
                        }}
                        name='checkedF'
                      />
                    }
                    label='Currently Working Here'
                  />
                </Grid>
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12} style={{ padding: 0 }}></Grid>
          <Grid item xs={12} sm={4}>
            <Button
              fullWidth
              variant='contained'
              className={classes.addButton}
              onClick={addExperience}
            >
              {profile.experiences.length
                ? 'Add another experience'
                : 'Add experience'}
            </Button>
          </Grid>
        </Grid>

        <ConfirmationDialog
          openConfirmationDialog={openConfirmationDialog}
          handleCloseConfirmationDialog={handleCloseConfirmationDialog}
          setAccepted={setAccepted}
          message='Are you sure you want to remove this experience?'
        />
      </AccordionDetails>
    </Accordion>
  );
}
