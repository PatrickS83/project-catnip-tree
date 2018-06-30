import { FETCH_USER, LIKE_POST, DISLIKE_POST } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case LIKE_POST:
      return {
        ...state,
        liked: action.payload[1].liked,
        disliked: action.payload[1].disliked
      };
    case DISLIKE_POST:
      return {
        ...state,
        liked: action.payload[1].liked,
        disliked: action.payload[1].disliked
      };
    default:
      return state;
  }
}
