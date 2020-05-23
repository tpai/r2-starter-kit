import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { didMount, loadMore } from '~/sagas/pages/repos';
import { getData as getReposData } from '~/selectors/response/repos';
import { getData as getUserData } from '~/selectors/response/user';
import Component from './index';

export default function Container() {
  const user = useSelector(getUserData);
  const repos = useSelector(getReposData);
  const dispatch = useDispatch();
  const handleDidMount = useCallback(() => dispatch(didMount()), [dispatch]);
  const handleLoadMore = useCallback(() => dispatch(loadMore()), [dispatch]);
  const props = {
    user,
    repos,
    handleDidMount,
    handleLoadMore,
  };

  return <Component {...props} />;
}
