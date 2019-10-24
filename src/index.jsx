import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './components/PostList';
import ErrorBoundary from './components/ErrorBoundary';
import WednesdayChecker from './components/WednesdayChecker';
import TimerGame from './components/TimerGame';


function App() {
  return (
    <div>
      <ErrorBoundary>
        <PostList />
        <WednesdayChecker />
        <TimerGame />
      </ErrorBoundary>
    </div>
  );
}

const DocumentNode = document.getElementById('app');
ReactDOM.render(<App />, DocumentNode);
