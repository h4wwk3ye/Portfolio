import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  skillsContainer: {
    padding: 30,
    backgroundColor: theme.palette.additional.darkGrey,
    width: '100%',
  },
  skillsContainerHoverd: {
    padding: 30,
    backgroundColor: theme.palette.additional.darkGrey,
    ...theme.transitions.hovered,
    width: '100%',
  },
  // **** these 3 are for progress bar
  root: {
    ...theme.transitions.root,
  },
  colorPrimary: {
    ...theme.transitions.colorPrimary,
  },
  bar: {
    ...theme.transitions.bar,
  },
  // ****
  heading: {
    ...theme.typography.heading,
  },
  allSkillsContainer: {
    marginTop: 0,
  },
  singleSkillContainer: {
    marginTop: '1.5em',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
    },
  },
  skillName: {
    ...theme.typography.subHeading,
    textAlign: 'center',
  },
  skillIconContainer: {
    margin: '0 auto',
  },
  skillIcon: {
    height: 50,
    width: 50,
    textAlign: 'center',
  },
}));

export default useStyles;
