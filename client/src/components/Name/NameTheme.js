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
  },
}));

export default useStyles;
