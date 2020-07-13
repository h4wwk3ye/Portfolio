import axios from 'axios';

const loginUser = async user => {
  try {
    const response = await axios.post('/api/auth', user);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default loginUser;
