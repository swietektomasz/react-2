import React from 'react';
import PropTypes from 'prop-types';
import GenericPost from './GenericPost';

export default function BorderedPost({ post }) {
  return <GenericPost border="solid 2px black" post={post} />;
}

BorderedPost.defaultProps = {
  post: {
    title: '', id: 0, author: '', content: '',
  },
};

BorderedPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};
