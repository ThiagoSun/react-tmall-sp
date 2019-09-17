import Immutable from 'immutable';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export function shouldComponentUpdate(OriginalComponent) {
  return class EnhancedComponent extends OriginalComponent {
    constructor(props) {
      super(props);
      this.shouldUpdate = OriginalComponent.prototype.shouldComponentUpdate;
    }

    static displayName = `HOC(${getDisplayName(OriginalComponent)})`;

    shouldComponentUpdate(nextProps, nextState) {
      if (Object.prototype.toString.call(this.shouldUpdate) === '[object Function]') {
        this.shouldUpdate(nextProps, nextState);
      }
      const result = !Immutable.is(Immutable.fromJS(nextProps), Immutable.fromJS(this.props)) ||
        !Immutable.is(Immutable.fromJS(nextState), Immutable.fromJS(this.state));
      console.log(nextProps, nextState);
      console.log(this.props, this.state);
      console.log(result);
      return result;
    }
  }
}
