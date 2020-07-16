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

export default function ProjectDetails() {
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

  const handleChange = (e, index, type) => {
    // idk why I have to do this
    // doesnt lets me change directly like
    // projects[index].name = e.target.value
    // read only property error
    let projects = [...profile.projects];
    let project = { ...projects[index] };

    if (type === 'name') {
      project.name = e.target.value;
    } else if (type === 'description') {
      project.description = e.target.value;
    } else if (type === 'gitLink') {
      project.gitLink = e.target.value;
    }
    projects[index] = project;
    setProfile({ ...profile, projects });
  };

  const addProject = () => {
    setProfile({
      ...profile,
      projects: [
        ...profile.projects,
        { name: '', description: '', gitLink: '' },
      ],
    });
  };

  // **** Deleting a project
  const [Index, setIndex] = React.useState(0);
  React.useEffect(() => {
    if (!accepted) return;

    let projects = [...profile.projects];
    projects.splice(Index, 1);
    setProfile({ ...profile, projects });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accepted]);

  const removeProject = index => {
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
        <Typography className={classes.heading}>Projects</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.accordion}>
        <Grid container spacing={3}>
          {profile.projects.map((project, index) => (
            // using index as key because key needs to remain same otherwise it loses focus on change
            <React.Fragment key={index}>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  value={project.name}
                  onChange={e => {
                    handleChange(e, index, 'name');
                  }}
                  label='Project Name'
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          onClick={() => {
                            removeProject(index);
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

              <Grid item xs={12}>
                <TextField
                  multiline
                  label='Project Description'
                  variant='outlined'
                  value={project.description}
                  onChange={e => {
                    handleChange(e, index, 'description');
                  }}
                  fullWidth
                  helperText='Separate points by new line'
                />
              </Grid>

              {/* Git Link */}
              <Grid
                item
                xs={12}
                // no bottom margin in case of last project
                className={
                  index !== profile.projects.length - 1
                    ? classes.sectionContainer
                    : null
                }
              >
                <TextField
                  label='Git Link'
                  variant='outlined'
                  value={project.gitLink}
                  onChange={e => {
                    handleChange(e, index, 'gitLink');
                  }}
                  fullWidth
                />
              </Grid>
            </React.Fragment>
          ))}

          <Grid item xs={12} style={{ padding: 0 }}></Grid>
          <Grid item xs={12} sm={4}>
            <Button
              fullWidth
              variant='contained'
              className={classes.addButton}
              onClick={addProject}
            >
              {profile.skills.length ? 'Add another project' : 'Add project'}
            </Button>
          </Grid>

          <ConfirmationDialog
            openConfirmationDialog={openConfirmationDialog}
            handleCloseConfirmationDialog={handleCloseConfirmationDialog}
            setAccepted={setAccepted}
            message='Are you sure you want to remove this project?'
          />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
