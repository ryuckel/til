new Vue({
  el: "#app",
  data() {
    return {
      firstData: [],
      secondData: [],
      thirdData: [],
      chartLabel: [],
      weather: ["sunny", "cloudy", "rainny"],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: '気温&湿度&天気分布',
          fontSize: '24'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0
              },
              scaleLabel: {
                display: true,
                labelString: '湿度'
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                min: 0
              },
              scaleLabel: {
                display: true,
                labelString: '気温'
              }
            }
          ]
        }
      }
    }
  },
  created() {
    this.setRandomData()
  },
  mounted() {
    this.renderChart(
      {
        // labels: this.chartLabel,
        datasets: [
          {
            type: 'scatter',
            label: '晴れ',
            backgroundColor: 'orange',
            pointStyle: 'rectRot',
            data: this.firstData
          },
          {
            type: 'scatter',
            label: '曇り',
            backgroundColor: 'light-gray',
            pointStyle: 'triangle',
            data: this.secondData
          },
          {
            type: 'scatter',
            label: '雨',
            pointStyle: 'star',
            backgroundColor: 'skyblue',
            data: this.thirdData
          }
        ]
      },
      this.options
    )
  },
  methods: {
    setRandomData: function () {
      for (let i = 0; i < 365; i++) {
        let dataset = {
          x: Math.floor(Math.random * 50),
          y: Math.floor(Math.random * 100),
        }
        let weather = this.weather[Math.floor(Math.random() * this.weather.length)]

        if (weather == this.weather[0]) {
          this.firstData.push(dataset)
        } else if (weather == this.weather[1]) {
          this.secondData.push(dataset)
        } else {
          this.thirdData.push(dataset)
        }
      }
    }
  }
});
