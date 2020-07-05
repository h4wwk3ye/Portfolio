import { createMuiTheme } from '@material-ui/core/styles';

const purpleDark = '#27273C'; // this color is at the top of the animation
const lightPurple = '#86377B';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purpleDark,
    },
    additional: {
      lightPurple,
    },
  },
  typography: {
    h4: {
      fontFamily: 'Sacramento',
      fontSize: '2.5rem',
    },
    tab: {
      textTransform: 'none',
    },
  },
});

export default theme;
