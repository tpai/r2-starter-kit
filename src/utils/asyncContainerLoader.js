import loadable from 'react-loadable';

const asyncContainerLoader = (componentName) => {
  return loadable({
    loader: () => import(`~/containers/${componentName}`),
    loading: () => null,
    delay: 100,
  });
};

export default asyncContainerLoader;
