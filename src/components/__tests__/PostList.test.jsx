import React from 'react';
import { render } from '@testing-library/react';
import 'whatwg-fetch';

import PostList from '../PostList';

const mockedPostsResponse = [
  { id: 1, title: 'test post 1', author: 'test' },
  { id: 2, title: 'test post 2', author: 'test' },
];

test('renders the PostList component correctly', () => {
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => Promise.resolve({
    json: () => Promise.resolve(mockedPostsResponse),
  }));

  const { container } = render(<PostList />);
  expect(container.firstChild).toMatchSnapshot();
});
