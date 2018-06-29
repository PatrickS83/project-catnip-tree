import { GET_POSTS, CREATE_POST } from '../actions/types';

const initialState = {
  posts: []
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
    default:
      return state;
  }
}
