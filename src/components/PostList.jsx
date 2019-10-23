import React, { useState, useEffect } from 'react';
import { windowFetch } from '../api';
import GenericPost from './GenericPost';
import ColorfulPost from './ColorfulPost';
import BorderedPost from './BorderedPost';
import DifferentPostList from './DifferentPostList';

function PostList() {
  const [data, setData] = useState({ posts: [] });

  useEffect(() => {
    windowFetch().then((newPosts) => {
      setData({ posts: newPosts });
    });
  }, []);

  return (
    <div>
      <h2>A generic list of posts</h2>
      {data.posts.map((post) => <GenericPost key={post.id} post={post} />)}
      <h2>A post colored blue</h2>
      <ColorfulPost post={data.posts[0]} />
      <h2>A post with a border</h2>
      <BorderedPost post={data.posts[0]} />
      <hr />
      <DifferentPostList>
        <ColorfulPost post={data.posts[1]} />
        <BorderedPost post={data.posts[2]} />
        <GenericPost post={data.posts[3]} />
      </DifferentPostList>
    </div>
  );
}

export default PostList;
