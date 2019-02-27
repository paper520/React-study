import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// 导入页面
import menu from './containers/menu.jsx';
import jsx from './containers/JSX.jsx';
import Component from './containers/Component.jsx';

// 配置路由
export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={menu} />
      <Route exact path="/jsx" component={jsx} />
      <Route exact path="/Component" component={Component} />
    </Switch>
  </HashRouter>
);