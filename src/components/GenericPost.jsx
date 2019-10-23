import React from 'react';
import PropTypes from 'prop-types';

export default function GenericPost({ post, color, border }) {
  return (
    <div style={{ border }}>
      <h3 style={{ color }}>{post.title}</h3>
      <p style={{ color }}>{post.content}</p>
      <i style={{ color }}>{post.author}</i>
    </div>
  );
}

GenericPost.defaultProps = {
  post: {
    title: '', id: 0, author: '', content: '',
  },
  color: '',
  border: '',
};

GenericPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    author: PropTypes.string,
    content: PropTypes.string,
  }),
  color: PropTypes.string,
  border: PropTypes.string,
};
