import { take, put } from 'redux-saga/effects';

import axios from 'axios';

import * as c from '../types/projects';
import { loadProjectsSuccess } from '../actions/projects';

function* loadProjects() {
    while (true) {
      yield take(c.LOAD_PROJECTS_REQUEST);
      const response = yield axios.get(c.GET_PROJECTS_URL);
      yield put(loadProjectsSuccess(response.data.projects));
    }
}

export default loadProjects;
