import { createMuiTheme } from '@material-ui/core/styles';

const purpleDark = '#27273C'; // this color is at the top of the animation

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purpleDark,
    },
  },
  typography: {
    h4: {
      fontFamily: 'Sacramento',
      fontSize: '2.5rem',
    },
    tab: {
      // fontFamily: 'Sofia',
      textTransform: 'none',
      // fontSize: '1.3rem',
    },
  },
});

export default theme;
