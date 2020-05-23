import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from './index';

test('should render user avatar and id', () => {
  const { getByTestId } = render(
    <Component
      user={{
        avatar_url: 'http://placehold.it/200x200',
        name: 'johndoe'
      }}
    />
  );
  expect(getByTestId('avatar')).toHaveAttribute('src', 'http://placehold.it/200x200');
  expect(getByTestId('name')).toHaveTextContent('johndoe');
});

test('should render repos', () => {
  global.open = jest.fn();

  const repo = {
    "id": 55893252,
    "name": "123T",
    "html_url": "https://github.com/tpai/123T",
    "description": "fork from vansteki/142T",
    "stargazers_url": "https://api.github.com/repos/tpai/123T/stargazers",
  };

  const { getByTestId } = render(<Component repos={[repo]} />);
  expect(getByTestId('repos').querySelector(':first-child>.header')).toHaveTextContent(repo.name);
  expect(global.open).not.toHaveBeenCalled();
  fireEvent.click(getByTestId(`repo${repo.id}`));
  expect(global.open).toHaveBeenCalledWith(repo.html_url);
});

test('should call handleDidMount when mount', () => {
  const fn = jest.fn();
  expect(fn).not.toHaveBeenCalled();
  render(<Component handleDidMount={fn} />);
  expect(fn).toHaveBeenCalled();
});
