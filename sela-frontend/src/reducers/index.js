import { combineReducers } from 'redux';

import data from './data';
import isLoading from './isLoading';

export default combineReducers({
   isLoading,
   data,
});
