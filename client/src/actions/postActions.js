import axios from 'axios';
import { GET_POSTS, CREATE_POST, VIEW_POST, POST_LOADING, CREATE_COMMENT } from './types';

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

export const createComment = (id, formData) => async dispatch => {
  try {
    const res = await axios.post(`/api/posts/${id}/createComment`, formData);
    dispatch({ type: CREATE_COMMENT, payload: res.data });
  } catch (err) {
    dispatch({ type: CREATE_COMMENT, payload: null });
  }
};

export const viewPost = id => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/${id}`);
    dispatch({ type: VIEW_POST, payload: res.data });
  } catch (err) {
    dispatch({ type: VIEW_POST, payload: null });
  }
};

export const setPostLoading = () => ({
  type: POST_LOADING
});
