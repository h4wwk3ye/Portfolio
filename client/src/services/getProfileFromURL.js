import axios from 'axios';

const getProfile = async id => {
  console.log(id);
  const baseUrl = `/api/profile/user/${id}`;
  const response = await axios.get(baseUrl);
  return response.data;
};

export default getProfile;
