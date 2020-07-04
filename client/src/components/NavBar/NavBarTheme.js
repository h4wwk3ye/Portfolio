import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  name: {
    marginLeft: '1em',
    whiteSpace: 'nowrap',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25,
    '&:hover': {
      opacity: 1,
    },
  },
  icon: {
    verticalAlign: 'bottom',
    marginRight: 5,
    height: 35,
    width: 35,
  },
}));

export default useStyles;
