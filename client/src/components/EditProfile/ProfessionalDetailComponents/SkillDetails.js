import React from 'react';
import {
  Grid,
  TextField,
  InputAdornment,
  Button,
  IconButton,
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

export default function SkillDetails() {
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

  const handleChange = (e, index) => {
    let skills = [...profile.skills];
    skills[index] = e.target.value;
    setProfile({
      ...profile,
      skills,
    });
  };

  const addSkill = () => {
    setProfile({
      ...profile,
      skills: [...profile.skills, ''],
    });
  };

  // **** remove skill
  const [Index, setIndex] = React.useState(0);
  React.useEffect(() => {
    if (!accepted) return;

    let skills = [...profile.skills];
    skills.splice(Index, 1);
    setProfile({
      ...profile,
      skills,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accepted]);
  const removeSkill = index => {
    setAccepted(false);
    setIndex(index);
    handleClickOpenConfirmationDialog();
  };
  // ****

  return (
    <Accordion elevation={0} defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
        className={classes.accordion}
      >
        <Typography className={classes.heading}>Skills</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.accordion}>
        <Grid container spacing={3}>
          {profile.skills.map((skill, index) => (
            // using index as key instead of uuid because key needs to remain same otherwise it loses focus on change
            <Grid item sm={4} xs={12} key={index}>
              <TextField
                variant='outlined'
                value={skill}
                onChange={e => {
                  handleChange(e, index);
                }}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      {setOfSkills.has(skill.toLowerCase()) ? (
                        <img
                          src={`/images/skills/${skill.toLowerCase()}.svg`}
                          alt={skill}
                          className={classes.icon}
                        />
                      ) : (
                        <img
                          src={`/images/skills/defaultSkill.svg`}
                          alt={skill}
                          className={classes.icon}
                        />
                      )}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={() => {
                          removeSkill(index);
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
          ))}

          <Grid
            item
            xs={12}
            style={{
              padding: 0,
            }}
          ></Grid>
          <Grid item xs={12} sm={4}>
            <Button
              fullWidth
              variant='contained'
              className={classes.addButton}
              onClick={addSkill}
            >
              {profile.skills.length ? 'Add another skill' : 'Add skill'}
            </Button>
          </Grid>

          <ConfirmationDialog
            openConfirmationDialog={openConfirmationDialog}
            handleCloseConfirmationDialog={handleCloseConfirmationDialog}
            setAccepted={setAccepted}
            message='Are you sure you want to remove this skill?'
          />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
