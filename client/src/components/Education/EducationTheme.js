import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  educationContainer: {
    padding: 30,
    backgroundColor: theme.palette.additional.darkGrey,
    width: '100%',
  },
  educationContainerHoverd: {
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
  schoolContainer: {
    marginTop: '1.5em',
  },
  heading: {
    ...theme.typography.heading,
  },
  schoolName: {
    ...theme.typography.subHeading,
  },
  text: {
    ...theme.typography.text,
    marginTop: '0.7em',
  },
  divider: {
    borderTop: '1px dashed #fff',
    borderBottom: 'none',
    marginTop: '1.5em', // same as container margin
  },
}));

export default useStyles;
