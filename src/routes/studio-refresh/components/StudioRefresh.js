import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class StudioRefresh extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    this.url = 'https://lsjr.ccb.com/msmp/ecpweb/page/internet/dist/firstPage.html?wParam=CoPrXrWgGAJBbx99cYJnoe%2Bd%2BiA2TmDOfSfPR6EHGkflRvbH2%2B%2FF5TIhoomXrnDnZ3FIW0cPGx2335lRCXrDw6SrXvQ4SUo%2BpjzuT%2BTvw6WOCYrdW0feZ68fkrCwU2u559Dvu9tLHfTpSZtWM3ZT0PmeqdQ16IEpAF8YYI%2BOMQKPid4Ss7P9q9vEssTu9C5FtvViIY9V7Z8sz%2FAuQFHSDv28OLbLiYx1J7nOU3dCc36WjXtJTTpwAoW9lYRvM9vdN9NqirkzuisORBi7JrTtKHOLALR4ytfE7JvTTCB1Q47%2Blqf2l2shiLqZ33O3Z21ssoeCttosHXrDLCVQkeGdvcczfWo%2Bar8q1Y%2FxAiPh%2B%2BIaIdnHElm2lcb%2BjaTUt3a0D160Z%2BfA0H%2Fbg74TId6A43jMJ%2BxO9xPb%2BrZpEX%2B4mPz%2Bpdvd689CFJkh5ZxJZq98Ynay1hYlokWg0dvefQ85V44wUJLwd7nhtrZM6mcyHa4ksh0PymkBE9%2Brug64vR9uwLTiBSnFfFEIwwSBrOv2xb5N9zdhqLW%2FV0bbLPeeVX8xBPXms5WzpGOW1QPwqAlzAAzS2UhmGfC8eoY0v%2Bk7XBp6hBGgua%2FersDM37Xpq65xIhFynSZ0C0%2BcgYFTWtzkwD4Qj1YhcifOReYHJ%2Fqkrj5j%2F8WdKrZBZ2qzcsSUabhyQZ9mVVKPIg%3D%3D&CCB_EmpID=75580935&from=timeline&isappinstalled=0&page=firstPage';
  }

  static propTypes = {
    reloadSuccess: PropTypes.func,
    successTimes: PropTypes.number,
    history: PropTypes.object
  };

  iframeOnload = () => {
    this.props.reloadSuccess();
    setTimeout(() => {
      this.setState({
        show: false,
      }, () => {
        this.setState({
          show: true
        })
      })
    }, 1000);
  };

  handleJump = () => {
    this.props.history.push('/refs-demo')
  };

  render() {
    return <React.Fragment>
      <div>加载次数: {this.props.successTimes}</div>,
      {
        this.state.show ? <iframe src={this.url} onLoad={this.iframeOnload}></iframe> : null
      }
      <div onClick={this.handleJump}>jump</div>
    </React.Fragment>
  }
};
