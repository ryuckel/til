jQuery
tutorials:http://oss.infoscience.co.jp/jquery/Tutorials:How_jQuery_Works.html
https://qiita.com/Tocyuki/items/0b42c9225aafc995167a

# overall
jQueryを使えば、アニメーションをつけることや、 
ユーザーの行動に応じたインタラクティブなデザインを実現することができます。 

jQueryはJavaScriptのライブラリの1つです。 
ユーザーのクリックに反応して表示されるフォームや、アニメーションなど、HTMLとCSSだけでは実現できなかった様々な動きを表現することができます。 

# 書き方
$('セレクタ').メソッド(引数);
jQueryの使い方は、①jQueryオブジェクトを作成し、②そのjQueryオブジェクトに対してメソッド（機能）を呼び出す、という2つが基本になります。
jQueryはJavaScript（JS）なので、文末にセミコロンが必要です。またコメントもJS同様に//を用います。 

# メソッド
メソッドを使うと、jQueryオブジェクトの内容（HTMLの要素）を変更したり、アニメーションをつけたりすることができます。

$('セレクタ').hide();
⇨セレクタで指定した要素を隠す

$('セレクタ').fadeOut(1500);
$('セレクタ').slideUp(1500);
⇨セレクタで指定した要素を15ミリ秒で消すアニメーションをつける

$('セレクタ').show();
⇨セレクタで指定した要素を表示する（display:noneになっている要素など）
$('セレクタ').fadeIn(1500);
$('セレクタ').slideDown(1500);

# 指定方法
$('#id').slideOut(1500);
$('.class').slideOut(1500);

# イベント
イベントを用いると、ある処理を行うタイミングを設定できます。WEBページ内で、ユーザーによってクリックなどの操作が行われた時、
予めイベント内に指定した処理を実行します。

イベントの構文は、$('セレクタ').イベント名(function(){ });のように書きます。

クリックイベント
$('セレクタ').click(function(){ });

cssイベント
$('セレクタ').css('プロパティ名','値');

textイベント
$('セレクタ').text('Hello World');
⇨指定したセレクタの文字列を変える

HTMLイベント
$('セレクタ').html('<span>Hello World</span>');
⇨html要素も含めて挿入してくれる

addClass
指定した要素にクラスを追加することができる
removeClass
指定した要素からクラスを外すことができる
hasClass
引数に指定したクラスをオブジェクトが持っているか判定する際に使用する
attr
第一引数に属性名、第二引数に属性値を指定することで属性をセットできる
第二引数を指定しない場合は、その属性の値を取得できる
val
HTMLタグに入力、選択されている値を取得できる
animate
アニメーションをつける
引数は連想配列で指定
2つ目の引数でアニメーションの時間をミリ秒かslow、fastなどの文字列で設定
CSSだけではなく、scrollTop等のメソッドにも適用可能
基本構文
$('html, body').animate({'プロパティ':'値'}, 時間);
scrollTopメソッドへの適用
$('html, body').animate({
  scrollTop: 0
}, 'slow');
scrollTop
ページ最上部から値pxの位置に移動することができる
下記の構文でセットで覚える
$('html, body).scrollTop(0);
// スクロールされている部分の距離が0=ページの最上部
要素の取得
find
すべての子孫要素（自分よりも下の階層の要素すべて）の中から、指定したセレクタを持つ要素を取得できる
childlen
指定したセレクタが持つ子要素（一階層だけ下）の中から指定したセレクタに合致した要素を取得したい時に用いる
eq
jQueryオブジェクトの中から、eqの引数の数字と同じインデックス番号の要素を取得できる
prev
jQueryオブジェクトの兄弟要素（同じ階層の要素）の中から一つ前の要素を取得できる
next
jQueryオブジェクトの兄弟要素（同じ階層の要素）の中から一つ後の要素を取得できる
length
要素の個数を取得できる
offset
要素の表示位置を取得できる
$('h1').offset().top;
// ページ最上部からの、h1要素の位置を取得
parents
jQueryオブジェクトで指定した要素の「先祖」要素でセレクタにマッチする要素をすべて選択
インデックス番号の取得
index
指定要素内の指定要素のインデックス番号を取得できる
// li要素内のactiveクラスを持つ要素のインデックス番号を取得
$('li').index($('.active'));
イベント
イベントとは
イベントを用いるとある処理を行うタイミングを設定できる
ユーザによってクリックなどの操作が行われた時、予めイベント内に指定した処理を実行できる
イベントの書き方
$('セレクタ').イベント名(function(){
  //イベント発生時に実行したい処理
});
様々なイベント
readyイベント
HTMLの読込が完了してからjQueryによる操作を開始させるイベント
この構文には省略形も用意されている
非省略形
$(docment).ready(function(){
  // この中にjQuery を書く
});
省略形
$(function(){
  // この中にjQueryを書く
});
clickイベント
$('#hide-text').click(function(){
  $('text').hide();
});
hoverイベント
要素にマウスが乗った時、外れた時に指定した処理を行うイベント
マウスをのせた時の処理、外した時の処理のように、引数を2つ書く
引数の間はコンマで区切る
submitイベント
送信ボタンが押された時やEnterキーでフォームが送信された時などに指定した処理を行うイベント
thisの構文
$(this)はイベントの中で、そのイベントが起こった要素を取得することができる
例えば複数のli要素にclickイベントが設定されていた場合、実際にクリックされた要素だけ処理を行いたい場合、thisを用いて実現可能となる
$('li').click(function(){
  $(this).css('color', 'red');
});
変数
同じjQueryオブジェクトを使用するときは変数を使う
コードが見やすくなり、jQueryの処理が高速化される
宣言にはjavascriptと同じくvarを用いる
変数には文字列や数値、jQueryオブジェクトを格納できる
jQueryオブジェクトを格納する際は変数の頭にをつけるのが慣例、他の場合はをつけるのが慣例、他の場合ははつけない
メソッドチェーン
同じjQueryオブジェクトを複数回使用する際はメソッドチェーンを用いる
メソッドチェーンを用いることで処理が高速化される
メソッドチェーンとは1つのjQueryオブジェクトに連続してメソッドが利用できる構文のこと
