var React = require('react');
var Nav = require('./Nav')

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="small-2 large-4 columns"></div>
        <div className="small-4 large-4 columns">
          {props.children}
        </div>
        <div className="small-6 large-4 columns"></div>
      </div>
    </div>
  );
};

module.exports = Main;
