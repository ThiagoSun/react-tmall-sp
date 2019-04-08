import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'counter',
  async getComponent (nextState, cb) {
    // 使用ES6 import()方法替代require.ensure()
    const [Counter, reducer] = await Promise.all([
      import('./containers/CounterContainer.js'),
      import('./modules/counter.js')
    ]);
    injectReducer(store, { key: 'counter', reducer });
    return cb(null, Counter);
  }
})
