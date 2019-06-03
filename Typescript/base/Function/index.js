// 函数声明
function MySum(x, y) {
    return x + y;
}
// 函数表达式
var myExport = function (x, y) {
    return x + y;
};
var myPerson = function (x, y) {
    return x + y;
};
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
