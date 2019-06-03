# 类型别名和字符串字面量类型

### 定义
```
  使用关键字 type 为类型定义了别名
```

### 学习
```
  1. 使用type
    type Name = string
    let myName : Name

    type AgeFunc = () => number
    function myAge(age: AgeFunc) : Name {
      return '' + age
    }

  2.类型别名常用于联合类型。

  3.定义一个字符串字面量类型
    type EventName = 'click' | 'scroll' | 'mousemove'
    function handler(el: HTMLElement, event: EventName) : any{}

    handler(document.body, 'mousemove') // 正确
    handler(document.body, 'keydown') // 失败
```