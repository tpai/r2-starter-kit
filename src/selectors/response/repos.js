import { REPOS_PAGE_LIMIT } from '~/constants/pagination';

export const getRoot = state => state.response.repos || {};

export const getData = state => {
  const root = getRoot(state);
  return root.data || [];
};

export const getTotal = state => {
  const root = getRoot(state);
  return root.total || 0;
};

export const getCurrent = state => {
  const root = getRoot(state);
  return root.current || 0;
};

export const getNextPage = state => {
  const total = getTotal(state);
  const current = getCurrent(state);
  if (current >= Math.ceil(total / REPOS_PAGE_LIMIT))return;

  return current + 1;
};
