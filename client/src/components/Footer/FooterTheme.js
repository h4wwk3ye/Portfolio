import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    ...theme.typography.heading,
    backgroundColor: '#4478e3',
    marginTop: -5,
    padding: 2,
    textAlign: 'center',
    fontFamily: 'Sacramento',
  },
  link: {
    fontSize: '1em',
    color: '#fff',
    textDecoration: 'none',
  },
  shareButton: {
    height: 25,
    width: 25,
  },
}));

export default useStyles;
