import { handleAPI } from 'lib/utils';

// ------------------------------------
// Constants
// ------------------------------------

export const RELOAD_SUCCESS = 'RELOAD_SUCCESS(StudioRefresh)';

// ------------------------------------
// Actions
// ------------------------------------

export const reloadSuccess = () => {
  return (dispatch, getState) => {
    dispatch({
      type: RELOAD_SUCCESS
    });
  }
};

export const actions = {
  reloadSuccess,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RELOAD_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      successTimes: state.successTimes + 1
    })
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  successTimes: 0
};
export default function studioRefreshReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
