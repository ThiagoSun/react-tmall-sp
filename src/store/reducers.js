import { combineReducers } from 'redux'
// import locationReducer from './location'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import * as componentsReducer from './componentsReducer'

export const history = createBrowserHistory();

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    router: connectRouter(history),
    // location: locationReducer,
    ...componentsReducer,
    ...asyncReducers
  })
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer
