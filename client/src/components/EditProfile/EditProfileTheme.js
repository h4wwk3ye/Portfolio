import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    margin: 0,
  },
  paper: {
    margin: theme.spacing(10, 16),
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(5, 3),
      padding: theme.spacing(3),
    },
    width: '100%',
    // backgroundColor: theme.palette.additional.grey,
  },
  textFieldContainer: {
    margin: '1em auto',
  },
  icon: {
    height: 25,
    width: 25,
  },
  iconContainer: {
    // padding: 0,
  },
  endIcon: {
    height: 20,
    width: 20,
  },
  topText: {
    ...theme.typography.heading,
    color: theme.palette.additional.darkGey,
    textAlign: 'center',
    marginBottom: '1em',
  },
  heading: {
    ...theme.typography.subHeading,
    color: theme.palette.additional.blue,
  },
  subHeading: {
    ...theme.typography.text,
    color: theme.palette.additional.blue,
    paddingBottom: '0 !important',
  },
  accordion: {
    padding: 0,
  },
  uploadContainer: {
    border: 'solid 1px rgba(0, 0, 0, 0.23)', // default border color
    borderRadius: 2,
  },
  uploadButton: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // buttonText
    ...theme.typography.subHeading,
    textAlign: 'center',
    textTransform: 'none',
    color: 'currentColor',
    fontFamily: 'sofia',
  },
  addButton: {
    textAlign: 'left',
    textTransform: 'none',
    backgroundColor: theme.palette.additional.blue,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.additional.blue,
    },
  },
  sectionContainer: {
    marginBottom: '2.5em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.5em',
    },
  },
  checkBox: {
    root: {
      '&$checked': {
        color: 'white',
      },
    },
    checked: {},
  },
  submitButtonContainer: {
    margin: '0 auto',
    marginTop: '5em',
    [theme.breakpoints.down('sm')]: {
      marginTop: '3em',
    },
  },
  submitButton: {
    ...theme.typography.subHeading,
    textTransform: 'none',
    height: 50,
    backgroundColor: theme.palette.additional.blue,
    '&:hover': {
      backgroundColor: theme.palette.additional.blue,
    },
  },
  profileVisitContainer: {
    marginBottom: '1em',
  },
}));

export default useStyles;
