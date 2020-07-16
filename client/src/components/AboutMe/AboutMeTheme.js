import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 30,
    // backgroundColor: theme.palette.additional.grey,
    width: '100%',
    backgroundColor: theme.palette.additional.darkGrey,
  },
  paperHoverd: {
    padding: 30,
    // backgroundColor: theme.palette.additional.grey,
    width: '100%',
    backgroundColor: theme.palette.additional.darkGrey,
    ...theme.transitions.hovered,
  },
  aboutContainer: {},
  heading: {
    ...theme.typography.heading,
  },
  smallDescription: {
    ...theme.typography.subHeading,
    marginTop: '1.5em',
  },
  about: {
    ...theme.typography.text,
    marginTop: '2.2em',
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
  locationContainer: {
    marginTop: '1em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  locationIcon: {
    height: 48,
    width: 48,
  },
  locationText: {
    ...theme.typography.subHeading,
    margin: 0,
    bottom: 0,
    textTransform: 'none',
    // color: theme.palette.additional.blue,
    color: '#fff',
  },
  resumeButton: {
    ...theme.typography.subHeading,
    textTransform: 'none',
    borderColor: '#fff',
    color: '#fff',
    textAlign: 'center',
  },
  resumeButtonDisabled: {
    textTransform: 'none',
    borderColor: 'red !important',
    color: 'red !important',
  },
  resumeIcon: {
    height: 50,
    width: 50,
  },
}));

export default useStyles;
