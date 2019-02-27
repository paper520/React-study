import React from 'react';

// 第一种：函数式定义的无状态组件
function FunComponent(props) {
  return <div>{props.data}</div>;
}

// 第二种：es6形式的extends React.Component定义的组件
class ExtendsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>extends方式定义的组件</div>;
  }

};

export default class Component extends React.Component {
  render() {
    return (
      <div>
        <FunComponent data='函数定义传递的数据'></FunComponent>
        <ExtendsComponent data1='数据一' data2='数据二' />
      </div>
    );
  }
};

// Mounting(加载组件)
// 当创建组件的实例并将其插入DOM时，会依次调用这些方法：

// constructor()

// componentWillMount()

// render()

// componentDidMount()

// Updating(更新状态)
// 更新可以由prop或者state的改变引起。在重新渲染组件时依次调用这些方法：

// componentWillReceiveProps()

// shouldComponentUpdate()

// componentWillUpdate()

// render()

// componentDidUpdate()

// Unmounting(卸载组件)
// 当从DOM中删除组件时，将调用此方法：

// componentWillUnmount()

// 其他API
// 每个组件还提供了一些其他API：

// setState()

// forceUpdate()

// 组件属性
// defaultProps

// displayName

// propTypes

// 实例内部属性
// props

// state