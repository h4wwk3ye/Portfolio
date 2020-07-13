import axios from 'axios';

const registerUser = async newUser => {
  try {
    const response = await axios.post('/api/users', newUser);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default registerUser;
