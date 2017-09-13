import { combineReducers } from 'redux'
import GHReducer from './GHReducer';

export default combineReducers({
  gh: GHReducer
});
