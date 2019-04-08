import React from 'react'
import PropTypes from 'prop-types'
import Styles from './Counter.less';

export const Counter = ({ counter, increment, doubleAsync }) => (
  <div className={Styles.counterContainer}>
    <h2>Counter: {counter}</h2>
    <button className='btn btn-primary' onClick={increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-secondary' onClick={doubleAsync}>
      Double (Async)
    </button>
  </div>
)
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter
