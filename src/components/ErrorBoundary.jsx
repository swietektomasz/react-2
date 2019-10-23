import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: {} };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{error.text}</p>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.defaultProps = {
  children: [],
};

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
