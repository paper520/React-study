import React from 'react';

// 点表示法用于JSX类型
const Demo1 = {
  MyComponent: function (props) {
    return <div>传递进来的数据是：msg={props.msg},val={props.val}</div>;
  }
};

// 展开属性
// [下面二种写法是一样的效果]
function Demo2_App1() {
  return <div name='名称1' className='App1'>app1</div>;
}
function Demo2_App2() {
  const json = { name: "名称2", className: 'App2' };
  return <div {...json}>App2</div>;
}

// 表达式中迭代
function Demo3() {
  const data = ["数据一", "数据二", "数据三"];
  return (<ul>
    {data.map((val, index) => <li key={index}>{val}</li>)}
  </ul>);
}

export default class JSX extends React.Component {
  render() {
    return (
      // 因为是jsx代码中，因此内联样式需要这样赋值
      <div style={{ padding: '0.3rem' }}>
        <h3>jsx学习</h3>
        <hr />
        <Demo1.MyComponent msg='测试数据' val={1 + 2} />
        <hr />
        <Demo2_App1 />
        <Demo2_App2 />
        <hr />
        <Demo3 />
        <hr />
      </div>
    );
  }
};