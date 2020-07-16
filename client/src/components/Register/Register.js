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
import RegisterTheme from './RegisterTheme';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import ToastNotification from '../shared/ToastNotification';
import registerUser from '../../services/registerUser';
import { Link, useHistory, Redirect } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { authState } from '../../atoms';

export default function Register() {
  const classes = RegisterTheme();
  const history = useHistory();
  const auth = useRecoilValue(authState);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      name: '',
      email: '',
      password: '',
    });

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords don't match");
      setSeverity('error');
      showToast();
    } else {
      (async () => {
        const newUser = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        };
        const response = await registerUser(newUser);

        if (response.errors) {
          response.errors.map(error =>
            setErrors(oldError => {
              return { ...oldError, [error.param]: error.msg };
            })
          );
          setMessage('Failed to register user');
          setSeverity('error');
          showToast();
        } else {
          //success
          setMessage('Account created successfuly');
          setSeverity('success');
          showToast(); // default message and severity

          setTimeout(() => {
            // Redirect to login
            history.push('/login');
          }, 1500);
        }
      })();
    }
  };

  // Redirecting incase of authenticated
  if (auth.isAuthenticated) {
<<<<<<< HEAD
    return <Redirect to='/edit' />;
=======
    return <Redirect to='/user' />;
>>>>>>> 57670d9a8d0aedab8e5f7bbc2a349df8c4357d5e
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
          <Grid item xs={12} className={classes.signupIconContainer}>
            <img
              src='/images/signup.svg'
              alt='signup'
              className={classes.signupIcon}
            />
          </Grid>

          {/* Text */}
          <Grid item xs={12} className={classes.headingContainer}>
            <Typography variant='h4' className={classes.heading}>
              Welcome, Create your account
            </Typography>
            <Typography className={classes.subHeading}>
              Enter your email and create a password
            </Typography>
          </Grid>

          {/* Name */}
          <Grid item xs={12} className={classes.textField}>
            <FormControl fullWidth variant='outlined'>
              <InputLabel error={errors.name !== ''}>Name</InputLabel>
              <OutlinedInput
                value={formData.name}
                name='name'
                onChange={handleChange}
                labelWidth={45}
                error={errors.name !== ''}
              />
            </FormControl>
            <FormHelperText className={classes.helperText}>
              {errors.name}
            </FormHelperText>
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

          {/* Confirm Password */}
          <Grid item xs={12} className={classes.textField}>
            <FormControl fullWidth variant='outlined'>
              <InputLabel
                error={
                  formData.confirmPassword !== '' &&
                  formData.password !== formData.confirmPassword
                }
              >
                Confirm Password
              </InputLabel>
              <OutlinedInput
                error={
                  formData.confirmPassword !== '' &&
                  formData.password !== formData.confirmPassword
                }
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                name='confirmPassword'
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge='end'
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={135}
              />
              <FormHelperText className={classes.helperText}>
                {formData.confirmPassword !== '' &&
                  formData.password !== formData.confirmPassword &&
                  "Passwords don't match"}
              </FormHelperText>
            </FormControl>
          </Grid>

          {/* Signup Button */}
          <Grid item xs={12} className={classes.signupButtonContainer}>
            <Button
              className={classes.signupButton}
              label='Sign Up'
              onClick={handleSubmit}
            />
          </Grid>

          {/* Already have an account */}
          <Grid container>
<<<<<<< HEAD
            <Grid item xs={false} md={2}></Grid>
            <Grid
              item
              xs={12}
              md={8}
=======
            <Grid item xs={false} md={3}></Grid>
            <Grid
              item
              xs={12}
              md={6}
>>>>>>> 57670d9a8d0aedab8e5f7bbc2a349df8c4357d5e
              className={classes.signupButtonContainer}
              component={Link}
              to='/login'
            >
              <Grid container justify='center' className={classes.signInText}>
                Already have an account? Sign in
              </Grid>
            </Grid>
<<<<<<< HEAD
            <Grid item xs={false} md={2}></Grid>
=======
            <Grid item xs={false} md={3}></Grid>
>>>>>>> 57670d9a8d0aedab8e5f7bbc2a349df8c4357d5e
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
