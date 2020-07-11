import axios from 'axios';
const baseUrl = '/api/profile/user/5f094c1b29af5103a73a0c35';

export const getProfile = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
