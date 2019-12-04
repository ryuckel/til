new Vue({
  el: "#app",
  data: {
    order: false,
    // フォームの入力と紐付けるデータ
    budget: 300,
    // 表示件数
    limit: 2,
    // 元になるリスト
    list: [
      { id: 1, name: "りんご", price: 100 },
      { id: 2, name: "ばなな", price: 200 },
      { id: 3, name: "いちご", price: 400 },
      { id: 4, name: "おれんじ", price: 300 },
      { id: 5, name: "めろん", price: 500 }
    ]
  },
  computed: {
    // budget以下のリストを返す算出プロパティ
    matched: function() {
      return this.list.filter(function(el) {
        return el.price <= this.budget;
      }, this);
    },
    // sortedを新しく追加
    sorted: function() {
      return _.orderBy(this.matched, "price", this.order ? "desc" : "asc");
    },
    // limitedで使用するリストをsortedに変更
    limited: function() {
      return this.sorted.slice(0, this.limit);
    }
  }
});
