import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  home: {
    height: '100vh',
  },
  sectionContainer: {
    marginTop: 100,
    [theme.breakpoints.down('xs')]: {
      marginTop: 50,
    },
  },
  containerGrid: {
    width: '100%',
    margin: '0 auto',
    height: '100%',
  },

  heading: {
    ...theme.typography.heading,
    cursor: 'pointer',
    textAlign: 'center',
    color: theme.palette.additional.blue,
  },
  titleContainer: {
    backgroundColor: '#fff',
    // backgroundColor: theme.palette.additional.grey,
    width: '100%',
  },
  emptyGrid: {
    padding: '0 !important',
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
}));

export default useStyles;
