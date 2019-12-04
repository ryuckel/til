var container = document.getElementById("globalArea");

//設定用のオブジェクト
var config = {

  //カラーの設定
  color: {
    selected: 0xff8888,
    background: 0xaaaaff
  }

}
var controller = new GIO.Controller(container, config);
controller.addData(data);
controller.init();
