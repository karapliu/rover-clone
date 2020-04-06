import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_MEMBER } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_MEMBER:
      return [];
    default: 
      return state;
  }
};

export default sessionErrorsReducer;