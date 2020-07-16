import React, { useState } from 'react';
import {
  Grid,
  Paper,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  CssBaseline,
  Typography,
  FormHelperText,
} from '@material-ui/core';
import Button from '../shared/SignUpLoginButton';
import LoginTheme from './LoginTheme';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link, Redirect } from 'react-router-dom';

// On Login
import ToastNotification from '../shared/ToastNotification';
import loginUser from '../../services/loginUser';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms';
// For token
import setAuthToken from '../../utils/setAuthToken';
import getUserFromToken from '../../services/getUserFromToken';

export default function Login() {
  const classes = LoginTheme();
  const [auth, setAuth] = useRecoilState(authState);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  //  **** for the toast notification
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('');

  const [state, setState] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
  });

  const showToast = () => {
    setState({ ...state, open: true });
  };

  const closeToast = () => {
    setState({ ...state, open: false });
  };

  // ****

  const handleChange = event => {
    // Clear errors
    setErrors({
      email: '',
      password: '',
    });

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    (async () => {
      const user = {
        email: formData.email,
        password: formData.password,
      };
      const response = await loginUser(user);

      if (response.errors) {
        localStorage.removeItem('token'); // remove any previous token
        response.errors.map(error =>
          setErrors(oldError => {
            return { ...oldError, [error.param]: error.msg };
          })
        );
        setMessage('Failed to Login');
        setSeverity('error');
        showToast();
      } else {
        //success
        localStorage.setItem('token', response.token);

        // get user from token
        setAuthToken(response.token);
        const user = await getUserFromToken();

        setAuth({
          ...auth,
          token: response.token,
          isAuthenticated: true,
          user: user,
        });

        setMessage('Logged in successfuly');
        setSeverity('success');
        showToast();
      }
    })();
  };

  // Redirecting incase of authenticated
  if (auth.isAuthenticated) {
    return <Redirect to='/edit' />;
  }

  return (
    <Grid container className={classes.mainContainer}>
      <ToastNotification
        state={state}
        closeToast={closeToast}
        message={message}
        severity={severity}
      />

      <CssBaseline />

      <Grid item xs={false} sm={5} md={7} className={classes.image} />

      <Grid
        item
        container
        xs={12}
        sm={7}
        md={5}
        className={classes.paperContainer}
      >
        <Paper className={classes.paper} elevation={10}>
          {/* Signup Icon */}
          <Grid item xs={12} className={classes.signInIconContainer}>
            <img
              src='/images/login.svg'
              alt='signup'
              className={classes.signInIcon}
            />
          </Grid>

          {/* Text */}
          <Grid item xs={12} className={classes.headingContainer}>
            <Typography variant='h4' className={classes.heading}>
              Welcome back
            </Typography>
            <Typography className={classes.subHeading}>
              Enter your email and password to login
            </Typography>
          </Grid>

          {/* Email */}
          <Grid item xs={12} className={classes.textField}>
            <FormControl fullWidth variant='outlined'>
              <InputLabel error={errors.email !== ''}>Email</InputLabel>
              <OutlinedInput
                value={formData.email}
                name='email'
                onChange={handleChange}
                labelWidth={45}
                error={errors.email !== ''}
              />
            </FormControl>
            <FormHelperText className={classes.helperText}>
              {errors.email}
            </FormHelperText>
          </Grid>

          {/*Password */}
          <Grid item xs={12} className={classes.textField}>
            <FormControl fullWidth variant='outlined'>
              <InputLabel error={errors.password !== ''}>Password</InputLabel>
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                name='password'
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowPassword(!showPassword)}
                      edge='end'
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={75}
                error={errors.password !== ''}
              />
              <FormHelperText className={classes.helperText}>
                {errors.password}
              </FormHelperText>
            </FormControl>
          </Grid>

          {/* SignIn Button */}
          <Grid item xs={12} className={classes.signInButtonContainer}>
            <Button
              className={classes.signupButton}
              label='Sign In'
              onClick={handleSubmit}
            />
          </Grid>

          {/* Dont have and account */}
          <Grid container>
            <Grid item xs={false} md={2}></Grid>
            <Grid
              item
              xs={12}
              md={8}
              className={classes.signInButtonContainer}
              component={Link}
              to='/register'
            >
              <Grid container justify='center' className={classes.signInText}>
                Don't have an account? Create One
              </Grid>
            </Grid>
            <Grid item xs={false} md={2}></Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
