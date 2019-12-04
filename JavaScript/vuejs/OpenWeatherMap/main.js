var app = new Vue({
  el: "#app",
  data: {
    zip_code: "",
    city: null,
    min_temp: null,
    max_temp: null,
    condition: {
      main: null
    }
  },
  // mounted: function() {
  //   axios
  //     .get(
  //       "https://api.openweathermap.org/data/2.5/weather?zip=" +
  //         this.zip_code +
  //         ",jp&units=metric&lang=ja&appid=315770bf6b6418c726cca2c04fccb848"
  //     )
  //     .then(
  //       function(response) {
  //         this.city = response.data.name;
  //         this.temp = response.data.main.temp;
  //         this.condition = response.data.weather[0];
  //       }.bind(this)
  //     )
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // },
  filters: {
    roundUp(value) {
      return Math.ceil(value);
    }
  },
  methods: {
    zipcodeInput(event) {
      console.log(this.zip_code);
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?zip=" +
            this.zip_code +
            ",jp&units=metric&lang=ja&appid=315770bf6b6418c726cca2c04fccb848"
        )
        .then(
          function(response) {
            this.city = response.data.name;
            this.min_temp = response.data.main.temp_min;
            this.max_temp = response.data.main.temp_max;
            this.condition = response.data.weather[0];
          }.bind(this)
        )
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
