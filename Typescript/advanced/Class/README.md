# 类

### 学习
```
  1. 实现了ES7里的属性方法直接赋值
    class e {
      state = 1
    }

  2. 允许使用public, private, protected
    public: 所有都可以使用
    private: 只有类本身可以使用
    protected: 只有类和子类可以使用

  3. 抽象类, 无法被实例化, 只能被子类继承, 且必须实现定义了抽象方法
    abstract class Animal {
      public abstract sayHi()
    }

  4. 类加类型
    class Animal {
      name: string
    }
```