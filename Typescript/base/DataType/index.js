// Boolean
var isDone = false;
// Number
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// String
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
// Void
var martin = function () {
    console.log(123);
};
// Null、Undefined
var v = undefined;
var mNull = null;
var mUndefined = undefined;
var u; // const 必须赋有初始值 let则没事
var myU = u; // 正确
/**
 * const v : void
 * const errorV : number = v // 错误
 */
// Any
var myAny = 5;
myAny = 'sevent';
myAny.setName().myName;
/**
 * let myLimit: number = 5
 * myLimit = 'sevent' // Type '"sevent"' is not assignable to type 'number'.
 */
// Union
var myUnion;
// myUnion = 7
// myUnion = 'sevent'
myUnion.length;
