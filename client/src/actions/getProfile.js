import { GET_PROFILE } from './types';
import { getProfile } from '../services/profileService';

export default function () {
  return async dispatch => {
    const profile = await getProfile();
    dispatch({
      type: GET_PROFILE,
      payload: profile,
    });
  };
}
