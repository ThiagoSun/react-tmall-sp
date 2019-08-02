import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  static propTypes = {

  };

  inputOnChange = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  render() {
    return (
      <input value={this.state.value} type={'text'} onChange={this.inputOnChange} placeholder={'请输入'} ref={this.props.forwardRef} />
    );
  }
};
