import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import _ from 'lodash';
jest.unmock('lodash');
_.debounce = jest.fn((fn) => fn);

import Component from './index';

const user = {
  avatar_url: 'http://placehold.it/200x200',
  name: 'johndoe',
};

const repo = {
  id: 55893252,
  name: '123T',
  html_url: 'https://github.com/tpai/123T',
  description: 'fork from vansteki/142T',
  stargazers_count: 1,
  stargazers_url: 'https://api.github.com/repos/tpai/123T/stargazers',
};

afterEach(cleanup);

test('should render initial component', async () => {
  const { rerender, getByTestId } = await render(<Component repos={[repo]} />);
  expect(getByTestId(`repo${repo.id}`).querySelector(':first-child')).toHaveTextContent(repo.name);
  expect(getByTestId(`repo${repo.id}`).querySelector(':nth-child(2)')).toHaveTextContent(repo.stargazers_count);
  expect(getByTestId(`repo${repo.id}`).querySelector(':nth-child(3)')).toHaveTextContent(repo.description);
  global.dispatchEvent(new CustomEvent('scroll'));
  await rerender(<Component repos={[repo]} />);
});

test('should render repo without star', () => {
  const { getByTestId } = render(<Component repos={[{...repo, stargazers_count: 0}]} />);
  expect(getByTestId(`repo${repo.id}`).querySelector(':first-child')).toHaveTextContent(repo.name);
  expect(getByTestId(`repo${repo.id}`).querySelector(':nth-child(2)')).toHaveTextContent(repo.description);
});

test('should render user avatar and id', () => {
  const { getByTestId } = render(<Component user={user} />);
  expect(getByTestId('avatar')).toHaveAttribute(
    'src',
    'http://placehold.it/200x200',
  );
  expect(getByTestId('name')).toHaveTextContent('johndoe');
});

test('should call window.open when click', () => {
  global.open = jest.fn();

  const { getByTestId } = render(<Component repos={[repo]} />);
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

test('should call handleLoadMore when window scroll go toward bottom', async () => {
  const fn = jest.fn();
  expect(fn).not.toHaveBeenCalled();
  const { rerender } = await render(
    <Component repos={[repo]} handleLoadMore={fn} />,
  );
  global.innerHeight = 0;
  global.dispatchEvent(new CustomEvent('scroll'));
  global.innerHeight = 768;
  global.dispatchEvent(new CustomEvent('scroll'));
  await rerender(<Component repos={[repo]} handleLoadMore={fn} />);
  expect(fn).toHaveBeenCalled();
});
