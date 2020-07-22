import React from 'react';

export default function InputFn(props) {
  console.log('Function component render.')
  return (
    <input
      value={props.value}
      type={'text'}
    />
  );
};
