import * as c from './constants';

export const loadProjects = () => ({
    type: c.LOAD_PROJECTS_REQUEST,
});

export const loadProjectsSuccess = projects => ({
  type: c.LOAD_PROJECTS_SUCCESS,
  projects,
});