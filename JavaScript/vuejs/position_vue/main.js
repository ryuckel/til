new Vue({
  el: "#app",
  data: {
    x: null,
    y: null
  },
  methods: {
    getXY(event) {
      // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
      console.log(event.clientX); // x coordinate
      console.log(event.clientY); // y coordinate

      // pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
      console.log(event.pageX);
      console.log(event.pageY);

      // screenX/Y gives the coordinates relative to the screen in device pixels.
      console.log(event.screenX);
      console.log(event.screenY);
      this.x = event.offsetX;
      this.y = event.offsetY;
      console.log(this.y);
      console.log(this.x);
    }
  }
});
