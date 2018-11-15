import { take, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import axios from 'axios';

import * as c from '../reducers/projects/constants';
import { loadProjectsSuccess } from '../reducers/projects/actions';

const GET_PROJECTS_URL = 'http://localhost:5000/api/projects';

function* loadProjects() {
    while (true) {
      yield take(c.LOAD_PROJECTS_REQUEST);
      const response = yield axios.get(GET_PROJECTS_URL);
      yield delay(2000);
      yield put(loadProjectsSuccess(response.data.projects));
    }
}

export default loadProjects;
