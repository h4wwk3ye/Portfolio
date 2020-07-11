import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    ...theme.typography.heading,
    backgroundColor: '#4478e3',
    marginTop: -5,
    padding: 0,
    textAlign: 'center',
    fontFamily: 'Sacramento',
  },
}));

export default useStyles;
