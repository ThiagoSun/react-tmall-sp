import React from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function InputHOC(WrappedComponent) {
  class WrapperComponent extends React.Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;

    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardRef, ...rest} = this.props;

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <WrappedComponent forwardRef={forwardRef} {...rest} />;
    }
  }

  // class WrapperComponent extends WrappedComponent {
  //   componentDidUpdate(prevProps) {
  //     console.log('old props:', prevProps);
  //     console.log('new props:', this.props);
  //   }
  // }

  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogPros 包裹的子组件上。
  return React.forwardRef((props, ref) => {
    return <WrapperComponent {...props} forwardRef={ref} />;
  });
}
