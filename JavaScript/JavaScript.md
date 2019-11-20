JavaScript
tutorial:

# Hello World
console.log("Hello World");

# 四則演算
+-*/ % **(べき乗) ++ --

# 定数
const 定数名 = 値
再代入はできない

注意点
・大文字と小文字は区別される
・予約語NG
・英数字、$,_のみ
・数字のみはNG

※なるべく定数を使用し、再代入が必要な時にletを使う

# データ型
・文字列
・数値
・undefined: 定義されていない
・null: 値がない
・boolean: true,false

console.log(typeof(値));→データ型が確認できる
NaN

# 条件分岐
if (condition) {
    
} else {
    
}

三項演算子
score >= 80 ? trueの時の処理 : falseの時の処理

論理演算子
&& || !

switch文
switch (key) {
    case value:
        
        break;

    default:
        break;
}

# 繰り返し
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

※テンプレートリテラル:文中に文字列を挿入する
`${変数}`

特定の条件で処理をストップする
・continue:ループを1回スキップする
・break:ループを終了する

# 関数
処理をまとめて呼び出せるようにする

function name(params) {
    
}

name()で呼び出せる

引数　→関数名(引数名=デフォルト値(引数がなかったら利用される))

return 値を返す
例）
const total = sum(1,2,3)

アロー関数
const 定数名　= (仮引数) => {
    処理
    return 返り値
}

※スコープに注意
　皮下のScriptを読み込むことを考え{}で囲っておくと干渉しない

# オブジェクト
配列
const 配列名[添え字] = [x,x,x,x,...]
length =　要素の個数を取り出せる

※constでできない＝値の再代入
　→配列の中身を変更することは可能

オブジェクト
const オブジェクト名 {key:値,key2:値2}

keyの追加　オブジェクト名.key3 = value
削除　　　　delete オブジェクト名.key;

class
class{
    constructor(引数){
      this.引数 = 値
    }
}

インスタンスの生成
const 定数名= new class(引数)

stateメソッド→インスタンスを作らなくても呼び出せる

継承
親子関係として親クラスのメソッドを引き継ぐことができる
class クラス名 extend 親クラス {}

オブジェクトの注意点
配列

let x = [1,2]
let y = x //xの参照している元を渡す
x[0] = 5 //yにも反映される

#配列の操作
先頭に追加　unshift
末尾に追加　push
先頭を削除　shift
末尾を削除　pop

途中の要素を操作
splice(2,0,6,7)

foreach:配列すべての要素に処理をする
array.forEach(element => {
    
});

map:配列のすべての要素に適用して返す

filter:真偽値で使う

Object.keys() キーの一覧
Object.values() 値の一覧
Object.entries() 配列として取得する

スプレッド演算子
const a = [10,20];
const b = [1,2,3,...a]; //1,2,3,10,20

分割代入
const {name,score,...point} = player
player.{name,score,hp,mp}; //hp,mpはpointsに入る

substring(start,end)

#mathオブジェクト

円周率:Math.PI
0~1未満の乱数:Math.random()
→さいころ:Math.floor(Math.random()*6+1)

#Dateオブジェクト
日付関連のオブジェクト

getFullyear
getMonth 0~11
getDate
getDay 0-6 曜日
getHours
getMinutes
getSeconds
getMiliseconds
getTime　→UTC、東京

#Windowオブジェクト
window(省略可).alert(msg) //警告メッセージ
window(省略可).confirm(msg) //Yes(True)、No(false)を尋ねる

タイマー機能
setInterval(() => {
    
}, interval);
↑時間がかかる処理は負荷がかかりやすい

setTimeout(() => {
    
}, timeout);

#DOM
Document Object Model

idの取得
document.getElementById()

class
document.getElementsByClassName

tag
document.getElementsByTagName

selector
document.querySelectorAll

テキストを変更
TextContent = value

親要素の取り出し
parentNode

子要素
children

#DOM操作
要素を取得
操作:h1.title = value

CSS h1.style.css = CSSの値

カスタムデータ属性
data-
dataset.カスタムデータ属性→カスタムデータの属性値が取れる

#クラス属性の操作
CSSを当てたりするのに使う

クラスの追加、削除
classList.add('')
classList.remove()

classList.contains('') →クラスが含まれていればtrue
classList.toggle('')→追加されていたら削除、追加されていなければ追加してくれる

要素の生成

createElement()
.appendChild()→子要素に追加
insertBefore()→途中に追加

要素のコピー
cloneNode()
removeChild()子要素の削除

イベントリスナー


