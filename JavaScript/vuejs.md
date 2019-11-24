Vue.js
tutorial

Vue.js 自体の構文
まず、Vue.js 自体の基本的な構文を整理します。

Vue インスタンス
Vue インスタンスの書き方は次のような感じです。

app.js
new Vue({
    el: "#app",
    data: {
        name: "Kei",
        age: "30",
        counter: 0
    },
    methods: {
        increase: function() {
        this.counter += 1;
    }
  }
})
この app.js を Vue.js と共にインポートします。

html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="app.js"></script>
{{ }}
{{ }} でVueインスタンスの要素を呼び出すことができます。

html
<p>{{ name }}</p>
v-bind
HTML要素をVue.jsで動的に指定したい場合は、v-bind を使います。

html
<a v-bind:href="link">Google</a>
v-once
v-once をHTMLタグに含めることで1度描画された内容を変更不可にできます。

html
<h1 v-once>{{ title }}</h1>
v-html
v-html はHTMLタグのまま出力するときに用います。

html
<p v-html="finishedLink"></p>
v-on
v-on でイベントリスニングします。

html
<button v-on:click="increase(2, $event)">Click me</button>
app.js
new Vue({
  methods: {
    increase: function(step, event) {
      this.counter += step;
    }
  }
})
v-on:click=“counter++” のように、if や loop を含まないJSの場合はインラインに直書きできます。

また、v-on:keyup.enter.space のようにつなげられます。

v-model
v-model を使えば、Vueインスタンスの data をHTML要素にバインドできます。変更された場合は、その値を参照しているDOM全てに反映されます。

html
<input type="text" v-model="name">
<p>{{ name }}</p>
<!-- 入力値によって動的に name が変わる -->
app.js
new Vue ({
  el: "#app",
  data: {
    name: "Kei"
  }
})
@
v-on: の省略記法で、@click="link" のように書けます。

また、v-bind の代わりに : も使えます。

:class
:class="{YOUR_CLASS: boolean}" で動的にCSSを適用できます。

html
<div 
    class="demo" 
    @click="attachedRed = !attachedRed"
    :class="{red: attachedRed}"></div>
:class を複数定義する場合は array で書きます。

:style
:class と同様に、:style で動的にスタイルを適用できます。

html
<div :style="{backgroundColor: color}"></div>
スタイルのプロパティ名はキャメルケース（もしくは""）で書きます。

computed
Vueインスタンスの computed オブジェクトは、 methods に似ていますが、data プロパティのように処理結果を保持させる時に使います。methodsと違い、呼び出す時に () は不要です。

js.app.js
new Vue ({
  computed: {
    divClassses: function() {
      return {
        red:  this.attachedRed,
        blue: !this.attachedRed 
      }
    }
  }
})
watch
Vueインスタンスの watch オブジェクトは、特定のプロパティの変化をトリガーに処理を走らせる時に使います。data だけでなく computed のプロパティも watch できます。

js.app.js
new Vue ({
  watch: {
    // counter を watch する
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000); 
    })
  }
})
v-if, v-else
v-if が false の時は、そのHTML要素とその子要素をDOMから取り除きます。
v-else は直前の v-if が false の時に、そのHTML要素とその子要素をDOMに表示させます。

html
<p v-if="boolean">Hello!</p>
<p v-else>Hello again!</p>
v-else-if という書き方もあります：
https://vuejs.org/v2/guide/conditional.html#v-else-if

v-show
v-show は v-if と同じ振る舞いをしますが、false の場合 display: none; となって、HTMLコード自体は残ります。

v-for
v-for で配列などプロパティに対するイテレーションを書きます。

html
<!-- ingredients: ["meat", "fruit", "cookies"] -->
<ul>
　　<li v-for="ingredient in ingredients">{{ ingredient }}</li>
</ul>
index を取りたい時は次のように第2引数を定義してあげます。

html
<li v-for="(ingredient, i) in ingredients">{{ ingredient }}</li>
上は配列の例ですが、Objectにも同様に v-for を使えます。Objetctの場合、第2引数が key, 第3引数が index になります。

html
<li v-for="person in persons">
  <div v-for="(value, key, index) in person">
    {{ key }}: {{ value }} ({{ index }})
  </div>
</li>
また、Rubyでいう 10.times {} は v-for="n in 10" と書きます。

v-for や v-if の中で変更するデータを Vue.js に認識させたい場合は、意図した挙動になるように v-key=“ユニークな値” を付けます。

html
<li v-for="ingredient in ingredients" :key="ingredient"></li>
ライフサイクル
Vueインスタンスのライフサイクルは次の通りです。それぞれのタイミングでフックして処理を書くことができます。

beforeCreate
Created
beforeMount
mounted
(DOM描画)
(DOMの変更を検知)
beforeUpdate
updated
( this.$destroy(); )
beforeDestroy
Destroyed
Vue.js でのアプリ開発
上記で見てきたように、.js に書いたVueインスタンスでもHTMLで使えますが、実際のアプリ開発では .vue の形式でコードを書いていきます。

そして最終的には、複数の .vue ファイル等から単一ファイルを生成し、本番環境にデプロイします。

Vue CLI
Vue CLI は Vue.js でのアプリ開発で利用するテンプレートを提供してくれるツールです。

インストール
以下のコマンドでインストールできます。

$ sudo npm install -g vue-cli
webpack-simple というテンプレートで新規アプリを作る場合は、次のコマンドを実行します。

$ vue init webpack-simple [YOUR_APP_NAME]
開発環境でアプリを立ち上げます。

$ npm run dev
エラー 1
Error: Cannot find module 'webpack-cli/bin/config-yargs'
このエラーがでたら、次のコマンドを実行してみてください：
https://github.com/rails/webpacker/issues/1295

$ yarn add webpack-cli -D
$ npm run dev
エラー 2
TypeError: Cannot destructure property `compile` of 'undefined' or 'null'.
このエラーがでたら、次のコマンドを実行してみてください：
https://github.com/vuejs/vue-cli/issues/714

$ yarn remove webpack-dev-server
$ yarn add webpack-dev-server@2.9.1 --dev
$ yarn run dev
webpack-simple テンプレート
webpack-simple で作られるテンプレートは次の通りです。

project_name
├── src
│   ├── assets
│   ├── App.vue
│   └── main.js
├── .babelrc
├── .gitignore
├── index.html
├── package.json
└── webpack.config.js
src（メインでいじってくフォルダ。Vue.jsのコードを書いていく。）
App.vue（トップのVueコンポーネント）
main.js（App.vueをコンパイルして、HTML Viewに描画する。）
.babelrc（babel のコンフィグファイル。EC6 などを JSコードにコンパイルしてくれる。）
index.html（View テンプレート。ここに src で書いたコードが webpack によりビルドされて描画される。）
package.json（ソースの依存関係を記載する。）
ビルド
以下のコマンドで、本番で利用できる dist ファイルが生成されます。

$ npm run build
デプロイするのは index.html と build.js ファイルだけで、build.js は dist フォルダに格納します。

Vueコンポーネント
Vueコンポーネントでは、template script style を単一ファイル内で書きます。

例えば、次のような感じです。

scr/Home.vue
<template>
    <div>
        <p>Server Status: {{ status }}</p>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                status: 'Critical'
            }
        },
        methods: {
            changeStatus() {
                this.status = 'Normal';
            }
        }
    }
</script>

<style>
</style>
通常のVueインスタンスと異なり、Vueコンポーネント内の data は data(){} で（関数的に）定義しないといけません。Vueコンポーネントは、Vueインスタンスの拡張なので、data をオブジェクト型で定義すると、元の data と干渉してしまい、意図してるように動かなくなってしまうからです。

また <template> 内にキーエレメントがないと（div など1つのタグでラップしていないと）エラーが出ます。

グローバルにインポート
この Home.vue を main.js に読み込ませる場合は次のように書きます。

src/main.js
import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('app-server-status', Home)

new Vue({
    el: '#app',
    render: h => h(App)
})
これで <template> 内の <app-server-status></app-server-status> に Homeコンポーネントを描画できるようになります。

ローカルにインポート
.vue ファイル内でローカルにインポートする場合は、次のように書きます。

<template>
  <div>
    <app-server-status></app-server-status>
  </div>
</template>

<script>
    import  Home from './Home'
    export default {
        components: {
            'app-server-status': Home // テンプレート名を上書き
        }
    }
</script>
コンポーネントの定義にキーだけ書いた場合は、次のように認識されます。

components: {
    Servers // Servers: Servers と同義
}
コンポーネントの設計
Vueコンポーネントの保存場所は、components ディレクトリを作って、そこに Shared や ServerStatus などのサブディレクトリを作って格納していく設計が一般的です。

project_name
├── src
│   ├── assets
│   ├── components
│   │   ├── Shared
│   │   └── ServerStatus 
│   ├── App.vue
│   └── main.js
ローカルスタイル
style scoped と書くことで、スタイルをローカルに適用できます。

<style scoped>
    div { 
        border: 1px solid red;
    } 
</style>
filters
filters はVueインスタンスの出力結果を調整するのに使います。| で区切ることで呼び出せます。

html
<p>{{ text | toUppercase | toLowercase }}</p> 
<!-- チェーンでつなげる -->
app.js
new Vue ({
    filters: {
        toUppercase(value) { // いつも value を引数にとる
            value.toUpperCase();
        } 
    }
})
グローバルに定義することもできます。

Vue.filter("name", function(value){
    // 処理
});
不必要に filters が呼ばれないように computed の中で定義する方が良い実務例のようです。

app.js
computed: {
    filteredFruits() {
        return this.fruits.filter((element) => {
            return element.match(this.filterText);
        });
    }
} 
mixins
mixins は重複するコードスニペットをまとめるのに使います。

まず hogeMixin.js ファイルを新規作成し、export default { // 処理 } を書きます。

それをインポートし、mixins: [] とすれば、どのコンポーネントでも hogeMixin.js で定義した処理を使うことができます。

import { hogeMixin } from './hogeMixin'; 

export default {
    mixins: [hogeMixin]
}
インポート先のコンポーネントに重複する名前のメソッドがあれば、それぞれが呼び出され、Mixin のメソッドから先に実行されます。

また、グローバルに定義することもできます。

Vue.mixin({
    created() {
        // 処理    
    }
});
ただこれは、全ての Vue インスタンスで呼び出されるので、利用シーンはすごく限定されます。

transition
<transition> で囲った要素にアニメーションを適用できます。

<template>
  <transition name="hoge"></transition>
</template>
アニメーションを適用する要素は、<template> 内に書いておかないといけないので、例えば、JSで append した要素などには適用されません。

デフォルトのクラス名
<transition name="hoge"> の場合、デフォルトのクラス名は次の通りです。

<style>
  .hoge-enter {}        /* アニメーション開始時のスタイル */
  .hoge-enter-active {} /* アニメーション進行中のスタイル */
  .hoge-leave {}        /* アニメーション終了時のスタイル */
  .hoge-leave-active {} /* アニメーション終了中のスタイル */
</style>
デフォルト以外のクラス名
デフォルト以外のクラス名を使いたい場合は、<transation name=""> を指定せずに、次のように直書きします。

<transition
    enter-active-class="animated shake"
    leave-active-class></transation>
typeで優先を明示
基本的にいい感じにエフェクトの時間を適用してくれますが、2つ以上の時間が存在する場合は、<transition type=""> で優先するプロパティを明示してあげます。

On-loadでエフェクト
また、On-load でエフェクトを適用させたい時は、<transition appear> と書きます。

動的な定義
name type を動的に定義することも可能です。

<transition :name="hoge" :type="hogehoge">
v-if・v-show を使う時
<transition> 内で v-if v-show をつかって、2つ以上のアニメーションを適用させる時は、それぞれの div に type を指定し、Vueがちゃんと認識できるようにしてあげます。また、 <transtion mode="in-out"> or <transtion mode="out-in"> と書くことで、２つのアニメーションのつなぎがスムーズにいくようにします。

JSフック
transition で使える JSフックは次の通りです。

before-enter
enter（done 必要）
after-enter
after-enter-cancelled
before-leave
leave（done 必要）
after-leave
after-leave-cancelled
これらのフックを使って JSのアニメーションを適用できます。

<template>
  <transition @enter="enter"></transition>
</template>

<script>
    export default {
        methods: {
            enter(el, done) {
                done(); // Vueにアニメーションの終了を知らせる（enter, leave のみ）
        }
    }
</script>
props
props は別コンポーネントからの data を受け取るために使います。

親 → 子
親から子への受け渡しはシンプルです。

親コンポーネントのHTMLタグにデータを v-bind: して子に渡します。

親コンポーネント
<template>
    <div>
        <app-user-deital :name="name"></app-user-detail>
    </div>
</template>

<script>
    import UserDetail from "./UserDetail.vue"
    export default {
        data: function(){
            return {
                name: "Kei" 
            }
        }
    } 
</script>
子コンポーネントでは props でデータを受けとります。

子コンポーネント
<template>
    <div>
        <p>{{ name }}</p>
    </div>
</template>

<script>
    export default {
        props: ["name"]
    } 
</script>
受け取った props は、子コンポーネント内で data オブジェクトと同様に操作できます。

子 → 親
子から親への受け渡しの主なやり方は、次の2つです。

1. $emit
変更した props を $emit で親に伝達します。

$emit の第1引数には「イベント名」、第2引数には「イベントデータ」を渡します。

子コンポーネント
<template>
    <div>
        <p>{{ name }}</p>
    </div>
</template>

<script>
    export default {
        props: ["name’",
        methods: {
            resetName() {
                this.myName = "Kei"
                this.$emit("nameWasReset", this.myName)
            }
        } 
    } 
</script>
親では $emit されるイベントを @ でリッスンし、それに応じた処理を書きます。

親コンポーネント
<template>
    <div>
        <app-user-deital :name="name" @nameWasReset="name = $event"></app-user-detail>
    </div>
</template>

<script>
    import UserDetail from "./UserDetail.vue"
    export default {
        data: function(){
            return {
                name: "Kei" 
            }
        }
    } 
</script>
2. コールバック
props で親の関数を子に渡すこともできます。

親コンポーネント
<template>
    <div>
        <app-user-deital 
            :name="name" 
            :resetFn="resetName()"></app-user-detail>
    </div>
</template>

<script>
    import UserDetail from "./UserDetail.vue"
    export default {
        data: function(){
            return {
                name: "Kei" 
            }
        },
        methods: {
            resetName() {
                this.myName = "Kei";
            }
        } 
    }
</script>
受け取った関数（resetFn）を実行することで、親の data を更新します。

子コンポーネント
<template>
    <div>
        <p>{{ name }}</p>
    </div>
</template>

<script>
    import UserDetail from "./UserDetail.vue"
    export default {
        props: {
            resetFn: Function
        }
    } 
</script>
子 → 子
子・子間の受け渡しは複雑になるので、次のような eventBus という設計を用います。

main.js
export const eventBus = new Vue();

new Vue({
    el: "#app",
    render: h => h(App)
}) 
渡す子
<script>
    import { eventBus } from "../main";
    export default {
        methods: {
            editAge() {
                this.age = 30;
                eventBus.$emit("ageWasEditted", this.userAge);
            } 
        }
    } 
</script>
受ける子
<script>
    import { eventBus } from "../main";
    export default {
        created() {
            eventBus.$on("ageWasEditted", (data) => {
            // 処理 
        })    
    } 
</script>
$emit のロジックは、eventBus の中に書くこともできます。

また、eventBus でも複雑になる場合は、Vuex （後述）を使ってステート管理するのが一般的です。

slot
slot は子コンポーネント内で使いたいHTMLコードを、親から子に受け渡すために使います。

親の子HTMLエレメント内で slot を渡します。

親コンポーネント
<template>
    <div>
        <app-child>
            <h2 slot="title">{{ title }}</h2>
            <p slot="content">{{ content }}</p>
        </app-child>
    </div>
</template>
子では <slot name="NAME"></slot> で受け取ります。

子コンポーネント
<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
Vue 2.6.0より v-slot が推奨（追記: 2019-05-18）
コメントでご指摘いただいた通り、Vue 2.6.0 から v-slot が導入され、上の slot　および slot-scope は非推奨になっています。（非推奨の構文 スロット - Vue.js）

さらなる詳細についてはこちら。

動的なコンポーネント
<component> タグの :is= で動的なコンポーネントを描画することができます。

<template>
    <div>
        <component :is="selectedComponent"></component>
    </div>
</template>
<sript>
    // selectedComponent = "コンポーネント名"
</script>
<component> は切り替えられる毎に destroy され、データはリセットされます。

destroy したくない時は、<keep-alive> タグで <component> をラップします。この場合、activated と deactivated の2つのライフサイクルで動きます。

よく使われるライブラリ
Vue CLI のテンプレートでWebアプリを作る場合によく使われるライブラリは次の通りです。

Axios
Axios はHTTPリクエスト用のJavaScriptライブラリです。

これを使ってCRUD処理を書いていきます。

Vue.js用の Vue Resource というライブラリ（昔は推奨されていた）もありますが、JavaScriptで使える Axios の方が汎用性が高いです。

セットアップ
次のコマンドでインストールします。

$ npm install --save axios 
グローバルな設定としてインポートします。

main.js
import axios from "axios"; 

axios.defaults.baseURL = "base_url"; 
axios.defaults.headers.common["Authorization"] = "hogehoge"
axios.defaults.headers.get["Accepts"] = "application/json"
GETリクエスト
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
POSTリクエスト
axios.post('/users', data)
     .then(res => console.log(res))
     .catch(error => console.log(error))
interceptors
リクエスト・レスポンス前の処理実行には、interceptors を使います。

axios.interceptors.request.use(config => {
    console.log(config);
    return config;
})

axios.interceptors.response.use(res => {
    console.log(res);
    return res;
})
Vue Router
Vue.jsでのルーティングでは Vue Router を使います。

セットアップ
次のコマンドでインストールします。

$ npm install --save vue-router
ルーティングは次のように書きます。

routes.js
import User from "./components/user/User.vue";

export const routes = [
    { path: "", component: Home },         // Root path
    { path: "/user/:id", component: User } // :id は動的なURL
] 
このルーティングをグローバルな設定としてインポートします。

main.js
import VueRouter from "vue-router";
import { routes } from "./routes"; 

Vue.use(VueRouter);

const router = new VueRouter({
    routes, // Same as "routes: routes”
    mode: "history" // No hash tag style in URL
});

new Vue({
    el: "#app",
    router // Same as "router: router"
    render: h => h(App)
})
router-view
URLごとのコンポーネントを描画する場所を <router-view> で指定します。

App.vue
<template>
  <div>
    <router-view></router-view> // 描画の場所を指定
  </div>
</template>
router-link
リンクには <router-link> を使います。リンクと同じページにいるときは、クリックしても再描画されません。

<router-link to="/" tag="li" active-class="active" exact>Home</router-link>
<!-- "exact" をつけないと、"/" で開始するURL全てがアクティブになる。 -->
<router-link to="/user" tag="li" active-class="active">User</router-link>
動的なパスを指定する場合は {{}} を使って書きます。

<router-link
    tag="button"
    :to="{ name: 'UserEdit', params: { id: $route.params.id }, query: { locale: 'en' } }"
    class="btn btn-primary">Edit</router-link>
$route.params
$route.params でVueインスタンスからURLパラメータにアクセスできます。

<script>
export default {
    data() {
        return {
            id: this.$route.params.id 
        }
    }
}
</script>
children (routes.js)
ルーティングをネストする場合は、children を使って次のように書きます。

routes.js
import User from "./components/user/User.vue";

export const routes = [
    { path: "", component: Home },
    { path: "/user/", component: User, children: [
        { path: "", component: UserStart },
        { path: ":id", component: UserDetail },
        { path: ":id/edit", component: UserEdit }
    ]}
]
beforeEnter
beforeEnter を使えば、router-view を描画する直前に処理を走らせられます。

書ける場所は次の３つです。

1. グローバル
main.js
router.beforeEach((to, from, next) => {
    // グローバルに適用される
    next();
});
2. ローカル
routes.js
import User from "./components/user/User.vue";

export const routes = [
    { path: "", component: Home },
    { path: "/user/", component: User, children: [
        { path: "", component: UserStart },
        { 
            path: ":id", component: UserDetail, beforeEnter: (to, from, next) => {
                // ローカルに適用される
                next();
            } 
        },
        { path: ":id/edit", component: UserEdit }
    ]}
]
3. コンポーネント
beforeRouteEnter(to, from, next) {
    next():
}
beforeRouteLeave
同様に beforeRouteLeave でURLの離脱前に処理を走らせられます。

Vuex
前述の通り、Event Bus やコールバックを使えば、コンポーネント間の props 更新を実現できますが、大規模なアプリになると管理が煩雑になります。

そのような場合は Vuex というステートマネジメントフレームワークを使うのが一般的です。

設計
設計は Redux と似ているらしく、全体像は次の通りです。


vuex_structure.png

Udemy Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex) より引用

store にステートを保管し、各コンポーネントは getters でその値にアクセスします。値を変更する時は mutations から store のステートを更新します。mutations は同期処理になってしまうので、非同期処理 を実行する場合は間に actions をかませます。

セットアップ
次のコマンドでインストールします。

$ npm install --save vuex
store/store.js を作成します。

store/store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    }
});
main.js に次のコードを追加します。

main.js
import { store } from "./store/store";

new Vue({
    store
})
これでコンポーネントから $store.state で必要なデータにアクセスできます。

コンポーネント
this.$store.state.counter // これでアクセスできる。更新をemitする必要なし。
getters
state の要素に対するメソッドを getters で定義すると、各コンポーネントから使うことができます。

store/store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        }
    }
});
コンポーネントでの呼び出しには $store.getters を使います。

コンポーネント
export default {
    computed: {
        count() {
            return this.$store.getters.doubleCounter
        }
    }
}
mapGetters
getters が増えると、各コンポーネントでの呼び出しが冗長になってきます。その場合 mapGetters を使えば、より効率的に書くことができます。

<template>
  <div>{{ doubleCounter }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters([
            "doubleCounter"
        ]),
        ownMethod();
    }
}
</script>
なお、... を使うには babel-preset-stage-2 のセットアップが必要です。

babel-preset-stage-2
次のコマンドでインストールします。

$ npm install --save-dev babel-preset-stage-2
作成される .babelrc を次のように記載します。

.babelrc
{
    "presets": [
        ["ec2015", {"modules": false}],
        ["stage-2"]
    ]
}
mutations
state の値の変更には mutations を使います。使い方は getters と同じです。

store/store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        }
    },
    mutations: {
        decrement: state => {
            state.counter--;
        }
    }
});
コンポーネントでの呼び出しには $store.commit を使います。

コンポーネント
export default {
    methods: {
        decrement() {
            this.$store.commit("decrement");
        }
    }
}
mutations は非同期処理に対応していないので、必ず同期させる必要があります。

mapMutations
mapGetters と同様に、mapMutations として効率的に記載できます。

actions
非同期処理を実現するために、コンポーネントと mutations の間に actions をかませます。

store/store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        }
    },
    mutations: {
        decrement: state => {
            state.counter--;
        }
    },
    actions: {
        decrement: context => {
            context.commit("decrement");
        },
        decrement: ({commit}) => {
            commit("decrement");
        }
        // 上記、２つのアクションは同義
    }
});
コンポーネントでの呼び出しには $store.dispatch を使います。

コンポーネント
export default {
    methods: {
        decrement() {
            this.$store.dispatch("decrement");
        }
    }
}
