import React from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import EditProfileTheme from './EditProfileTheme';

import SocialMedia from './SocialMediaDetails';
import Personal from './PersonalDetails';
import Skills from './ProfessionalDetailComponents/SkillDetails';
import Education from './ProfessionalDetailComponents/EducationDetails';
import Projects from './ProfessionalDetailComponents/ProjectDetails';
import Experiences from './ProfessionalDetailComponents/ExperienceDetails';
import Resume from './ResumeDetails';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

import LoadingAnimation from '../Loading/LoadingAnimation';
import ToastNotification from '../shared/ToastNotification';

// Authentication
import { useRecoilState } from 'recoil';
import { profileState } from '../../atoms';
import getCurrentUserProfile from '../../services/getCurrentUserProfile';
import setAuthToken from '../../utils/setAuthToken';
import getUserFromTken from '../../services/getUserFromToken';
import axios from 'axios';

export default function EditProfile() {
  const classes = EditProfileTheme();
  const [profile, setProfile] = useRecoilState(profileState);
  const [user, setUser] = React.useState(null);
  const [newProfile, setNewProfile] = React.useState(false);
  const history = useHistory();

  const emptyState = {
    smallDescription: '',
    about: '',
    resume: '',
    image: '',
    loc: {
      city: '',
      country: '',
    },
    connect: {
      facebook: '',
      instagram: '',
      linkedin: '',
      github: '',
      twitter: '',
      steam: '',
    },
    skills: [],
    education: [],
    projects: [],
    experiences: [],
  };

  React.useEffect(() => {
    (async () => {
      setAuthToken(localStorage.getItem('token'));
      const profileData = await getCurrentUserProfile();
      const userData = await getUserFromTken();
      setUser(userData);

      if (!profileData) {
        setNewProfile(true);
        setProfile(emptyState);
      } else {
        setProfile(profileData);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  **** for the toast notification
  const [message, setMessage] = React.useState('');
  const [severity, setSeverity] = React.useState('');

  const [state, setState] = React.useState({
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

  const handleSubmit = () => {
    (async () => {
      let formData = new FormData();

      const arr = Object.entries(profile);
      for (const [key, value] of arr) {
        if (key === 'image' && value instanceof File) {
          // only if the file was uploaded
          formData.append('image', value, 'resume.pdf');
        } else {
          formData.append(key, JSON.stringify(value));
        }
      }

      // the below code is just for logging formData to test. As formData can't be logged
      // https://github.com/meteor/meteor/issues/8125#issuecomment-402706641

      // for (const key of formData.entries()) {
      //   console.log(key[0] + ', ' + key[1]);
      // }

      try {
        setMessage('Please wait, updating your profile');
        setSeverity('info');
        showToast(); // just a large enough time to upload

        const response = await axios.post('/api/profile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setProfile(response.data);
        setMessage('Profile updated successfully');
        setSeverity('success');
      } catch (error) {
        setMessage('Failed to update profile');
        setSeverity('error');
      }

      showToast();
      setTimeout(() => {
        history.go();
      }, 1500);
    })();
  };

  return (
    <React.Fragment>
      {Object.keys(profile).length ? (
        <React.Fragment>
          <ToastNotification
            state={state}
            closeToast={closeToast}
            message={message}
            severity={severity}
          />

          <NavBar editPage />

          <Grid
            container
            spacing={5}
            justify='space-around'
            className={classes.container}
          >
            <Paper className={classes.paper} elavation={10}>
              <Grid item xs={12}>
                {user && (
                  <Typography
                    variant='h4'
                    className={classes.topText}
                  >{`Hello ${user.name}, edit your profile.`}</Typography>
                )}
              </Grid>
              {!newProfile && (
                <Grid container>
                  <Grid item xs={false} sm={4}></Grid>
                  <Grid item xs={12} sm={4}>
                    <Button
                      fullWidth
                      variant='contained'
                      className={classes.addButton}
                      component={Link}
                      to='/profile/me'
                    >
                      Visit your profile
                    </Button>
                  </Grid>
                  <Grid item xs={false} sm={4}></Grid>
                </Grid>
              )}

              <Personal />

              <SocialMedia />

              <Skills />

              <Education />

              <Projects />

              <Experiences />

              <Resume />

              <Grid
                item
                xs={12}
                sm={4}
                className={classes.submitButtonContainer}
              >
                <Button
                  fullWidth
                  variant='contained'
                  className={classes.submitButton}
                  onClick={handleSubmit}
                >
                  {newProfile ? 'Create' : 'Update'} Profile
                </Button>
              </Grid>
            </Paper>
          </Grid>
          <Footer />
        </React.Fragment>
      ) : (
        <LoadingAnimation />
      )}
    </React.Fragment>
  );
}
