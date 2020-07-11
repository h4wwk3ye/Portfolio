import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  contactsContainer: {
    padding: 30,
    backgroundColor: theme.palette.additional.darkGrey,
    width: '100%',
  },
  contactsContainerHoverd: {
    padding: 30,
    ...theme.transitions.hovered,
    backgroundColor: theme.palette.additional.darkGrey,
    width: '100%',
  },
  containerGrid: {
    width: '100%',
    margin: '0 auto',
    height: '100%',
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
  contactIconContainer: {
    margin: '0 auto',
  },
  contactIcon: {
    height: 50,
    width: 50,
    textAlign: 'center',
  },
  contactName: {
    ...theme.typography.subHeading,
    textAlign: 'center',
  },
  allContactsContainer: {
    marginTop: 0,
  },
  singleContactContainer: {
    marginTop: '1.5em',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
    },
  },
}));

export default useStyles;
