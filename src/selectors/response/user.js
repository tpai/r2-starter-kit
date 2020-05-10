export const getRoot = state => state.response.user || {};

export const getData = state => {
  const root = getRoot(state);
  return root.data || {};
};

export const getLogin = state => {
  const data = getData(state);
  return data.login || '';
};
