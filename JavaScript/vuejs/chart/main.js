new Vue({
  el: "#app",
  data: {
    chartLists: [
      { name: "たんぱく質", color: "#2ecc71", data: 10 },
      { name: "炭水化物", color: "#3498db", data: 30 },
      { name: "ビタミンA", color: "#95a5a6", data: 3 },
      { name: "ビタミンB", color: "#9b59b6", data: 17 }
    ]
  },
  methods: {
    listCategoryCreat: function (target) {
      //グラフを描画するために連想配列を普通の配列に変換
      var targetList = this.chartLists
        .map(function (arr) {
          return [arr[target]];
        })
        .reduce(function (a, b) {
          return a.concat(b);
        });

      return targetList;
    },
    creatChart: function () {
      var labelList = this.listCategoryCreat("name");
      var colorList = this.listCategoryCreat("color");
      var dataList = this.listCategoryCreat("data");

      //グラフ描画
      config = {
        type: "pie",
        data: {
          labels: labelList,
          datasets: [
            {
              backgroundColor: colorList,
              data: dataList
            }
          ]
        }
      };
      chart = new Chart(
        document.getElementById("chart").getContext("2d"),
        config
      );
    }
  },
  mounted: function () {
    //画面読み込み時に実行
    this.creatChart();
  }
});
