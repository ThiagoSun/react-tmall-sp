import React from 'react';
import './HomeView.less';
import TopNavBar from '../containers/TopNavBarContainer';
import logoImg from 'media/logo.svg';

export default class HomeView extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      topNavBarOpen: false
    }
  }

  handleTopNavBarToggle = () => {
    this.setState((prevState, props) => {
      return {
        topNavBarOpen: !prevState.topNavBarOpen
      }
    })
  };

  render() {
    return [
      <TopNavBar key={'TopNavBar'} onToggleCallback={this.handleTopNavBarToggle} />,
      <div style={{height: '10000px', display: this.state.topNavBarOpen ? 'none' : 'block'}} key='test'>index1</div>,
      <img src={logoImg} alt='' key='img' />
    ];
  }
};
