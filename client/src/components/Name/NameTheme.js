import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  nameContainer: {
    color: '#ffffff',
    position: 'absolute',
    left: '50%',
    top: '50%',
    WebkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  text: {
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '1em',
    lineHeight: '2em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7em',
    },
  },
}));

export default useStyles;
