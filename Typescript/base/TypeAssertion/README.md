# 类型断言

## 定义
```
  联合类型试未赋值的时候, 可以优先指定为一个具体的类型
```

### 语法
```
  <类型>值

  或
  
  值 as 类型
  (在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种。)
```

### 学习
```
  1. 将联合类型公共属性调用断言
    function myPerson(person: number | string) : number {
      return person.length
    } // 如果是未赋值的联合类型, 属性必须是共有的

    断言:
      function myPerson(person: number | string) : number {
        return (<string>person).length
      } 
```