import * as c from '../types/projects';

const initialState = [];

function data(state = initialState, action) {
  switch(action.type) {
    case c.LOAD_PROJECTS_SUCCESS:
      return [...action.projects];
    case c.LOAD_PROJECTS_REQUEST:
    case c.LOAD_PROJECTS_FAIL:
      return [];
    default: return state;
  }
}

export default data;
