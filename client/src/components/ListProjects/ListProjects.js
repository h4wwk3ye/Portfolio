import React from 'react';
import {
  Grid,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Grow,
  Button,
  Link,
  Tooltip,
} from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { profileState } from '../../atoms';
import { v4 as uuid } from 'uuid'; // for generating random keys
import ListingProjectTheme from './ListProjectsTheme';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function ListProjects({ visible }) {
  const classes = ListingProjectTheme();
  const profile = useRecoilValue(profileState);

  return (
    <React.Fragment>
      {profile.projects.map((project, i) => (
        <Grid item md={4} xs={12} key={i}>
          <Grow in={visible} timeout={1000}>
            <Accordion // hovering shadow this type on expansion
              className={classes.projectsContainer}
              classes={{
                expanded: classes.projectsContainerHovered,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography className={classes.heading}>
                  {project.name}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <div className={classes.text}>
                  {project.description
                    ? project.description
                        .split('\n')
                        .map(line => <p key={uuid()}> {'• ' + line} </p>)
                    : // spilts by new line and adds a bullet point
                      ''}
                </div>
              </AccordionDetails>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  className={classes.buttonContainer}
                  // Link part
                  component={Link}
                  href={project.gitLink ? `${project.gitLink}` : null}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Tooltip
                    title={project.gitLink ? '' : 'Git Link not provided'}
                  >
                    {/* span inorder to make tooltip work. It doesnt work with disabled button */}
                    <span>
                      <Button
                        className={classes.gitLinkButton}
                        classes={{
                          disabled: classes.gitLinkButtonDisabled,
                        }}
                        disabled={!project.gitLink}
                        variant='outlined'
                        startIcon={
                          <img
                            src='/images/externalLink.svg'
                            alt='external'
                            className={classes.externalIcon}
                          />
                        }
                      >
                        Git Link
                      </Button>
                    </span>
                  </Tooltip>
                </Grid>
              </Grid>
            </Accordion>
          </Grow>
        </Grid>
      ))}
    </React.Fragment>
  );
}
