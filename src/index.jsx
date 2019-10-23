import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './components/PostList';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <div>
      <ErrorBoundary>
        <PostList />
      </ErrorBoundary>
    </div>
  );
}

const DocumentNode = document.getElementById('app');
ReactDOM.render(<App />, DocumentNode);
