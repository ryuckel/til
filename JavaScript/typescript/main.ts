// class User {}

// Hello World
// console.log('hello world');

//tsc .tsファイル名でコンパイルする

// 変数の静的型付け <> 動的型付け
// JavaScript

// var x = 10;
// x = "hello";

// TypeScript
// var x: number = 10;
// x = 'hello';

// 型

/*
number
string
boolean
any
*/

// var i: number;
// var i: number = 10;
// var i = 10; // i: number

// var x; // var x: any
// x = 10;
// x = 'hello';

// var results: number[];
// results = [10, 5, 3];

// ================================

// 列挙型
// Signal
//enum で型定義をする
/*
enum Signal {
    Red = 0,
    Blue = 1,
    Yellow = 2
}
*/

// enum Signal {
// 	Red, // 0
// 	Blue = 3,
// 	Yellow // 4
// }

// enum Signal {
// 	Green = 5
// }

// var result: Signal;

// if (result === Signal.Yellow) { ... }
// if (result === Signal['Yellow']) { ... }

// console.log(Signal[2]); // Yellow
// console.log(Signal[3]); // Blue

// console.log(Signal.Green); // 5

// ================================
// 関数
/*
関数の返り値がない場合はvoidを使用する

function add(a: number, b: number): number {
    return a + b;
}

function add(a: number, b?: number): number {
    if (b) {
        return a + b;
    } else {
        return a + a;
    }
}

*/

// function add(a: number, b: number = 10): number {
// 	return a + b;
// }

// console.log(add(5, 3));
// console.log(add(5, "hello"));

// console.log(add(5, 3));
// console.log(add(5));

/*
var add = function(a: number, b: number): number {
    return a + b;
}

var add = (a: number, b: number): number => {
    return a + b;
}

*/

// var add = (a: number, b: number): number => a + b;

// console.log(add(5, 3));

// クラス
// public, protected, private

// class User {
// 	/*
//   public name: string;
//   constructor(name: string) {
//       this.name = name;
//   }
//   */
// 	constructor(public name: string) {}
// 	public sayHi(): void {
// 		console.log('hi! i am ' + this.name);
// 	}
// }

// var tom = new User('Tom');
// console.log(tom.name);
// tom.sayHi();

// ================================================
// クラス
// public, protected, private
//getter setter
// class User {
// 	constructor(private _name: string) {}
// 	public sayHi(): void {
// 		console.log('hi! i am ' + this._name);
// 	}
// 	get name() {
// 		return this._name;
// 	}
// 	set name(newValue: string) {
// 		this._name = newValue;
// 	}
// }

// var tom = new User('Tom');
// console.log(tom.name);
// tom.name = 'TOM';
// console.log(tom.name);
// tom.sayHi();

// ================================

// クラスの継承
// public, protected, private

// class User {
// 	constructor(protected _name: string) {}
// 	public sayHi(): void {
// 		console.log('hi! i am ' + this._name);
// 	}
// }

// class AdminUser extends User {
// 	private _age: number;
// 	constructor(_name: string, _age: number) {
// 		super(_name);
// 		this._age = _age;
// 	}
// 	public sayHi(): void {
// 		console.log('my age: ' + this._age);
// 		console.log('my name: ' + this._name);
// 		super.sayHi();
// 	}
// }

// var bob = new AdminUser('Bob', 23);
// bob.sayHi();

// クラス
// 静的メンバ

// class User {
// 	name: string;
// 	constructor(name: string) {
// 		this.name = name;
// 		User.count++;
// 	}
// 	sayHi(): void {
// 		console.log('hi! i am ' + this.name);
// 	}
// 	static count: number = 0;
// 	static showDescription(): void {
// 		console.log('this class is about users');
// 	}
// }

// var tom = new User('Tom');
// var bob = new User('Bob');
// var david = new User('David');
// var kebin = new User('Kebin');
// console.log(User.count);
// User.showDescription();

// Interface
// 構造的部分型

// interface Result {
// 	a: number;
// 	b: number;
// }

// function getTotal(result: Result) {
// 	return result.a + result.b;
// }

// var result = {
// 	a: 32,
// 	b: 58,
// 	c: 'hello'
// };

// console.log(getTotal(result));

//==========================================
// Interfaceの継承

// interface SpringResult {
// 	a: number;
// }

// interface FallResult {
// 	b: number;
// }

// interface FinalResult extends SpringResult, FallResult {
// 	final?: number;
// }

// // function getTotal(result: FinalResult) {
// //     return result.a + result.b + result.final;
// // }

// function getTotal(result: FinalResult) {
// 	if (result.final) {
// 		return result.a + result.b + result.final;
// 	} else {
// 		return result.a + result.b;
// 	}
// }

// // var result = {
// //     a: 32,
// //     b: 58,
// //     final: 82
// // };

// var result = {
// 	a: 32,
// 	b: 58
// };

// console.log(getTotal(result));

//==========================================
// Interface -> Class

// interface GameUser {
// 	score: number;
// 	showScore(): void;
// }

// class User implements GameUser {
// 	name: string;
// 	score: number = 0;
// 	constructor(name: string) {
// 		this.name = name;
// 	}
// 	sayHi(): void {
// 		console.log('hi! i am ' + this.name);
// 	}
// 	showScore(): void {
// 		console.log('score ' + this.score);
// 	}
// }
//==========================================
// Generics

// function getStringArray(value: string): string[] {
//     return [value, value, value];
// }
// function getNumberArray(value: number): number[] {
//     return [value, value, value];
// }
//慣習的にTという名前でやっていることが多い
// function getArray<T>(value: T): T[] {
// 	return [value, value, value];
// }

// console.log(getArray<number>(3));
// console.log(getArray<string>('hello'));

//==========================================
// Genericsに制約を加える

interface Result {
	a: number;
	b: number;
}
interface FinalResult {
	a: number;
	b: number;
	c: string;
}

class MyData<T extends Result> {
	constructor(public value: T) {}
	getArray(): T[] {
		return [this.value, this.value, this.value];
	}
}
// var v1 = new MyData<string>("hello");
// console.log(v1.getArray());
// var v2 = new MyData<number>(234);
// console.log(v2.getArray());

// var v3 = new MyData<Result>({a: 32, b: 16});
// console.log(v3.getArray());
var v4 = new MyData<FinalResult>({ a: 32, b: 16, c: 'hello' });
console.log(v4.getArray());
