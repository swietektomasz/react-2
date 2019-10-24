/* eslint-disable no-console */
import Axios from 'axios';

const api = 'http://localhost:3000';

export const windowFetch = async () => {
  const response = await window.fetch(`${api}/posts`);
  const responseJson = await response.json();
  return responseJson;
};

export async function fetchPosts() {
  const res = await Axios.get(`${api}/posts`);
  return res.data;
}

export async function fetchPost(id) {
  const res = await Axios.get(`${api}/posts/${id}`);
  return res.data;
}

export function chainedFetch() {
  return Axios.get(`${api}/posts`).then((result) => Axios.get(`${api}/posts/${result.data[0].id}`));
}

chainedFetch();

export function parallelFetch() {
  return Axios.all([
    Axios.get(`${api}/posts`),
    Axios.get(`${api}/posts/1`),
  ]).then(Axios.spread((posts, post) => {
    console.log(posts, post);
  }));
}

parallelFetch();

const cancelledRequest = () => {
  const { CancelToken } = Axios;
  const source = CancelToken.source();

  Axios.get(`${api}/posts/1`, {
    cancelToken: source.token,
  }).catch((thrown) => {
    if (Axios.isCancel(thrown)) {
      console.log('Request canceled', thrown.message);
    } else {
      console.log('error has happened');
    }
  });

  source.cancel('request cancelled');
};

cancelledRequest();
