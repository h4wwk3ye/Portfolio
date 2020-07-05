import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  name: {
    marginLeft: '1em',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25,
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
    },
  },
  icon: {
    verticalAlign: 'text-bottom',
    marginRight: 5,
    height: 25,
    width: 25,
  },
  drawerContainer: {
    backgroundColor: theme.palette.primary.main,
  },
  drawerIconContainer: {
    marginLeft: 'auto',
  },
  drawerIcon: {
    height: 35,
    width: 35,
  },
  drawerList: {
    width: '70%',
  },
  closeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 30,
  },
  drawerTab: {
    color: '#ffffff',
    opacity: 0.5,
    display: 'flex',
    alignItems: 'center',
    padding: '0 auto',
  },
  drawerTabSelected: {
    opacity: 1,
    backgroundColor: 'transparent !important',
  },
}));

export default useStyles;
