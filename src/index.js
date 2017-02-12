import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var {Route, Router, IndexRoute, hashHistory} = require('react-router')
// var Route = require('react-router').Route;

var Main = require('./Main')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('root')
);
