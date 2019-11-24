Bootstrap4
tutorial:getbootstrap.com

#概要
よく利用するレイアウトやUI部品が定義されているCSSフレームワーク

#利用方法
Bootstrapを利用するには、BootstrapのCSSやJavaScriptを読み込むだけで構いません。
ただし、BootstrapはjQueryを利用しているので、jQueryも読み込んでおく必要はあります。

下記リンクにBootstrapの中身があります。中身をちゃんと読む必要はありませんが、このようにCSSやJavaScriptが書かれているということは覚えておきましょう。

BootstrapのCSS: https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css
BootstrapのJavaScript: https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js

#CDNの読み込み
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Bootstrap Template</title>

    <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Bootstrap JavaScript-->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>
  <body>
    <div class="container">
      <p>コンテンツ</p>
    </div>
  </body>
</html>
```
#viewportの設定
viewportとはスマートフォンやPC画面における表示領域のことです。head要素内のmetaタグで指定をします。下記のコードは、表示領域の横幅をデバイスと同じ横幅にして、表示倍率を1倍にするという意味となっています。

<meta name="viewport" content="width=device-width, initial-scale=1">

#グリッド

Bootstrapにはグリッドシステムという仕組みがあり、横幅いっぱいを12カラムとしたときに何カラム分の横幅を割り当てるかを指定するだけで要素を配置していくことができます。グリッドは必要に応じて使えばよく、グリッドを一切使わずにページを作っても構いません。

col-md-6を指定すると、ウインドウ幅がmd（デスクトップ中サイズ＝992px）以上のときに6カラム分の幅を使用し、ウインドウ幅がそれ未満のときは通常のdivの挙動となり横幅100%を使用します。

画面サイズに指定できる値は以下の通りです。

 	col-xs-*	col-sm-*	col-md-*	col-lg-*
ウインドウ幅	〜767px	768〜991px	992〜1199px	1200px〜
想定端末	スマートフォン	タブレット	デスクトップ（中）	デスクトップ（大）
異なる画面サイズを同時に指定すると、より画面サイズの大きいものが優先されます。たとえばcol-xs-6 col-md-4と指定すると、スマートフォンとタブレット（xs〜sm）では6カラム、デスクトップ（中）サイズ（md）以上では4カラムの幅で表示されます。

http://bootstrap3.cyberlab.info/css/gridSystem.html

#Bootstrapのパーツ
テーブル
http://bootstrap3.cyberlab.info/css/tables.html

フォーム
http://bootstrap3.cyberlab.info/css/forms.html

ボタン
http://bootstrap3.cyberlab.info/css/buttons.html

アイコン
http://bootstrap3.cyberlab.info/components/glyphicons.html

ドロップダウンメニュー
http://bootstrap3.cyberlab.info/components/dropdowns.html

たぶ
http://bootstrap3.cyberlab.info/javascript/tab.html

ナビバー
http://bootstrap3.cyberlab.info/components/navbar.html

ラベル
http://bootstrap3.cyberlab.info/components/labels.html

バッジ
http://bootstrap3.cyberlab.info/components/badges.html

アラート
http://bootstrap3.cyberlab.info/components/alerts.html

パネル
http://bootstrap3.cyberlab.info/components/panels.html



