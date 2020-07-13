import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// https://gist.github.com/tunguskha/0d82bfeb498567a4e19493925df529cb

const useStyles = makeStyles(theme => ({
  signupButton: {
    position: 'relative',
    outline: 'none',
    border: 'none',
    WebkitAppearance: 'none',
    WebkitTapHighlightColor: 'transparent',
    cursor: 'pointer',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    userSelect: 'none',
    padding: '0.75em 1.75em',
    borderRadius: '50px',
    display: 'inline-block',
    color: '#fff',
    width: '80%',
    textDecoration: 'none',
    // Gradinet
    background:
      '-webkit-gradient(linear, left top, right top, from(#7f00ff, to(#e100ff)',
    // eslint-disable-next-line
    background: 'linear-gradient(to right, #7f00ff, #e100ff)',
    zIndex: 1000,

    '&::after': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      bottom: '-10px',
      left: '5%',
      height: '110%',
      width: '90%',
      opacity: '0.8',
      borderRadius: '50px',

      /* Declaring our shadow color inherit from the parent (button) */
      background: 'inherit',

      /* Blurring the element for shadow effect */
      WebkitFilter: 'blur(6px)',
      MozFilter: 'blur(6px)',
      filter: 'blur(6px)',

      /* Transition for the magic */
      WebkitTransition: 'all 0.2s',
      transition: 'all 0.2s',
    },
    '&:hover': {
      '&::after': {
        /* Changing blur effect */
        WebkitFilter: 'blur(4px)',
        MozFilter: 'blur(4px)',
        filter: 'blur(4px)',
        bottom: '-5px',
        left: '5%',
      },
      filter: 'brightness(1.05) contrast(1.05)',
      backgroundPosition: 'right center',
    },
  },
}));

export default function SignUpLoginButton({ label, onClick }) {
  const classes = useStyles();
  return (
    <Button className={classes.signupButton} onClick={onClick}>
      {label}
    </Button>
  );
}
