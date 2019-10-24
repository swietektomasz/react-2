import React from 'react';
import PropTypes from 'prop-types';

export default function RenderedPost({ post }) {
  return (
    <div>
      <h3>A post rendered by render props</h3>
      <p>{post.content}</p>
      <i>{post.author}</i>
    </div>
  );
}

RenderedPost.defaultProps = {
  post: {
    title: '', id: 0, author: '', content: '',
  },
};

RenderedPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};
