import { combineReducers } from 'redux';

import * as c from './constants';

const initialState = {
    isLoading: false,
    data: [],
};

function isLoading(state = initialState.isLoading, action) {
  switch(action.type) {
    case c.LOAD_PROJECTS_REQUEST:
      return true;
    case c.LOAD_PROJECTS_SUCCESS:
    case c.LOAD_PROJECTS_FAIL:
      return false;
    default: return state;
  }
}

function data(state = initialState.data, action) {
  switch(action.type) {
    case c.LOAD_PROJECTS_SUCCESS:
      return [...action.projects];
    case c.LOAD_PROJECTS_REQUEST:
    case c.LOAD_PROJECTS_FAIL:
      return [];
    default: return state;
  }
}

export default combineReducers({
   isLoading,
   data,
});

