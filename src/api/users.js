import { get } from 'utils/fetch';

export const getUser = (id) =>
  get(`https://jsonplaceholder.typicode.com/users/${id}`);
