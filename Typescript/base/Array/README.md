# 数组

### 表示法
```
  写法一:
    1. 单类型:
      [类型 + 方括号]
      number[]
      string[]
      ...

    2. 联合类型
      (类型 | 类型) + 方括号
      (number | string)[]
      (string | boolean)[]
      ...
    
  写法二: (数组泛型)
    1. 单类型:
      Array<类型>
      Array<number>
      ...

    2. 联合类型
      Array<类型 | 类型>
      Array<number | string>
      ...

  写法三: 接口
    interface NumberArray {
      [index: number]: number // 只要 index(下标) 的类型是 number，那么值的类型必须是 number
    }

    let arr : NumberArray = [1, 2, 3]
    
```

### 学习
```
  1. 数组里不能出现规定类型以外的元素(包括方法增加元素)
    let arr: number[] = [1, 2, 3, '4'] // 失败, '4'是一个字符串

  2. 类数组不能作为数组
    function arg() {
      let newArgs : number[] = arguments // 失败
      let rightArgs : IArguments = arguments // 正确
    }
```