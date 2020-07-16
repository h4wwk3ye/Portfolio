import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export default function PositionedSnackbar({
  state,
  message,
  closeToast,
  severity = 'success',
}) {
  const { vertical, horizontal, open } = state;

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={closeToast}
      key={vertical + horizontal}
      autoHideDuration={severity === 'info' ? 9000000 : 1500}
    >
      <Alert onClose={closeToast} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
