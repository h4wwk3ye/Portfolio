import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  appBar: {},
  name: {
    marginLeft: '1em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-40%)',
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
      transform: 'scale(1.3)',
    },
  },
  tabSelected: {
    transform: 'scale(1.3)',
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
    padding: 0,
  },
  drawerIcon: {
    height: 35,
    width: 35,
  },
  drawerList: {
    width: '65%',
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
