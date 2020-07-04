import axios from 'axios';
const baseUrl = '/api/profile/user/5eff5cffcf6d9b1f63da38a1';

export const getProfile = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
