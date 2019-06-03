# 枚举

### 定义
```
  用于取值被限定在一定范围内的场景, 比如一周只有七天
  值分为: 常数项和计算所得项
  常数项:
    1.它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值0
    2.它不带有初始化器且它之前的枚举成员是一个数字常量。 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。
    3.常量表达式:
      (1).一个枚举表达式字面量（主要是字符串字面量或数字字面量）
      (2).一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
      (3).带括号的常量枚举表达式
      (4).一元运算符+, -, ~其中之一应用在了常量枚举表达式
      (5).常量枚举表达式做为二元运算符+, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。
      若常量枚举表达式求值后为NaN或Infinity，则会在编译阶段报错。

  计算所得项:
    enum FileAccess {
      // constant members
      None,
      Read    = 1 << 1,
      Write   = 1 << 2,
      ReadWrite  = Read | Write,
      // computed member
      G = "123".length
    }
```

### 学习
```
  1. 默认是从0开始递增
    enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
    Days["Sun"] === 0 // true
    Days["Mon"] === 1 // true

  2. 手动赋值
    enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat}
    Days["Sun"] === 7 // true
    Days["Mon"] === 1 // true
    Days["Tue"] === 2 // true

    未手动赋值的枚举项会接着上一个枚举项递增

  3. 替换重新赋值
    enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat}
    console.log(Days["Sun"] === 3); // true
    console.log(Days["Wed"] === 3); // true
    console.log(Days[3] === "Sun"); // false
    console.log(Days[3] === "Wed"); // true

    这里Wed会重新覆盖掉Sun

  4. 枚举项可以不是数字, 但是需要用断言来让tsc无视类型检查
    enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};

  5. 可以赋值为小数或者是负数

  6. 计算所得项
    enum Color {Red, Green, Blue = 'blue'.length} // 正确
    enum Color {Red = 'red'.length, Green, Blue} // 错误

    如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错

  7. 常熟枚举
    const enum Days {Sun}

    常数枚举与普通枚举区别是: 常数枚举在编译阶段被删除, 并且不能包含计算成员

  8. 外部枚举
    declare enum Directions {
      Up,
      Down,
      Left,
      Right
    }

    declare值会用于编译时的检查, 编译结果会被删除
    同时可以是用declare const
```