import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  projectsContainer: {
    padding: 15,
    backgroundColor: theme.palette.additional.darkGrey,
    // width: '100%',
  },
  projectsContainerHovered: {
    padding: 15,
    backgroundColor: theme.palette.additional.darkGrey,
    // width: '100%',
    ...theme.transitions.hovered,
  },
  heading: {
    ...theme.typography.subHeading,
  },

  expandIcon: {
    height: 30,
    width: 30,
    color: 'white',
  },
  text: {
    ...theme.typography.text,
  },
  gitLinkButton: {
    ...theme.typography.subHeading,
    textTransform: 'none',
    borderColor: theme.palette.additional.blue,
    color: theme.palette.additional.blue,
    textAlign: 'center',
  },
  gitLinkButtonDisabled: {
    textTransform: 'none',
    borderColor: 'red !important',
    color: 'red !important',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  },
  externalIcon: {
    height: 25,
    width: 25,
  },
}));

export default useStyles;
