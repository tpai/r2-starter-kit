import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from './index';

beforeEach(() => {
  global.document.body.innerHTML = '<div id="overlay"></div>';
});
afterEach(cleanup);

test('should be null if isLoading is false', async () => {
  const { queryByTestId, rerender } = await render(<Component />);
  await rerender(<Component />);
  expect(queryByTestId('loader')).toBeNull();
});

test('should render component if isLoading is true', async () => {
  const { queryByTestId, rerender } = await render(<Component />);
  await rerender(<Component isLoading={true} />);
  expect(queryByTestId('loader')).toBeDefined();
});
