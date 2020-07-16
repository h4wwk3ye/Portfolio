import React from 'react';
import { Dialog, DialogActions, DialogTitle, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dialog: {
    borderRadius: 10,
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
    padding: '1em',
  },
  title: {
    fontSize: '1em',
    fontWeight: 500,
    paddingLeft: 0,
    paddingRight: 0,
  },
  buttonOutlined: {
    textTransform: 'none',
    color: theme.palette.additional.blue,
    borderColor: theme.palette.additional.blue,
    borderRadius: 2,
    width: 50,
  },
  buttonContained: {
    textTransform: 'none',
    backgroundColor: theme.palette.additional.blue,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.additional.blue,
    },
    width: 50,
  },
}));

export default function AlertDialog({
  openConfirmationDialog,
  handleCloseConfirmationDialog,
  setAccepted,
  message,
}) {
  const classes = useStyles();

  return (
    <Dialog
      open={openConfirmationDialog}
      onClose={handleCloseConfirmationDialog}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      classes={{
        paper: classes.dialog,
      }}
    >
      <DialogTitle
        className={classes.title}
        id='alert-dialog-title'
        disableTypography
      >
        {message}
      </DialogTitle>

      <DialogActions>
        <Button
          variant='outlined'
          onClick={() => {
            handleCloseConfirmationDialog();
            setAccepted(false);
          }}
          className={classes.buttonOutlined}
        >
          No
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            handleCloseConfirmationDialog();
            setAccepted(true);
          }}
          className={classes.buttonContained}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
