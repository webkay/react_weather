import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var {Route, Router, IndexRoute, hashHistory} = require('react-router')
// var Route = require('react-router').Route;

var Main = require('./components/Main')
var Weather = require('./components/Weather')
var About = require('./components/About')
var Examples = require('./components/Examples')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/about" component={About}/>
      <Route path="/examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
