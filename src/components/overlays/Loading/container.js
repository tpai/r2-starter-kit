import React from 'react';
import { useSelector } from 'react-redux';

import Component from './index';

export default function ReposContainer() {
  const isLoading = useSelector((state) => state.ui.state.isLoading);
  const props = {
    isLoading,
  };

  return <Component {...props} />;
}
