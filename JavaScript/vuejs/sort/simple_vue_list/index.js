document.addEventListener("DOMContentLoaded", function() {
  const items = [
    { Id: "1", Name: "Tanaka", Age: "20" },
    { Id: "2", Name: "Suzuki", Age: "30" },
    { Id: "3", Name: "Takahasi", Age: "40" }
  ];

  const ids = ["1", "2", "3"];

  const ages = ["20", "30", "40"];

  new Vue({
    el: "#app",
    data: {
      items: items,
      sort: {
        key: "", // ソートキー
        isAsc: false // 昇順ならtrue,降順ならfalse
      },
      ids: ids,
      selectId: "",
      ages: ages,
      selectAges: ages,
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
});
