# 泛型

### 定义
```
  泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
```

### 学习
```
  1. 简单例子
    function createArray(length: number, value: any): Array<any> {
      let result = [];
      for (let i = 0; i < length; i++) {
          result[i] = value;
      }
      return result;
    }

    createArray(3, 'x'); // ['x', 'x', 'x']

    上例中, createArray没有指定Array返回的具体类型, 我们知道具体类型是由Value来指定的, 所以可以这么改

    function createArray<T>(length: number, value: T): Array<T> {
      let result = <T>[] = [];
      for (let i = 0; i < length; i++) {
          result[i] = value;
      }
      return result;
    }

    createArray(3, 'x'); // ['x', 'x', 'x']

    T代表任意输入的类型, 也就是Value的类型

  2. 多个类型参数
    function swap<T, U>(tuple: [T, U]): [U, T] {
      return [tuple[1], tuple[0]];
    }

    swap([7, 'seven']); // ['seven', 7]

  3. 泛型约束, 由于无法预先得知泛型的类型, 所以无法提前使用它的私有属性或方法
    interface Lengthwise {
      length: number;
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
      console.log(arg.length);
      return arg;
    }
```