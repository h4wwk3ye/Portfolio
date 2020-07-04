import { combineReducers } from 'redux';
import profileReducer from './profileReducer';

const reducer = combineReducers({
  profile: profileReducer,
});

export default reducer;
