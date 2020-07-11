import { GET_PROFILE } from '../actions/types';
const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default profileReducer;
