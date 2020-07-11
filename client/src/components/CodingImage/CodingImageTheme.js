import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  imageContainer: {
    backgroundColor: theme.palette.additional.grey,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
  },
  imageContainerHoverd: {
    backgroundColor: theme.palette.additional.grey,
    ...theme.transitions.hovered,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    width: '100%',
  },
  programmingImage: {
    maxHeight: 500,
    maxWidth: 800,
    width: '100%',
    height: 'auto',
  },
}));

export default useStyles;
