# 函数

### 学习

- 函数声明
```
  1. 参数约束与输出约束
    function sum(x: number, y: number) : number {
      return x + y
    }
    参数类型与个数必须一致
```

- 函数表达式
```
  1. 等号左右类型一致
     也许我们一开始是这么写的

     let sum = function(x: number, y: number) : number {
      return x + y
    } // 以上这串代码是可以通过编译的,  事实上以上只对等号右边进行了类型赋值, 左边的sum是通过类型判断得出其类型的, 改进

    let sum = (x: number, y: number) => number = function(x: number, y: number) : number {
      return x + y
    } // TS里的 => 代表函数定义, 左边是参数类型声明, 使用小括号
```

- 接口
```
  1. 使用接口
     interface MySum {
       (x: number, y: number): number
     }

     let mySearch: MySum
     mySearch = function(x: string, y: string) {
      return x + y
     }
     
```

- 参数
```
  1. 可选参数 ？, 可选参数必须在必选参数后面
     function(x: number, y?:number) : number {
       return x + y
     }
  
  2. 参数默认值
     function(x: number, y:number = 2) : number {
       return x + y
     }

  3. 剩余参数
    function(x: number[], ...rest: any[]): number {
      return x.push(...rest)
    }
```