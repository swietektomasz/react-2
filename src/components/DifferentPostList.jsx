import React from 'react';
import PropTypes from 'prop-types';

function DifferentPostList({ children }) {
  return (
    <div>
      <h2>A different list of posts</h2>
      {children}
    </div>
  );
}

DifferentPostList.defaultProps = {
  children: [],
};

DifferentPostList.propTypes = {
  children: PropTypes.arrayOf({}),
};

export default DifferentPostList;
