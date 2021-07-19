import React from 'react';
import PropTypes from 'prop-types';
import {Toast} from 'antd-mobile';
import { withRouter } from "react-router-dom";

const Fragment = React.Fragment;

class GlobalStore extends React.Component {
  static propTypes = {
    globalStore: PropTypes.object,
    children: PropTypes.node.isRequired,
    getGlobalInitInfo: PropTypes.func,
    location: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidMount() {
    this.props.getGlobalInitInfo();
  }

  componentDidUpdate() {
    console.log(this.props.location.pathname);
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
    Toast.info('出错了！（来自"错误边界"的提示）')
  }

  render() {
    // if (this.state.hasError) {
    //   return '页面崩溃了...刷新试试吧！'
    // }
    return <Fragment>
      {this.props.children}
    </Fragment>
  }
}

export default withRouter(GlobalStore);
