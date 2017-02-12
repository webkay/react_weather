var axios = require('axios')

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=c03b83ca96bf1682864479e477a03aa2&units=imperial"

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp
      }
    }, function (res) {
      throw new Error(res.message);
    })
  }
}
