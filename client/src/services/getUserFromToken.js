import axios from 'axios';

const getUserFromTken = async () => {
  try {
    const response = await axios.get('/api/auth');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default getUserFromTken;
