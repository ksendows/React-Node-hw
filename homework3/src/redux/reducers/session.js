import { combineReducers } from 'redux';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
} from '../actions/types';

function user(state = { name: null, login: null }, { type, payload }) {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return payload;

    case SIGN_OUT:
      return { name: null, login: null };

    default:
      return state;
  }
}

function authenticated(state = false, { type }) {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return true;

    case SIGN_OUT:
      return false;

    default:
      return state;
  }
}

function authenticating(state = false, { type }) {
  switch (type) {
    case SIGN_IN_REQUEST:
      return true;

    case SIGN_IN_SUCCESS:
    case SIGN_IN_FAILURE:
      return false;

    default:
      return state;
  }
}

function error(state = null, { type, payload }) {
  switch (type) {
    case SIGN_IN_REQUEST:
    case SIGN_IN_SUCCESS:
    case SIGN_OUT:
      return null;

    case SIGN_IN_FAILURE:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  user,
  authenticated,
  authenticating,
  error
});

