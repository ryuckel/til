const items = [
  { Id: "1", Name: "ファミリーマート", Age: "20" },
  { Id: "2", Name: "セブンイレブン", Age: "30" },
  { Id: "3", Name: "ローソン", Age: "40" },
  { Id: "4", Name: "ミニストップ", Age: "50" },
  { Id: "5", Name: "ampm", Age: "60" },
  { Id: "6", Name: "ポプラ", Age: "70" },
  { Id: "7", Name: "Natural Lawson", Age: "80" },
  { Id: "8", Name: "ファミマ！！", Age: "90" },
  { Id: "9", Name: "NewDays", Age: "100" },
  { Id: "10", Name: "OdakyuOX", Age: "110" },
  { Id: "11", Name: "サークルK", Age: "120" },
  { Id: "12", Name: "スリーエフ", Age: "130" }
];

new Vue({
  el: "#app",
  data: {
    items: items,
    sort: {
      key: "", // ソートキー
      isAsc: false // 昇順ならtrue,降順ならfalse
    },
    searchName: ""
  },
  computed: {
    eventedAction: function() {
      let list = this.items.slice();

      // ソート実施
      if (this.sort.key) {
        list.sort((a, b) => {
          a = a[this.sort.key];
          b = b[this.sort.key];
          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1);
        });
      }

      // Nameで検索実施
      if (this.searchName) {
        list = list.filter(element => {
          return Object.keys(element).some(key => {
            if (key === "Name") {
              return element[key].indexOf(this.searchName) > -1;
            }
          });
        });
      }

      return list;
    }
  },
  methods: {
    // sort用キーをセットし、昇順・降順を入れ替える
    sortBy: function(key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;
    },
    sortedClass: function(key) {
      return this.sort.key === key
        ? `sorted ${this.sort.isAsc ? "asc" : "desc"}`
        : "";
    },
    resetting: function() {
      this.sort.key = "";
      this.sort.isAsc = false;
      this.selectId = "";
      this.selectAges = ages;
      this.searchName = "";
      this.items = items;
    }
  }
});
