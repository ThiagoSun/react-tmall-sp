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
    placeholder: PropTypes.string
  };

  inputOnChange = (e) => {
    this.setState({
      value: e.target.value
    });
    console.log(this.props.forwardRef.current)
  };

  render() {
    return (
      <input
        value={this.state.value}
        type={'text'}
        onChange={this.inputOnChange}
        placeholder={this.props.placeholder}
        ref={this.props.forwardRef}
      />
    );
  }
};
