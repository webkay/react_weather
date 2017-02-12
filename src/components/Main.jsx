var React = require('react');
var Nav = require('./Nav')

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="small-4 small-offset-4 columns">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
