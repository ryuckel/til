HTML
tutorial:https://developer.mozilla.org/ja/docs/Web/HTML
support:https://caniuse.com/

# 事前準備
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>タブ表示</title>
  <link rel="icon" href="favicon.ico">
  <meta name="description" content="太郎のポートフォリオサイトです。">
</head>
<body>
</body>
</html>

# 基本的な用語

1. タグ
2. 属性


<タグ>文章</タグ>
<タグ 属性名=値 属性名=値>文章</タグ>
<タグ>
<タグ/>

# 基本的なタグ

<h1>見出し<h1>
<p>パラグラフ</p>
<img>画像

src=読み込み元
alt=読み込み中に表示される内容

<p class="message">Hello world</p>

# 基本構成
head→文書自体の情報
body→内容

title→ブラウザのタブの文字列
link：
favicon：
meta→文書の説明、検索のヒットなどにも影響
styleタグ→CSSが書ける


# グローバル属性
----
id: ひとつしかない要素
class: 複数ある要素
style: スタイルを直接指定
----

# bodyで使えるタグ
header:ヘッダー
footer:フッター
nav: ナビゲーション　ナビゲーションメニューやパンくずリストなど
article: 独立しているコンテンツ　ブログエントリなど
aside: 副次的なコンテンツ　補足情報、広告など
section: それ以外の情報の塊
h1 - h6:見出し

#セクションより細かいレベルで情報をグループしたい時のタグ
p: 段落
hr: 水平線
pre: 改行や字下げを保持　ソースコードなどを入れる
blockquote: 引用
div: スタイリング

ol (ordered list) :連番のリスト
ul (unordered list) :箇条書きのリスト
li (list item)
dl (definition list) 定義リスト
dt (definition term) 
dd (definition description)

# テキストレベルのマークアップに使えるタグ
strong
br　改行したい時（閉じタグが不要）
span（意味はないけどテキストについてCSSなどの処理をしたい時に必要)

aタグ→リンクを貼りたい
href属性→リンク先を指定URL
target→新規タブで開いてくれる（target="_blank")

imgタグ→画像を表示させる
src=指定

# table　表組みを作る
thead
tbody　本体を作る
tr: table row　行のデータ
th: table header　見出し
td: table data　tableのデータが入る

＝＝＝＝＝＝＝＝
        <table>
            <thead>
                <tr>
                    <th>Size</th><th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>S</td><td>150</td>
                </tr>
                <tr>
                    <td>M</td><td>180</td>
                </tr>
                <tr>
                    <td>L</td><td>210</td>
                </tr>
                <tr>
                    <td colspan="2">free for kids!</td>
                </tr>
            </tbody>
        </table>
＝＝＝＝＝＝＝＝

# formタグ
  action: どこに送るか？
  method: get / post
input
    text
    submit
    password
    hidden
size→幅
maxlength→入力制限
value→初期値
placeholder→入力ガイド
＝＝
れい
    <article>
        <h1>アンケート</h1>
        <form action="survey.php" method="post">
            <p>メールアドレス: <input type="text" name="email"></p>
            <p><input type="submit" value="送信！"></p>
        </form>
    </article>
＝＝＝

textarea　複数行入力させたい時に使用するタグ
button　ボタンを実現する≒input type=”submit”
※input typeの方がリッチ

input
    checkbox→チェックボックス　checked→最初からチェックをつける
    radio→ラジオボタン
label
    email
    number
    date
→それぞれ関係のない文字列を入れると弾いてくれる
required→入力必須
novalidate→→無効化


# selectセレクトボックス
option
            <p>City:
                <select name="city" multiple size="5">
                    <option value="tokyo">Tokyo</option>
                    <option value="nagoya">Nagoya</option>
                    <option value="osaka" selected>Osaka</option>
                    <option value="kyoto">Kyoto</option>
                    <option value="fukuoka">Fukuoka</option>
                </select>
            </p>

# HTML実体参照
