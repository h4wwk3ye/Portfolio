import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: '100vh',
  },
  paperContainer: {
    height: '100%',
  },
  paper: {
    width: '100%',
    padding: 50,
    [theme.breakpoints.down('sm')]: {
      padding: 30,
    },
  },
  headingContainer: {
    margin: '1em 0',
  },
  heading: {
    ...theme.typography.heading,
    color: theme.palette.additional.darkGey,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: '1em',
    color: theme.palette.additional.defaultTextFieldColor,
    textAlign: 'center',
  },
  helperText: {
    color: 'red',
    marginLeft: 0,
  },
  image: {
    height: '100%',
    backgroundImage: 'url(https://source.unsplash.com/random/?computer)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  signupIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupIcon: {
    height: 50,
    width: 50,
  },
  textField: {
    margin: '2em auto',
  },
  signupButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2em',
    // cursor: 'pointer',
    textDecoration: 'none',
  },
  signInText: {
    fontSize: '1em',
    color: theme.palette.additional.blue,
  },
}));

export default useStyles;
