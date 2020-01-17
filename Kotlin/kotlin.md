Kotlin

## 概要

- JetBrains
- JVM
- Android

## 公式サイト

https://developer.android.com/kotlin?hl=ja

## 全般

- 文の区切り
  　文の区切りは改行です。例外として、以下のように 1 行に複数の文を書く場合は、
  　途中にセミコロン;が必要になりますが、可読性が悪くなりますので 1 行に複数の文は書かないようにしましょう。

- パッケージ
  package で始まる行は、そのファイルのクラスがどのパッケージに属しているかを示すためのものです。
  パッケージとはたくさんある Kotlin や Java のクラスをまとめる仕組みです。ある一定のまとまりでクラスが複数入っています。

- インポート
  import の最初の文では、「android.support.v7.app パッケージの AppCompatActivity クラスを使用する」、
  次の文では「android.os パッケージの Bundle クラスを使用する」ことを表しています。
  このように作成したプロジェクトのパッケージ jp.techacademy...kotlinlog だけでなく、
  Android が標準搭載しているパッケージが数多くあり、Android アプリを動作させるにはそれらを必要に応じて import する必要があります。

- 文ブロック
  文のブロックを{}で表します。class MainActivity : AppCompatActivity() { ... }が 1 つのブロックと考えます。
  if 文などがあると 1 つのブロックの中に入れ子でブロックが存在する場合もあります。

- クラスの定義
  import の下には class MainActivity : AppCompatActivity() {...}の記述があります。
  これはクラスの定義部になります。

class キーワード 新規クラス名 : 継承元のクラス() {...}というルールで記述されます。
MainActivity というクラスがどんな機能を持つかここで定義します。

- アクセスコントロール
  アクセスコントロールとは、クラスなどへのアクセスに制限を設けることです。

Kotlin のアクセスコントロールの単位はクラスとパッケージです。Kotlin のアクセスコントロールのレベルは 4 段階あります。下に行くほど制限が弱まります。

アクセスレベル 公開範囲
private 同じクラスからしかアクセスできない。他のソースから見られたくない、操作されたくない場合に指定する。
protected 同じクラスか、そのサブクラスからしかアクセスできない。
internal 同じモジュールからしかアクセスできない(※)。
省略した場合 public と同じ
public どこからでもアクセスできる。外向けに公開する関数は public を指定する。

- インデント
  ブロック内{...}などは階層関係がわかりやすいようにインデントします。
  半角で 4 文字が一般的ですが、プログラムの動作としては空白やタブは無視されるのでインデントを何文字分にしても動作に変わりはありません。
  ただし、全角空白はエラーになるので注意しましょう。

- クラスの継承
  :を使用して、あるクラスを元にして新しいクラスを定義することもできます。継承元のクラスを親クラス、新たに作るクラスを子クラスと呼びます。親から子へ全ての機能が引き継がれます。引き継いだ親クラスの関数を上書きして置き換えることをオーバーライドと呼びます。オーバーライドするときは override を付けて関数の宣言を行います。もし、オーバーライドした関数の中で、親クラスのその関数を呼びたい場合は super.関数名として呼び出します。

- オーバーライド
  override のようにクラスや関数に注釈を付けるものを修飾子と呼びます。
  override はオーバーライド（上書き）しているメソッドである、という意味の注釈です。
  override を付けることにより、AndroidStudio が正しくオーバライドメソッドを記述しているか、検証を行ってくれるようになり、タイプミスなどを防ぐことができます。

- 関数の定義
  関数の定義は以下のように fun キーワードを付けて記述します。

[override][アクセスコントロール] fun 関数名(引数) [: 戻り値の型] {...}
override、アクセスコントロール、戻り値の型は省略できます。アクセスコントロールはクラスと同じになります。

関数とは、簡単に言うと 処理に名前をつけてまとめるもの です。また、 メソッド という言葉を目にした場合、メソッド＝関数 という意味だと思ってください。
（厳密には異なる面があり、学習を続けていくと違和感を感じることになるかと思います。しかし今の時点では、このように覚えていただいて構いません。）

- 引数
  引数は関数を呼び出す時に、関数へ値を渡す値です。fun onCreate(savedInstanceState: Bundle?) {...}では onCreate(...)関数に、
  savedInstanceState: Bundle?という Bundle?型の値を savedInstanceState という引数を渡しています。
  値を渡さない場合、つまり引数がない関数は toString()のようにカッコの中には何も書きません。

- 戻り値の型
  関数は呼び出し元に値を戻すことができます。fun onCreate(savedInstanceState: Bundle?) {...}では戻り値の型が省略されているので、
  値を返さない、という意味になります。値を返す場合は: Int のように戻り値の型を記述します。型にどのようなものがあるかはあとから説明します。

## 文法

- コメント
  プログラム中にはプログラムの内容を後からみて分かりやすくするためにコメントを記述することができます。変数名などコメントを使わなくても中身が分かるようにすることが重要ですが、何のための処理なのか？どうしてこのような記述をしているのか？などを書くと良いコメントとなるでしょう。

コメントはプログラム側では無視されるので、ソースコードを読む人間（自分を含む）のために書かれます。

コメント 例
//… // 1 行のみのコメントです
/_…_/ /_ 途中で改行もできるコメントです_/

- データ型
  型とは値がどのような種類であるかを示すもので、Kotlin の基本的な型には、数値型、論理型、文字型、及びそれらの null 許容型などがあります。

数値型
数値型には整数型と浮動小数点数型があります。

整数型
型 最小値 最大値
Byte -128 127
Short -32,768 32,767
Int -2,147,483,648 2,147,483,647
Long -9,223,372,036,854,775,808 9,223,372,036,854,775,807
整数型には扱うことができる数値の範囲によってこれだけ種類があります。通常は Int を使えば問題ありません。

浮動小数点数型
少数点を扱うことができるのが浮動小数点数型になります。Double が 64 ビット長で Float が 32 ビット長の浮動小数点数型です。浮動小数点数型の場合、
64bit の Double の方が扱える数値の範囲が広い程度に理解しておけば問題ありません。

論理型
論理型は Boolean 型とも呼ばれ、true か false の２値をとる型です。条件式で用いられる事が多く、条件に合致したときには true が、合致しない時には false となります。

文字型
1 つの文字を格納するためのデータ型として Char 型が用意されています。ただ実際にはあまり Char 型を使うことはなく、String クラスと呼ばれる文字列を扱うためのクラスを使う事の方が多いです。

null
null とは変数に値が入っていない状態を表します。null については chapter12 で詳しく説明します。

null 許容型
kotlin では、null(変数に値が入っていない状態)を許可する場合、型に?を付けて明示します。null を許可する型のことを null 許容型と呼びます。例えば Int の null 許容型は Int?となり、Int 型とは別の型として扱われます。null 許容型は基本的に使用せず、必要な場合にのみ使用するようにしましょう。

- 定数と変数
  どちらも値を保存する箱のようなものです。一度値を設定したらそれ以降は値の変更をすることができない定数と、後から値を変更することができる変数があります。基本的に定数を使い、どうしても後から変更する可能性がある場合のみ変数で宣言しましょう。定数にすることで値が変わるはずのないものに対して誤って代入をしようとしたときにコンパイルエラーが発生してすぐに問題に気付くことができます。

定数や変数が必要になる理由としては「別名として使うため」と「一時的に記憶するため」ということがあります。プログラム中で複数のデータを扱いたい場合や、同じデータを何度も参照したり計算によって変化させたい場合に利用します。
定数は val で宣言します。
val max_num = 100
定数は後から値を変更することができません。また、定数の型は値から推定されます。これを型推論といいます。

変数は var で宣言します。以下は、変数名を num、値を 0 として変数を宣言（定義）した例です。

var num = 0
変数も型推論を利用できます。型を明示して宣言するには以下のように記述します。

var num: Int = 0
null 許容型の場合、型に?を付けて宣言します。null 許容型は定数、変数とも使用できますが、必要な場合にのみ使用するようにしましょう。

val num2: Int? = null

- 演算子

代入演算子
代入演算子とはすでに出てきていますが変数や定数に値を代入する演算子です。=を使います。後述する比較演算子の比較演算子とは異なる点に注意しましょう。

val num = 100
算術演算子
算術演算子とは四足演算など数値を計算する場合に使用する演算子です。

演算子 演算式 意味

- A + B A に B を加える

* A - B A から B を引く

- A \* B A に B を掛ける
  / A / B A を B で割る
  % A % B A を B で割った余り
  val num = 10 + 20
  インクリメント・デクリメント演算子
  +1 および -1 を行う演算子です。++A または A++ であれば A に 1 を加え、 --A または A-- であれば A から 1 を引きます。変数の前に ++ (--) を付けるか後ろに付けるかは、後ろに付けた場合はインクリメント演算子による演算以外の処理(例えば代入など)を先に行います。

演算子 演算式 意味
++ ++A , A++ A に 1 を加える
-- --A, A-- A から 1 を引く
var num = 10
num++
論理演算子
論理演算子は Boolean 型の演算を行います。

演算子 演算式 意味
&& A && B A かつ B がともに true のときに true になる
|| A || B A または B のどちらか一方でも true のときに true になる
! !A A が true ならば false を、 false であれば true になる
比較演算子
比較演算子はその名の通り 2 つの値を比較する演算子です。演算子の条件を満たすときに true 、満たさないときに false になります。

演算子 演算式 意味

>     A > B	A の方が B より大きい
>
> < A < B A の方が B より小さい
> = A >= B A は B 以上
> <= A <= B A は B 以下
> == A == B A と B は等しい
> != A != B A と B は等しくない

- 条件分岐
  条件分岐を行う制御文には if 文、switch 文があります。

if 文
もっともシンプルな if 文は以下の通りです。条件式が満たされるときに(=true のとき)、{ }で囲まれた処理が実行されます。条件式は( )で囲みます。

if (条件式) {
条件式が true の時に実行される処理
}
複数の条件分岐がある if 文を書くこともできます。}のあとに else if で 2 つ目以降の条件を書きます。最後の else はどの条件式も true にならなかった場合に実行される処理を書きます。

if (条件式 1) {
条件式 1 が true の時に実行される処理
} else if (条件式 2) {
条件式 2 が true の時に実行される処理
} else {
どの条件式も true でなかったときに実行される処理
}

when 文
when 文は式を記述し、その後ろに値とアロー「->」を指定して、その値と等しい場合に任意の処理を実行させるよう振り分ける制御文です。処理が 1 行だけの場合は{}を省略できます。

when (式) {
値 1 -> {
処理 1
}
値 2 -> {
処理 2
}
値 3, 値 4 -> {
処理 3
}
else -> {
処理 その他
}
}
どの case 文の値とも等しくない場合は else 文の処理が実行されます。値 3, 値 4 のように複数の値を指定することもできます。

- 繰り返し処理
  繰り返し処理を行う場合は for 文や while 文があります。

for 文
for 文は以下の書式になります。

for (アイテム in コレクション) {
繰り返し行いたい処理
}
コレクションとは複数の要素が集まったものです。for 文は、コレクションから要素を 1 つ取り出して「繰り返し行いたい処理」を実行します。これを要素の数分繰り返します。

0 から 1 ずつ値を増やしていき、10 になるまで繰り返す(10 を含まない)には以下のように記述します。until は for 文で良く使うので覚えておきましょう。

for (i in 0 until 10) {
Log.d("kotlintest", Integer.toString(i))
}
while 文
式が満たされる間処理を繰り返すのが while 文です。条件が満たされなくなったときに while 文を抜けます。

while (条件式) {
処理
}
0 から 1 ずつ値を増やしていき、10 になったら処理を抜ける（＝ 10 になるまで繰り返す）には以下のように記述します。

var num = 0

while (num < 10) {
Log.d("kotlintest", Integer.toString(num))
num++
}
判定を後から行う do - while 文もあります。

num = 0

do {
Log.d("kotlintest", Integer.toString(num))
num++
} while (num < 10)

- 配列
  配列とはひとまとまりのデータを扱えるようにする仕組みです。配列は以下のように定義、初期化します。配列の型は要素(配列に格納されるデータ)の型から推測されます。例えば要素に「1, 2, 3」が設定されていれば、配列は Array<Int> 型になります。

val 配列名 = arrayOf(配列の要素)
また、以下のように型を指定することもできます。

val 配列名 = arrayOf<型>(配列の要素)
いったん配列を作成すると、配列の大きさ(要素の数)を変更することはできません。大きさを変更したい場合には、後から説明する MutableList を使います。または配列をコピーして大きさを変更することもできます。

val 新しい配列名 = 元の配列名.copyOf(配列の大きさ)
配列の要素にアクセスする際は添字を使います。添字は 0 から始まることに注しましょう。例えば要素数を 3 個として宣言した場合、添字には 0,1,2 を使います。

配列名[添字]
添字を使うと要素を変更することができます。ただし、最初に推測された型と異なる型を指定した場合にはエラーとなります。

配列名[添字] = 新しい要素
配列の要素数を知る方法も用意されています。

配列名.size

- 例外処理
  例外処理とは、プログラムが実行中にエラーになった場合、アプリを異常終了させるのではなく、エラーになった場合の処理を行わせることを言います。

Kotlin では例外処理は try - catch - finally 構文で記述します。例外の型には「Exception」などを指定します。　 finally {...} は省略可能です。

try {
なんらかの処理
} catch (変数名: 例外の型 ) {
エラーになった場合の処理
} finally {
必ず行わせたい処理
}

## 関数
- 定義
関数の定義は以下のように記述します。

アクセスコントロール 戻り値の型 関数名(引数の型 引数名) {処理}

例を見ていきましょう。下記のコードは1から10までを全て足した合計を表示する「処理」です。

    var sum = 0
    for (i in 1..10)  {
        sum += i
    }

    Log.d("kotlintest", sum.toString())
そして、これを関数としてまとめましょう。この場合は「total」という名前の関数になります。

    private fun total() {
        var sum = 0
        for (i in 1..10)  {
            sum += i
        }

        Log.d("kotlintest", sum.toString())
    }
関数を実行するには関数名を記述します。

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // total関数を呼び出す
        total()
    }

    private fun total() {
        var sum = 0
        for (i in 1..10)  {
            sum += i
        }

        Log.d("kotlintest", sum.toString())
    }
引数
引数は関数に渡す値です。何も渡さない場合は引数の型・引数名は省略します。引数は複数渡すことができます。先ほど作ったtotal関数は1から10まででしたが、10までではなく、選択できるようにしましょう。

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // 引数に100を指定してtotal関数を呼び出す
        total(100)
    }

    // lastという名前のInt型の引数を指定する
    private fun total(last: Int) {
        var sum = 0
        for (i in 1..last)  {
            sum += i
        }

        Log.d("kotlintest", sum.toString())
    }
引数に与えた値まで計算するようになりました。このように1からlastまでの処理を簡単にいくつも書けるようになります。 
total(int last) としてlastを内部で定数として使えるようにし、 total(100) として 100 を渡すことで1から100までの合計を表示しています。

それでは次は1をfirstにして、firstからlastまでの合計を計算できる関数にしましょう。

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // 引数に50と1000を指定してtotal関数を呼び出す
        total(50, 1000)
    }

    // firstとlast、2つの引数を指定する
    private fun total(first: Int, last: Int) {
        var sum = 0
        for (i in first..last)  {
            sum += i
        }

        Log.d("kotlintest", sum.toString())
    }
このようにして、 firstからlastの合計という関数を作成することができました。共通の処理を関数にまとめ、
変動する可能性がある値を引数として渡すことで、同じようなコードを何度も書くこと無く、処理内容を簡単に変更することができます。

- 呼び出し
関数を呼び出すときは呼び出し元.関数名(引数)と記述します。ただし、自分のクラスの関数を呼び出すときは関数名(引数)のように呼び出します。

- 関数の戻り値
ここまで関数の戻り値を指定していませんでしたが、Intとしてみましょう。

    private fun total(first: Int, last: Int): Int {
        var sum = 0
        for (i in first..last)  {
            sum += i
        }

        return sum
    }
Intなど関数の戻り値の型を指定すると、値を返す必要があります。return 返す値とすることで値を返すことができます。この返す値の型がIntとなります。つまり戻り値sumはintで宣言されておく必要があります。

- ラムダ式と無名関数
Kotlinにはラムダ式と無名関数という、ちょっとした処理を便利に書ける記法があります。

ラムダ式
ラムダ式とは、宣言されていないが式としてすぐに渡される関数です。以下の関数を例にしてみましょう。

fun sum(x: Int, y:Int): Int{
    return x + y
}
呼び出し側は以下のような記述になります。

val z = sum(100, 200)
これをラムダ式で記述すると以下のようになります。関数を宣言しなくても、式としてすぐに渡すことができる点がポイントです。->をアローといいます。ラムダ式は{}で囲い、アローの左側に引数、右側に関数本体を記述します。

val lmb = {x: Int, y: Int -> x + y}
val z = lmb(100, 200)
以下のように、ラムダ式の記述と呼び出しをまとめることもできます。

val z = {x: Int, y: Int -> x + y}(100, 200)
無名関数
無名関数もラムダ式と同様、式として渡すことができる関数です。上記の例を無名関数で記述すると以下のようになります。

val anf = fun(x: Int, y: Int): Int { return x + y}
val z = anf(100, 200)
無名関数もラムダ式と同様、記述と呼び出しをまとめることができます。

val z = fun(x: Int, y: Int): Int { return x + y}(100, 200)

## クラス

- クラスとは
クラスとは、変数と定数、関数、全てをひとまとめにして名前をつけたものです。つまり、1つのクラスの中には、変数と定数、関数が複数定義されます。
関数は処理に名前をつけてまとめたものですが、クラスは更に関数や変数などをひとまとめにします。

オブジェクト指向という言葉を聞いたことがあるかも知れません。クラスはオブジェクト指向の概念です。
多くのプログラミング言語はオブジェクト指向を採用していて、Kotlinもオブジェクト指向を採用したプログラミング言語です。
しかし、ここではオブジェクト指向について深くは触れません。オブジェクト指向の最大の特徴であり、実際的な概念であるクラスに関する解説を行います。


- クラスの宣言
クラスの宣言は、アクセスコントロール class クラス名 {...}で行います。アクセスコントロールは省略可能です。
省略した場合はpublicが指定されます。継承がある場合には、: 親クラスを付け加えます。

コンストラクタとはクラスからインスタンスが生成されるときに呼び出される初期化のためのメソッドです(インスタンスについては次のchapterで説明します)。コンストラクタはconstructor(引数)というメソッド名になります。

プロパティとはインスタンスが持つ属性の情報です。変数と似ていますが変数は単に値を保持しているだけなのに対し、プロパティは値の取得や設定に処理を記述できる点が異なります。

コンストラクタも他のメソッドと同様に引数を持つこともできます。引数とメンバ変数の名前が同じ場合はメンバ変数の前にthis.と付けて区別する必要があります。Dogクラスのコンストラクタを以下のように変更しましょう。

class Dog {
    // プロパティ
    var name: String
    var age: Int

    // 引数付きコンストラクタ
    constructor(name: String, age: Int) {
        this.name = name
        this.age = age
    }

    // メソッド
    fun say() {
        Log.d("kotlintest", this.name + "(" + this.age + "歳)" + "「ワンワン」")
    }
}
また、Dogクラスはsayメソッドを持っています。sayメソッドを呼び出すとDogの鳴き声がログに出力されます。

- クラスとインスタンス
実際に先ほどの宣言のあとにクラスを使ってみましょう。クラスを使うためには、クラスのインスタンスを作らなければいけません。

インスタンスとは、実体という意味です。さきほどのclassを使ったクラス宣言自体は実体ではありません。クラスの宣言は、設計図のようなものです。宣言だけでは、まだ実体は作られていないが設計図(Dogクラス)だけある状態です。

クラスのインスタンスを作って使ってみましょう。

MainActivity.kt

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val dog = Dog("ポチ", 3)      // 名前をポチ、年齢3歳で、Dogのインスタンスを作る

        dog.say()  // ポチが吠えます（ログ出力）
        Log.d("kotlintest", "犬の名前は" + dog.name + "です。")
        Log.d("kotlintest", "犬の年齢は" + dog.age + "歳です。")

        val dog2 = Dog("ハチ", 10)    // 名前をハチ、年齢10歳で、Dogインスタンスを作る
        dog2.say()  // ハチが吠えます（ログ出力）
        Log.d("kotlintest", "犬の名前は" + dog2.name + "です。")
        Log.d("kotlintest", "犬の年齢は" + dog2.age + "歳です。")
    }
}
これを実行すると下記のようなログが表示されます。

D/kotlintest: ポチ(3歳)「ワンワン」
D/kotlintest: 犬の名前はポチです。
D/kotlintest: 犬の年齢は3歳です。
D/kotlintest: ハチ(10歳)「ワンワン」
D/kotlintest: 犬の名前はハチです。
D/kotlintest: 犬の年齢は10歳です。
クラスを汎用的なDog(犬)という名前で作成し、具体的に実際に扱うDogはポチやハチのようにインスタンスとして生成されます。ポチやハチは、それぞれ別のインスタンスとして実体化されているため、それぞれの名前や年齢を持つことができます。このように、同じクラス（設計書）をもとに、別々のインスタンス（実体）を作成できるというのが、クラスとインスタンスの考え方ですので覚えておきましょう。

- Kotlinにおけるstaticメンバ(クラス変数やクラス関数)について
KotlinにはJava言語におけるstaticメンバ(クラス変数やクラス関数)がありません。代わりにパッケージレベルで定義するか、コンパニオンオブジェクトを使います。

パッケージレベルで定義する方法
クラスをまたいで共通で使いたい定数や関数は、パッケージレベル（クラスの外）で定義することができます。

package jp.techacademy.taro.kirameki.kotlinlog

// パッケージレベルに定義した関数
fun formatMyTag(): String {
    return "[" + MY_TAG + "]"
}

// パッケージレベルに定義した定数
const val MY_TAG = "kotlintest"
どのクラスからも単に定数名や関数名を記載するだけで呼び出すことができます。

Log.d(MY_TAG, this.name + "(" + this.age + "歳)" + "「ワンワン」")
コンパニオンオブジェクトを使用する方法
Java言語におけるstaticメンバに近い書き方ができるのがコンパニオンオブジェクトを使用する方法です。companion object {...}の中に変数や定数、関数を定義します。

class Dog(var name: String, var age: Int) {
    // コンパニオンオブジェクトを使用した方法
    companion object {
        val to_jp = "犬"

        fun introduce() {
            Log.d("kotlintest", "これは犬クラスです。")
        }
    }

    // メソッド
    fun say() {
        Log.d("kotlintest", this.name + "(" + this.age + "歳)" + "「ワンワン」")
    }
}
呼び出し側ではクラス名.メンバ名で呼び出すことができます。

Dog.introduce()
Log.d("kotlintest", Dog.to_jp + "のクラス変数です。")
CompanionObject

- クラスの継承
あるクラスを元にして新しいクラスを定義することもできます。継承元のクラスを親クラス、新たに作るクラスを子クラスと呼びます。
子クラスは、親クラスのメンバ変数やメンバメソッドを使うことが出来ます(アクセスレベルがprivateのものを除く)。

親クラスのメソッドを上書きして置き換えることをオーバーライドと呼びます。
オーバーライドするときは親クラスとメソッドにopenを付けてオーバライドできるようにします。
次に子クラスのメソッドでoverrideを付けて宣言を行います。
もし、オーバーライドしたメソッドの中で、親クラスのそのメソッドを呼びたい場合はsuper.メソッド名として呼び出します。

- パッケージ
パッケージとはたくさんあるKotlinクラスをまとめる仕組みです。

## 抽象クラス

抽象クラスは、未定義の状態で宣言のみを行った関数（抽象関数）を持つクラスのことを言います。

抽象クラスを定義するには、abstract修飾子を使用します。また、抽象関数にもabstractを使用します。abstractを使用すると明示しなくてもopenを使用した状態(オーバーライドできる状態)となります。今までと同様にKotlinクラスを作成します。

Animal.kt

package jp.techacademy.taro.kirameki.kotlinlog

abstract class Animal {
    // プロパティ
    var name: String
    var age: Int

    // 引数付きコンストラクタ
    constructor(name: String, age: Int) {
        this.name = name
        this.age = age
    }

    abstract fun say()
}
MainActivity.kt

package jp.techacademy.taro.kirameki.kotlinlog

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.util.Log

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val dog = Dog("ポチ", 3)      // 名前をポチ、年齢3歳で、Dogのインスタンスを作る

        dog.say()
        Log.d("kotlintest", "犬の名前は" + dog.name + "です。")
        Log.d("kotlintest", "犬の年齢は" + dog.age + "歳です。")

        val bigdog = BigDog("ヨーゼフ", 15)     // 名前をヨーゼフ、年齢15歳で、BigDogのインスタンスを作る

        bigdog.say()
        Log.d("kotlintest", "犬の名前は" + bigdog.name + "です。")
        Log.d("kotlintest", "犬の年齢は" + bigdog.age + "歳です。")
    }
}
抽象クラスAnimalを継承しましょう。またsayメソッドにはoverride修飾子を付け、Animalクラスの抽象メソッドをオーバライドしていることを明示しましょう。

package jp.techacademy.taro.kirameki.kotlinlog

import android.util.Log

open class Dog: Animal {
    // 引数付きコンストラクタ
    constructor(name: String, age: Int): super(name, age) {
    }

    // Animalクラスのメソッドをオーバーライド
    override fun say() {
        Log.d("kotlintest", this.name + "(" + this.age + "歳)" + "「ワンワン」")
    }
}
D/kotlintest: ポチ(3歳)「ワンワン」
D/kotlintest: 犬の名前はポチです。
D/kotlintest: 犬の年齢は3歳です。
D/kotlintest: ヨーゼフ(15歳)「ワンワン」
D/kotlintest: 大きな犬です。
D/kotlintest: 犬の名前はヨーゼフです。
D/kotlintest: 犬の年齢は15歳です。
結果は変わりませんが、Animalという抽象クラスを定義し、sayという抽象関数を定義することで、Dogだけでなく、例えばCatなどのクラスを作成する際にも共通部分をAnimalとしてまとめることができます。これによりクラスの種類が多くなっても見通しの良いコーディングを行うことができます。今回はAnimalにはnameとageとsayが共通項としてあると仮定してAnimal抽象クラスを作成しました。

また、抽象クラスは通常のクラスのようにインスタンスを作成できません。例えばAnimalとあっても何の動物かを具体的に定めないとインスタンスを生成できないイメージです。


## インタフェース
クラスの継承や抽象クラスに近い概念として、インタフェースというものがあります。
インタフェースとは変数及び、メソッドの宣言のみ行うことができ、メソッドの中身を実装することができないという点がクラスとは異なります。
また、抽象クラスはAnimalのように「何か」であったのに対して、インタフェースは「何ができるか」をメソッドとして宣言できるものです。

インタフェースはそのままではインスタンスを生成することができず、クラスがインタフェースを実装して、そのクラスのインスタンスを生成することでインタフェースで宣言しているメソッドを使うことができます。

interfaceのあとにインタフェース名を記述します。メソッドの中身は記述しません。

では、クラスと同様に[New] => [Kotlin File/Class]をクリックし、プルダウンの選択肢にて[Interface]を選択して作成しましょう。

## Stringクラス
良く使用するStringクラスについて少し解説をします。Stringクラスは文字列を保持するクラスです。

- 作成方法
クラスの作成方法は、定数や変数の定義と変わりません。

val str1 = "Hello"
val str2 = "World"

- よく使うメソッド
lengthプロパティ
lengthプロパティを利用することで，文字列の長さを取得できます。

val str3 = "Hello"
val length = str3.length
Log.d("kotlintest", length.toString())
toIntメソッドなど
本レッスンでログの出力に何度も使ったtoStringと同様に、StringクラスにはtoIntなどの他の型に変換するメソッドが用意されています。もちろん、文字列が数値として不正な場合には例外が発生します。

val str4 = "100"
val num4 = str4.toInt()
Log.d("kotlintest", num4.toString())
文字列の比較
文字列の比較はequals関数を使います。

文字列オブジェクト1.equals(比較対象の文字列オブジェクト2)

実際に試してみましょう。

val str1 = "Hello"
val str2 = "World"
val str3 = "Hello"

if (str1.equals(str2)) {
    Log.d("kotlintest", "str1とstr2は一緒です")
} else {
    Log.d("kotlintest", "str1とstr2は異なります")
}

if (str1.equals(str3)) {
    Log.d("kotlintest", "str1とstr3は一緒です")
} else {
    Log.d("kotlintest", "str1とstr3は異なります")
}
ログに以下のように出力されるはずです。

str1とstr2は異なります
str1とstr3は一緒です
文字列テンプレート
${...}を使うことで、文字列の中に変数や式を埋め込むことができます。

val i = 100
val str = i.toString() + " * 100 = ${i * 100}"
Log.d("kotlinlog", str)
ログには以下のように出力されます。

100 * 100 = 10000

## ArrayListクラス
ArrayListクラスとは複数のオブジェクトをまとめて保持することができるクラスです。Lesson6でタスク管理アプリを作る時はArrayListクラスを使って、タスクというオブジェクトを複数保持するようにします。

- ジェネリクス
ジェネリクスとは汎用的なクラスやメソッドを特定の型に対応づける機能のことです。<クラスや型>のように記述します。
ArrayListクラスとは複数のオブジェクトをまとめて保持することができるクラスです。
ある1つのクラス専用のものではなく汎用的なものです。このような場合にジェネリクスを使います。

- 作成方法
ArrayListクラスの生成は以下のようにします。

val 変数名 = arrayListOf<型>()
宣言と同時に要素を指定する場合、型推論が行われるため<型>は省略可能です。

val 変数名 = arrayListOf(要素, 要素, ...)
Lesson4のタスク管理アプリでは以下のようにTaskクラスを指定して生成します。

val taskArrayList = arrayListOf<Task>()

- オブジェクトの追加、削除
オブジェクトを追加するにはaddメソッドを追加います。

val taskArrayList = arrayListOf<Task>()
val task = Task()
taskArrayList.add(task)
オブジェクトを削除するにはremoveメソッドを使います。

val taskArrayList = arrayListOf<Task>()
val task = Task()
taskArrayList.add(task)
taskArrayList.remove(task)
removeAtメソッドを使うと、インデックス（位置）を指定して削除することができます。

taskArrayList.removeAt(0)
全てのオブジェクトを削除したい時はclearメソッドを使います。

val taskArrayList = arrayListOf<Task>()
val task = Task()
taskArrayList.add(task)
taskArrayList.clear()


## null
nullとは変数に値が入っていない状態を表します。nullをそのまま扱ってしまうとNullPointerExceptionというエラーが発生してアプリがクラッシュしてしまいます。アプリがクラッシュした際にログにNullPointerExceptionという文字列を見つけたら、プログラムの中でnullに対して関数の呼び出しをしていないか確認してみましょう。

例えば、Stringクラスを宣言だけして初期値を与えなければ、そこにはnullが入っています。

val str: String
// nullが入っている
Null Safety
chapter5でも触れましたが、Kotlinではnullを許可する型を、型に?を付けることで明示的に分けています。nullを許可する型のことをnull許容型と呼びます。上記の例の場合、後続の処理でstrを使用しようとすると、エラーとなり実行できません。

var str: String
Log.d("kotlinlog", str) // 初期化されていないのでエラーになる
また、String?型を使った場合、nullチェックを使用せずに非null許容型のように扱おうとすると、こちらもエラーとなり実行できません。

var str: String? = null
Log.d("kotlinlog", str.length.toString()) // strがnullの可能性があるのでエラーになる
このように言語レベルでNullPointerExceptionの発生を予防する仕組みをNull Safetyといいます。実行してから発生したエラーの原因を調査するより、ソースコードを書いている時にエラーを検出してくれる方が効率的なのは明白です。基本的にnull許容型は使用せず、必要な場合にはnullチェックをして処理を行うようにしましょう。

null許容型に対する演算子
null許容型でnullかどうかをチェックして処理を行うにはいくつかの方法があります。

nullを条件でチェックする
条件でnullであることを明示的にチェックする方法です。この場合、if文の中ではstrはnullでないことが保証されるため、lengthなどを利用することができます。

val str: String? = "kotlin"
// Log.d("kotlinlog", str.length.toString()) // nullの可能性があるためエラーになる

if (str != null){
    // nullでない場合のみ処理が行われるのでエラーにならない
    Log.d("kotlinlog", str.length.toString())
}
セーフコール演算子
?.演算子を使用する方法です。strがnullではない場合はstr.lengthの結果が返り、nullの場合はnullが返ります。

var str: String? = null
if(str?.length == null){
    Log.d("kotlinlog", "str?.lengthの結果はnull")
} else {
    Log.d("kotlinlog", "str?.lengthの結果は" + str.length)
}
エルビス演算子
?:演算子を使用する方法です。左辺str?.lengthがnullの場合、右辺-1を返します。

val str: String? = "kotlin"
val l = str?.length ?: -1
これは、以下のif文を利用した場合と同じ意味になります。

val l = if (str != null) str.length else -1
not-nullアサーション演算子
!!演算子を使用する方法です。nullでないことが明らかな場合、強制的に非null型として処理を行います。

var str: String? = "kotlin"
Log.d("kotlinlog", "str.lengthの結果は" + str!!.length)
ただし、strがnullの場合はNullPointerExceptionが発生します。!!演算子はnullでないことが明らかな場合のみに限って使用するようにしましょう。

遅延初期化プロパティ
kotlinでは基本的にプロパティの宣言と同時に初期化が必要です。ただしlateinitキーワードを使用することで、初期化を後で行うことができます。共通で使うプロパティで、初期化の処理を後で行う場合に利用します。初期化をしないままプロパティを使用すると、アプリが異常終了しますので注意しましょう。なお、lateinitはIntやDoubleなどの基本型では使用できません。

class LittleDog {
    lateinit var nickname: String

    fun setup() {
        nickname = "pappy"
    }
}
補足
上記のnullを条件でチェックした際、if文の中ではString?型の定数strはnullでないことが保証されているので、String型に自動的に変換されています。これを行っているのがkotlinのSmart Castという仕組みです。

val str: String? = "kotlin"
if (str != null){
  // スマートキャスト機能により非null型として扱われる
    Log.d("kotlinlog", str.length.toString())
}
上記はクラスを確認する演算子isを使用して以下のようにも書けます。strがString型であることが条件で確認できているので、if文の中ではString型に自動変換されて扱われる、という意味になります。

var str: String? = "kotlin"
if (str is String){
    Log.d("kotlinlog", str.length.toString())
}
発展
Kotlinの標準ライブラリにはスコープ関数という、任意の型を引数として関数ブロックを実行できる記法があります。スコープ関数には、 apply、also
run、letなどの種類があります。

この中でも let は、セーフコール演算子?.と組み合わせて、オブジェクトがnullではない場合に関数ブロックを実行する目的で良く用いられます。

val items = arrayListOf<String?>("こんにちは！", null, "こんばんわ", null)

