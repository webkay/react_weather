var React = require('react')

var WeatherForm = React.createClass({
  render: function () {
    return (
      <div>
        <form>
          <input type="text" placeholder="Enter city name" /><br />
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
