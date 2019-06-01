interface Person {
  readonly id: number,
  name: string,
  // age?: number // 可选属性
  [propName: string] : any
}

let tom : Person = {
  id: 123,
  name: 'stirng',
  // age: 1
}
