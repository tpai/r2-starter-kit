import { get } from 'utils/fetch';

export const getPosts = () =>
  get('https://jsonplaceholder.typicode.com/posts');

export const getPost = (id) =>
  get(`https://jsonplaceholder.typicode.com/posts/${id}`);
