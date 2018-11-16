import * as c from '../types/projects';

export const loadProjects = () => ({
    type: c.LOAD_PROJECTS_REQUEST,
});

export const loadProjectsSuccess = projects => ({
  type: c.LOAD_PROJECTS_SUCCESS,
  projects,
});