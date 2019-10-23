import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './components/PostList';


function App() {
  return (
    <div>
      <PostList />
    </div>
  );
}

const DocumentNode = document.getElementById('app');
ReactDOM.render(<App />, DocumentNode);
