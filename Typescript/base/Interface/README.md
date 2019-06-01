# 接口

## 定义
```
  在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
```

## 作用
```
  定义对象类型
```

### 书写规范
```
  1. 手写字母一般是大写字符串
```

### 学习接口
```
  1. 不做任何处理的接口所对应的的对象的属性必须和接口一致(无论是个数还是类型)
    interface Person {
      name: string,
      age: number
    }

    let tom : Person {
      name: 'name',
      age: 1
    }

  2. 可选属性 ?, 此时仍然不可以新增属性
    interface Person {
      name: string,
      age?: number
    }

    let tom : Person {
      name: 'name',
    }

  3. 任意属性(可以不写任何属性), 只读属性、可选属性和必选属性是任意属性类型的子类型
    interface Person {
      name: string;
      age?: number;
      [propName: string]: string;
    }

    let tom : Person {
      name: 'name',
      age: 1, // 错误, 必选是string的子类型
      gender: 'man'
    }

  4. 只读类型, 仅局限给对象赋值的时候, 而不是对象初始化
    interface Person {
      readonly id: number
      name: string;
      age?: number;
      [propName: string]: any;
    }

    let tom : Person {
      id: 123,
      name: 'name',
      gender: 'man'
    }

    tom.id = 321 // 失败, id是只读的
```