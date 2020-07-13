import { createMuiTheme } from '@material-ui/core/styles';
import createPallete from '@material-ui/core/styles/createPalette';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const purpleDark = '#27273C'; // this color is at the top of the animation
const lightPurple = '#86377B'; //bottom of the animation
const grey = '#F9F9F9';
const blue = '#007CFE'; // from the coding image
const darkGrey = '#2D2D2D'; // stackoverflow dark page

const defaultTextFieldColor = 'rgba(0, 0, 0, 0.23)';

const breakpoints = createBreakpoints({});
const palette = createPallete({});

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: purpleDark,
    },
    additional: {
      lightPurple,
      grey,
      blue,
      darkGrey,
      defaultTextFieldColor,
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
    heading: {
      fontSize: '3em',
      fontWeight: 700,
      color: 'white',
      [breakpoints.down('xs')]: {
        fontSize: '2em',
      },
      [breakpoints.down('md')]: {
        fontSize: '2.5em',
      },
    },
    subHeading: {
      fontSize: '1.5em',
      fontWeight: 500,
      color: 'white',
      [breakpoints.down('xs')]: {
        fontSize: '1.3em',
      },
    },
    text: {
      fontSize: '1em',
      letterSpacing: '0.8px',
      color: 'white',
    },
  },
  transitions: {
    hovered: {
      boxShadow: '0px 10px 26px 0px rgba(0,0,0,0.8)',
      transform: 'scale(1.001)',
    },

    // **** these 3 are for progress bar
    root: {
      height: 5,
      borderRadius: 3,
    },
    colorPrimary: {
      backgroundColor: palette.grey[palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: blue,
    },
    // ****
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        '& $notchedOutline': {
          borderColor: defaultTextFieldColor, //default color
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: blue,
          '@media (hover: none)': {
            borderColor: defaultTextFieldColor,
          },
        },
        '&$focused $notchedOutline': {
          borderColor: blue,
          borderWidth: 1,
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$error': {
          color: 'red',
        },
        '&$focused': {
          color: blue,
        },
      },
    },
  },
});

export default Theme;
