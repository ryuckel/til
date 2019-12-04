Vue.component("price", {
  data: function() {
    return {
      items: []
    };
  },
  mounted: function() {
    var self = this;
    axios.get("https://api.myjson.com/bins/hjtrl").then(function(res) {
      self.items = res.data;
    });
  },
  template:
    "<table>" +
    '<tr v-for="item in items">' +
    "<td>{{ item.id }}</td><td>{{ item.name }}</td>" +
    "</tr></table>"
});
