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
      const [post] = action.payload;
      const index = posts.findIndex(postItem => postItem._id === post._id);
      posts[index] = post;
      return {
        ...state,
        posts,
        post
      };
    }
    case DISLIKE_POST: {
      const posts = [...state.posts];
      const [post] = action.payload;
      const index = posts.findIndex(postItem => postItem._id === post._id);
      posts[index] = post;
      return {
        ...state,
        posts,
        post
      };
    }
    default:
      return state;
  }
}
