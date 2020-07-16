import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

const getCurrentUserProfile = async () => {
  try {
    setAuthToken(localStorage.getItem('token'));
    const response = await axios.get('/api/profile/me');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default getCurrentUserProfile;
