// 函数声明
function MySum(x: number, y: number) : number {
  return x + y;
}

// 函数表达式
let myExport : (x: number, y: number) => number = function (x: number, y: number) {
  return x + y
}

// 接口
interface Person {
  (x: number, y: number): number
}

let myPerson : Person = function(x: number, y: number) : number {
  return x + y
}

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}