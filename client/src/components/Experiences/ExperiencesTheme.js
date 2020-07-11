import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  experienceContainer: {
    padding: 30,
    backgroundColor: theme.palette.additional.darkGrey,
    width: '100%',
  },
  experienceContainerHoverd: {
    padding: 30,
    ...theme.transitions.hovered,
    backgroundColor: theme.palette.additional.darkGrey,
    width: '100%',
  },
  heading: {
    ...theme.typography.heading,
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
  singleExperienceContainer: {
    marginTop: '1.5em',
  },
  roleName: {
    ...theme.typography.subHeading,
  },
  time: {
    ...theme.typography.text,
    marginTop: '0.7em',
    fontWeight: 500,
  },
  company: {
    ...theme.typography.text,
    marginTop: '0.7em',
    fontWeight: 450,
  },
  divider: {
    borderTop: '1px dashed #fff',
    borderBottom: 'none',
    marginTop: '1.5em', // same as container margin
  },
}));

export default useStyles;
