
namespace weather.Controllers {
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=";
    const apiKey = "&appid=ccb0dadab7f2ccc9acd0fa537b1eb0ab";

    export class HomeController {

        public search;
        public forecast;

        fetch() {
            if (this.search) {
                console.log(`searching......`);
                this.$http.get(apiURL + this.search + apiKey)
                    .then((results) => {
                        this.forecast = results.data;
                    });
            }
        }
        constructor(private $http: ng.IHttpService) { }

   

    }
    /* {
          //
          "coord": {
              "lon": -112.07,
                  "lat": 33.45
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
              "base": "stations",
                  "main": {
              "temp": 304.787,
                  "pressure": 972.45,
                      "humidity": 22,
                          "temp_min": 304.787,
                              "temp_max": 304.787,
                                  "sea_level": 1024.3,
                                      "grnd_level": 972.45
          },
          "wind": {
              "speed": 2.62,
                  "deg": 118.001
          },
          "clouds": {
              "all": 48
          },
          "dt": 1477610696,
              "sys": {
              "message": 0.0116,
                  "country": "US",
                      "sunrise": 1477575838,
                          "sunset": 1477615173
          },
          "id": 5308655,
              "name": "Phoenix",
                  "cod": 200
      }
  */
}