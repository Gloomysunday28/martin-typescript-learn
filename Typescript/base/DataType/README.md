# 原始数据类型

### JS原始数据类型:
1. Boolean
2. String
3. Number
4. Undefined
5. Null
6. Object
7. Symbol

### JS合成数据类型:
1. Array
2. Function
3. Date
4. RegExp
5. Date
6. Error
7. ...

### TS数据转换
- Boolean
```
  1. 
    let isDone: boolean = false                     正确
    let isDone: boolean = Boolean(1)                正确
    let isDone: boolean = new Boolean(1)            错误

    原因: new Boolean(1) 返回的是对象形式, 并不是Boolean形式(其他类型除了Null和Undefined都一样)
```
- Number
```
  1. 
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    // ES6 中的二进制表示法
    let binaryLiteral: number = 0b1010;
    // ES6 中的八进制表示法
    let octalLiteral: number = 0o744;
    let notANumber: number = NaN;
    let infinityNumber: number = Infinity;

    编译结果: 0x(16进制)还是0x, 0b(二进制)和0o(8进制)会被编译成十进制的数字(重点是数字)
```

- Void
```
  1. 只能赋值为undefined和null
```

- Undefined、Null
```
  1. 与void的区别, 是所有类型的子集, 能赋值给所有的类型
```

- Any
```
  1. 如果变量被赋值成一个类型, 那么它后面就不能更改它的类型了
    let t : numer = 4
    t = 'seve' // 错误
    let s : any = 4
    s = 'seve' // 正确

  2. 可以随意调用任何的方法和属性,对它的任何操作,返回的内容的类型都是任意值。
    let anyOne : any = '4'
    any.setName().myName // 正确
    let s : any = 4
    s.setName().myName  // 错误

  3. 如果变量没有被声明任何一个类型并且没有赋值, 那么该变量被默认为Any
    let myName  等价于 let myNae : any

  4. 如果变量没有被声明任何一个类型却赋值, 那么该变量的类型默认为初始值的类型
    let myName = 'seven'
    myName = 7 // 错误
  
  5. 所有类型都是Any的子类型
```

- 联合类型
```
  1. 可以使用 | 来书写合并类型
    let myName : string | number = 6 // 可以同时成为字符串或者数字
  2. 访问类型共有属性
    let myName : string | number
    (1). 如果没有赋值
      myName.length // 错误 因为number不具备length属性
    (2). 如果赋值
      myName根据值的类型来做判断
```

### 声明变量
- let / const
```
  1.const 必须赋有初始值 let则没事
    const v : undefined = undefined
    let u : undefined
```