import { injectReducer } from '../../store/reducers';
import CounterContainer from './containers/CounterContainer';
import counterReducer from './modules/counter';

export default (store) => {
  injectReducer(store, { key: 'counter', reducer: counterReducer });
  return CounterContainer;
};

// const CounterContainer = await import(/* webpackChunkName: 'counter' */'./containers/CounterContainer');
// const counterReducer = await import(/* webpackChunkName: 'counter' */'./modules/counter');
// injectReducer(store, { key: 'counter', counterReducer });
// return CounterContainer;
