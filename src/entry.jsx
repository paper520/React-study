import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/easycss-core/build/easycss.min.css';
import Router from './router.jsx';

const root = (
  <Router></Router>
);

ReactDOM.render(root, document.getElementById('root'));