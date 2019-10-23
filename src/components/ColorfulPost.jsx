import React from 'react';
import PropTypes from 'prop-types';
import GenericPost from './GenericPost';

export default function ColorfulPost({ post }) {
  return <GenericPost color="blue" post={post} />;
}

ColorfulPost.defaultProps = {
  post: {
    title: '', id: 0, author: '', content: '',
  },
};

ColorfulPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};
