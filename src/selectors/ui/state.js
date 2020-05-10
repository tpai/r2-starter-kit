export const getRoot = state => state.ui.state || {};

export const getIsLoading = state => {
  const root = getRoot(state);
  return root.isLoading || false;
};
