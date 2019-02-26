import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/easycss-core/build/easycss.min.css';

const div = (
  <div>Hello JSX!</div>
)

/* 4 渲染 JSX 到页面中 */
ReactDOM.render(div, document.getElementById('root'))