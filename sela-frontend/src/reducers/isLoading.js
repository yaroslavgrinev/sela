import * as c from '../types/projects';

const initialState = false;

function isLoading(state = initialState, action) {
  switch(action.type) {
    case c.LOAD_PROJECTS_REQUEST:
      return true;
    case c.LOAD_PROJECTS_SUCCESS:
    case c.LOAD_PROJECTS_FAIL:
      return false;
    default: return state;
  }
}

export default isLoading;
