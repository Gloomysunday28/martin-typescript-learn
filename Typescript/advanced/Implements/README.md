# 实现

### 定义
```
  提取类之间共有的特性
```

### 类实现接口
```
  1. 类实现接口
    interface Animal {
      alert()
    }

    class Person implements Animal {
      alert() {}
    }
  2. 一个类实现多个接口
    interface Animal {
      alert()
    }

    interface Message {
      age: number
    }

    class Person implements Animal, Message {
      alert() {},
      age = 2
    }
```

### 接口继承接口
```
  interface Animal {
    alert()
  }

  interface Message extends Animal {
    age: number
  }
```

### 接口继承类
```
  class Point {
    x: number;
    y: number;
  }

  interface Point3d extends Point {
    z: number;
  }

  let point3d: Point3d = {x: 1, y: 2, z: 3};
```