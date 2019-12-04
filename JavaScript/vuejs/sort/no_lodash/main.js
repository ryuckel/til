Vue.config.devtools = true;

new Vue({
  el: "#app",
  data: function() {
    var columns = { id: "ID", name: "名前", age: "年齢" };
    var sortOrders = {};
    Object.keys(columns).forEach(function(key) {
      sortOrders[key] = 1;
    });

    return {
      columns: columns,
      tasks: [
        { id: 1, name: "test", age: 37 },
        { id: 2, name: "test2", age: 27 },
        { id: 3, name: "test3", age: 21 },
        { id: 4, name: "test4", age: 54 },
        { id: 5, name: "test5", age: 97 }
      ],
      sortKey: "",
      sortOrders: sortOrders
    };
  },
  methods: {
    sortBy: function(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    }
  },
  computed: {
    filteredTasks: function() {
      var data = this.tasks;

      var sortKey = this.sortKey;
      var order = this.sortOrders[sortKey] || 1;

      if (sortKey) {
        data = data.slice().sort(function(a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    }
  }
});
new Vue({
  el: "#app"
});
