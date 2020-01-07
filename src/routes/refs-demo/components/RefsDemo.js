import React from 'react';
import PropTypes from 'prop-types';
import {List, InputItem, Picker, Toast, DatePicker, ImagePicker, Button} from 'antd-mobile';
import Styles from './RefsDemo.less';
import CustomInput from './Input';
import InputHOC from './InputHOC';

const CustomInputHOC = InputHOC(CustomInput);

export default class RefsDemo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
    this.myRef3 = React.createRef();
    this.myRef4 = React.createRef();
  }

  static propTypes = {
    changeStore: PropTypes.func,
    inputValue1: PropTypes.string,
    inputValue2: PropTypes.string,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  componentWillUnmount() {
  }

  changeValue = (key, value) => {
    const newStore = {
      [key]: value
    };
    this.props.changeStore(newStore);
  };

  inputOnChange = (key) => (value) => {
    console.log(this.myRef1.current, this.myRef2.current, this.myRef3.current);
    this.changeValue(key, value);
  };

  btnOnClick = () => {
    // console.log(ReactDOM.findDOMNode(this.myRef1.current).offsetHeight);
    console.log(this.myRef1.current.offsetHeight);
    console.log(this.myRef2.current.offsetHeight);
    console.log(this.myRef3.current.offsetHeight);
  };

  btn2OnClick = () => {
    this.myRef3.current.focus();
  };

  btn3OnClick = () => {
    this.myRef4.current.focus();
  };

  render() {
    return (
      <section className={Styles.commonForm}>
        <div className={Styles.content}>
          <div className={Styles.inputContainer}>
            <List>
              <InputItem
                type={'text'}
                value={this.props.inputValue1}
                placeholder={'input 1'}
                onChange={this.inputOnChange('inputValue1')}
                ref={this.myRef1}
              >antd input</InputItem>
              <input
                type={'text'}
                value={this.props.inputValue2}
                placeholder={'input 2'}
                onChange={(e) => { this.inputOnChange('inputValue2')(e.target.value) }}
                ref={this.myRef2}
              />
              <CustomInput forwardRef={this.myRef3} placeholder={'input 3'} />
              <CustomInputHOC ref={this.myRef4} placeholder={'input 4'} />

              <Button onClick={this.btnOnClick}>Show height</Button>
              <Button onClick={this.btn2OnClick}>Input3 focus</Button>
              <Button onClick={this.btn3OnClick}>Input4 focus</Button>

            </List>
          </div>
        </div>
      </section>
    );
  }
};
