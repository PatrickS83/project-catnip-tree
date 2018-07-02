import {
  GET_POSTS,
  CREATE_POST,
  VIEW_POST,
  POST_LOADING,
  LIKE_POST,
  DISLIKE_POST
} from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case CREATE_POST:
      return {
        ...state
        // posts: [action.payload, ...state.posts]
      };
    case VIEW_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case LIKE_POST: {
      const posts = [...state.posts];
      const index = posts.findIndex(post => post._id === action.payload[0]._id);
      posts[index] = action.payload[0];
      return {
        ...state,
        posts,
        loading: true
      };
    }
    case DISLIKE_POST: {
      const posts = [...state.posts];
      const index = posts.findIndex(post => post._id === action.payload[0]._id);
      posts[index] = action.payload[0];
      return {
        ...state,
        posts,
        loading: true
      };
    }
    default:
      return state;
  }
}
