import axios from 'axios';
import { GET_POSTS, CREATE_POST } from './types';

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_POSTS, payload: null });
  }
};

export const createPost = formData => async dispatch => {
  try {
    const res = await axios.post('/api/posts', formData);
    dispatch({ type: CREATE_POST, payload: res.data });
  } catch (err) {
    dispatch({ type: CREATE_POST, payload: null });
  }
};
