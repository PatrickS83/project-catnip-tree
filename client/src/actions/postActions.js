import axios from 'axios';
import { GET_POSTS } from './types';

export const getPosts = () => async dispatch => {
  try {
    const res = axios.get('/api/posts');
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_POSTS, payload: null });
  }
};
