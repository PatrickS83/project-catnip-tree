import axios from 'axios';
import { FETCH_USER, LIKE_POST, DISLIKE_POST } from './types';

export const fetchUser = () => async dispatch => {
  try {
    const res = await axios.get('/auth/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_USER, payload: null });
  }
};

export const likePost = postId => async dispatch => {
  try {
    const res = await axios.post(`/api/posts/like/${postId}`);
    dispatch({ type: LIKE_POST, payload: res.data });
  } catch (err) {
    dispatch({ type: LIKE_POST, payload: null });
  }
};

export const dislikePost = postId => async dispatch => {
  try {
    const res = await axios.post(`/api/posts/dislike/${postId}`);
    dispatch({ type: DISLIKE_POST, payload: res.data });
  } catch (err) {
    dispatch({ type: DISLIKE_POST, payload: null });
  }
};
