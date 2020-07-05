import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  home: {},
  about: {
    marginTop: '100vh',
    textTransform: 'none',
  },
  programmingImage: {
    maxHeight: '70vh',
    maxWidth: '50vw',
    width: 'auto',
    height: 'auto',
  },
}));

export default useStyles;
