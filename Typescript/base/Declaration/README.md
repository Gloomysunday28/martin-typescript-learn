# 声明文件

### 定义
```
  使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
```

### 学习
```
  以JQuery为例
  1. 声明语句
    使用第三方库Jquery: $ 或者 jQuery

    Ts中必须这么使用:
    declare var jQuery(seletor: string) => any

    declare并没有真的定义了一个变量jQuery, 只是定义了它的类型, 用于编译时的检查, 在编译后就会被删除

  2. 声明文件
    通常我们会把声明语句放到一个单独的问价中(jQuery.d.ts)中
    声明文件必需以d.ts为后缀

  3. 第三方声明文件
    npm install @types/jquery --save-dev
    推荐使用@types来管理
```