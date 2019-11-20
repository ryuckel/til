Ruby on Rails
tutorial:https://railstutorial.jp/

#概要
Rubyを使用してアプリケーションを開発するためのフレームワーク
アプリケーションの作成:rails new アプリケーション名
→必要なファイルとフォルダが作成される

サーバー起動:rails server

トップページの作成:rails generate controller home top

ページの作成に必要なもの:
→表示するためにroute→controller→viewの順番で処理されていく

view→ページの見た目を作るためのHTMLファイル
controller→viewを表示するときに経由する。
　　　　　　リクエストに応じてアクションに対応するHTMLファイルを返す

route→URLを見て適切なcontrollerのアクションを呼び出す

ページのレイアウトを整える
app/assets/stylesheets/Now.scssに記載する
→すべてのviewにCSSが適用される

画像
/publicフォルダに格納する
→<img src="">やbackground-image;url('')で表示させられるようになる

リンクの作成→HTMLファイルの<a>タグのhref属性をルーティングのURLと同じにする

#データベース
データを保存し、リクエストに応じて取り出す

別ページの作成:rails g controller コントローラー名　アクション名

RubyのHTMLファイルへの埋め込み　→<%  %>
→ブラウザに変数を表示させる　→<%=  %>

データ(配列)を一覧表示させる→繰り返し処理を利用する

例
==============================
(データ格納部分)
<%
posts = [
    "detail"
    ...
]
%>
(表示部分)
<% posts.each do |post| %>
    <div class="posts-index-item">
      <%= post %>
    </div>
    <% end %>

(controller.rb)
def index
    @posts = [ #@をつけるとviewでも使えるようになる

    ]
end
==============================

データベースの準備
rails g model テーブル名　カラム:データ型
→db/migrate　マイグレーションファイルが作成される
rails db:migrate→反映される

rails g modelコマンド
→db/migrateフォルダにマイグレーションファイルを作成
app/modelフォルダにモデルが定義されたファイルの作成

#railsコンソール
データの(インスタンスの)作成、保存などができる
保存されたデータの出力→裏側の処理をコマンドで実行できる

コマンド
起動:rails c
終了:quit

データの作成(new,save)
データの取得(all,content...)

def index
    @posts = Post.all
end
一覧の取得をコントローラー上で記述する→viewに反映できる

共通のレイアウトをまとめる
→共通のレイアウト(ヘッダーなど)をapplication.html.erbにまとめる
　<%= yield %>→各ページの内容が代入される

link toメソッド
リンクの追加時に使う

<%= link to ("表示する文字列", "/URL") %>

#3

idカラム→DBに保存されるときに自動で入る数字
created_at→レコード作成時刻
updated_at→レコードの更新時刻

find_byメソッド
→特定のidのデータを取得する
　Post.find_by(id:3)

URLにidを含める
get "posts/:id" → "posts#show"

def show
    @ :params[:id]
end
idの値を取得する

データをDBに保存

ページ→controller(create)→DB

#データの操作
投稿の編集
①編集したい投稿の取得
②投稿のcontentの上書き
③DBに保存

投稿の削除
①削除したい投稿の取得
②destroyメソッドを使う

編集用ページの作成
routes "posts/:id/edit"　→"posts#edit"
controller →editメソッドの作成
view →<%= link_to ("編集", "/posts/#{@post.id}/edit") %>

入力フォームの作成
<textarea>初期値</textarea>
<%= @post.content %>

編集の保存　≒updateアクション
routes post "post/:id/update" → "post#update"
controller redirect_to("/posts/index")→リダイレクト
@post.find_by(id: params[:id])
@post.destroy

投稿の更新
取得　　@post = Post.find_by(id: params[:id])
上書き @post.content = params[:content]
保存    @post.save

#5バリデーション
バリデーション:データをチェックして不正ならDBに保存しない
モデルファイル
validates 検証するカラム名,{検証する内容}
引っかかるとsaveメソッドでfalseが返る

表示するページを切り替える
==
    # 保存が成功した時は投稿一覧ページ、失敗した時は編集ページにリダイレクトされるように変更してください
    if @post.save
      redirect_to("/posts/index")
    else
      redirect_to("/posts/#{@post.id}/edit")
    end
==

エラーメッセージの表示
full_messages に格納されている

flash
Railsではフラッシュを表示するために、特殊な変数flashが用意されています。
アクションで変数flash[:notice]に文字列を代入すると、flash[:notice]をビューで使うことができます。
変数flashは１度表示された後に自動で削除されるようになっています。

#テーブルとモデルの作成

rails g model カラム名:データ型
rails db;migrate DBへの反映

バリデーションの追加
validates :カラム名,{チェック内容}

フォームの作り方
複数行<textarea>タグ
1行<input>タグ

name属性を指定
ユーザー名、メールアドレスを送信するときにハッシュ地になるため、
name属性をつけれるようにしておく

value属性
初めから値が入力された状態にできる

#マイグレーションファイルのみ作成

rails g migration ファイル名
↓
changeメソッドんときに変更内容を記載する
↓
rails db:migrate

画像の設定
→publicフォルダに格納する
↓
ユーザーを作成したときに指定するとデフォルト画像になる

画像の表示
<img>タグでソースを指定

画像のアップロード
input タグにtype="file"を指定する

<%= form_tag("",{multipart: true}) do %>

Rubyのコードでファイルを作成
Fileクラスを使う
File.write("ファイルの場所"、"ファイルの中身")

画像の保存
image = params[:image]
File.binwrite
image.read


