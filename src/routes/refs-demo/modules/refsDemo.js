import { handleAPI } from 'lib/utils';
import {fetch} from 'whatwg-fetch';

// ------------------------------------
// Constants
// ------------------------------------

export const CHANGE_STORE = 'CHANGE_STORE(RefsDemo)';

// ------------------------------------
// Actions
// ------------------------------------

export const changeStore = (newStore, callback) => {
  return (dispatch, getState) => {
    dispatch({
      type: CHANGE_STORE,
      newStore
    });
    if (Object.prototype.toString.call(callback) === '[object Function]') {
      callback();
    }
  }
};

export const actions = {
  changeStore
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE_STORE]: (state, action) => {
    return Object.assign({}, state, action.newStore)
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  inputValue1: '',
  inputValue2: ''
};
export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
