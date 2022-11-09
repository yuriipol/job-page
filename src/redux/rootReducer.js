import { combineReducers } from 'redux';
import jobReducer from './job/job-slice';

const rootReducer = combineReducers({
  data: jobReducer,
});

export default rootReducer;
