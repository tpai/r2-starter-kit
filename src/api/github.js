import { get } from '~/utils/fetch';

export const getUserInfo = (name) =>
  get(`/api/users/${name}`);

export const getRepos = (name, { page = 1, limit = 10 }) =>
  get(`/api/users/${name}/repos?_page=${page}&_limit=${limit}`);
