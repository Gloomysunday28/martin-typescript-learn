# 元组

### 定义
```
  元组(Touple):合并了不同类型的对象
  数组(Array):合并了相同类型的对象
```

### 学习
```
  1. 定义多类型的元组
    let myName : [string, number] = ['person', 25]

  2. 对初始化赋值, 必须指定所有的元素
    let myName: [string, number]
    myName = ['person', 25] // 正确
    myName[0] = ['person'] // 失败
    myName[1] = [25] // 失败

  3. 调用API
    push: 必须是规定好的类型其中一个
```