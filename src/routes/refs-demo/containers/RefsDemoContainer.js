import { connect } from 'react-redux';
import {actions} from '../modules/refsDemo';

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import RefsDemo from '../components/RefsDemo';

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  ...actions
};

const mapStateToProps = (state) => ({
  inputValue1: state.refsDemo.inputValue1,
  inputValue2: state.refsDemo.inputValue2
});

export default connect(mapStateToProps, mapDispatchToProps)(RefsDemo)
