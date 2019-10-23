import Axios from 'axios';

export async function fetchPosts() {
  const res = await Axios.get('/posts');
  return res.data;
}

export async function fetchPost(id) {
  const res = await Axios.get(`/posts/${id}`);
  return res.data;
}
