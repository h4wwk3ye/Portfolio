import React from 'react';
import {
  Grid,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditProfileTheme from '../EditProfileTheme';
import ConfirmationDialog from '../../shared/ConfirmationDialog';

import { useRecoilState } from 'recoil';
import { profileState } from '../../../atoms';

export default function EducationDetails() {
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
    // idk why I have to do this
    // doesnt lets me change directly like
    // eduucation[index].name = e.target.value
    // read only property error

    let education = [...profile.education];
    let edu = {
      ...education[index],
    };

    if (type === 'name') {
      edu.name = e.target.value;
    } else if (type === 'school') {
      edu.school = e.target.value;
    } else if (type === 'value') {
      let eduScore = {
        ...edu.score,
      };
      eduScore.value = e.target.value;
      edu.score = eduScore;
    } else {
      let eduScore = {
        ...edu.score,
      };
      eduScore.postfix = e.target.value;
      edu.score = eduScore;
    }
    education[index] = edu;
    setProfile({
      ...profile,
      education,
    });
  };

  const addEducation = () => {
    setProfile({
      ...profile,
      education: [
        ...profile.education,
        {
          name: '',
          school: '',
          score: {
            value: '',
            postfix: '%',
          },
        },
      ],
    });
  };

  // **** Deleting an education
  const [Index, setIndex] = React.useState(0);
  React.useEffect(() => {
    if (!accepted) return;

    let education = [...profile.education];
    education.splice(Index, 1);
    setProfile({ ...profile, education });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accepted]);

  const removeEducation = index => {
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
        <Typography className={classes.heading}>Education</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.accordion}>
        <Grid container spacing={3}>
          {profile.education.map((edu, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Grid container spacing={3}>
                {/* Course Name */}
                <Grid item xs={12}>
                  <TextField
                    label='Course Name'
                    variant='outlined'
                    value={edu.name}
                    onChange={e => {
                      handleChange(e, index, 'name');
                    }}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            onClick={() => {
                              removeEducation(index);
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

                {/* School Name */}
                <Grid item xs={12}>
                  <TextField
                    label='School Name'
                    variant='outlined'
                    value={edu.school}
                    onChange={e => {
                      handleChange(e, index, 'school');
                    }}
                    fullWidth
                  />
                </Grid>

                {/* score */}
                <Grid
                  item
                  xs={12}
                  // no bottom margin in case of last row
                  // no of rows  * no of elements in each row (3) - ( 1 + 3);
                  // 1 for index, 3 for elements in each row
                  className={
                    // since only 1 item in a row ifs creen width is smaller than sm
                    smallerThanSm
                      ? index < profile.education.length - 1
                        ? classes.sectionContainer
                        : null
                      : index <= Math.ceil(profile.education.length / 3) * 3 - 4
                      ? classes.sectionContainer
                      : null
                  }
                >
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <TextField
                        label='Score'
                        variant='outlined'
                        value={edu.score.value}
                        onChange={e => {
                          handleChange(e, index, 'value');
                        }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl
                        fullWidth
                        variant='outlined'
                        className={classes.formControl}
                      >
                        <InputLabel>Type</InputLabel>
                        <Select
                          value={edu.score.postfix}
                          onChange={e => {
                            handleChange(e, index, 'postfix');
                          }}
                          label='Type'
                        >
                          <MenuItem value={'CGPA'}>CPGA</MenuItem>
                          <MenuItem value={'%'}>%</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
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
              onClick={addEducation}
            >
              {profile.education.length
                ? 'Add another education'
                : 'Add education'}
            </Button>
          </Grid>

          <ConfirmationDialog
            openConfirmationDialog={openConfirmationDialog}
            handleCloseConfirmationDialog={handleCloseConfirmationDialog}
            setAccepted={setAccepted}
            message='Are you sure you want to remove this education?'
          />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
