// Boolean
let isDone : boolean = false

// Number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// String
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

// Void
const martin = function() : void {
  console.log(123)
}


// Null、Undefined
const v : undefined = undefined
const mNull : number = null
const mUndefined: string = undefined
let u : undefined // const 必须赋有初始值 let则没事
const myU : boolean = u // 正确

/**
 * const v : void
 * const errorV : number = v // 错误
 */


// Any
let myAny : any = 5
myAny = 'sevent'
myAny.setName().myName

/**
 * let myLimit: number = 5
 * myLimit = 'sevent' // Type '"sevent"' is not assignable to type 'number'.
 */


// Union
let myUnion : string | number = 'sevent'
// myUnion = 7
// myUnion = 'sevent'
myUnion.length