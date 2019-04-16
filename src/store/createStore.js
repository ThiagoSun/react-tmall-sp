import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
// import { BrowserRouter } from 'react-router-dom';
import makeRootReducer, {history} from './reducers'
// import { updateLocation } from './location'
import { apiMiddleWare } from 'lib/utils';


const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, routerMiddleware(history), apiMiddleWare];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  let composeEnhancers = compose;

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
  store.asyncReducers = {};

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  // store.unsubscribeHistory = BrowserRouter.listen(updateLocation(store))

  return store
};

export default createStore
