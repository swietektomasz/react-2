import React from 'react';
import PropTypes from 'prop-types';

function DifferentPostList({ children, render, post }) {
  return (
    <div>
      <h2>A different list of posts</h2>
      {children}
      {render(post)}
    </div>
  );
}

DifferentPostList.defaultProps = {
  children: [],
  render: () => {},
  post: {
    title: '', id: 0, author: '', content: '',
  },
};

DifferentPostList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  render: PropTypes.func,
  post: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default DifferentPostList;
