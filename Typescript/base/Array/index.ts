let arr: (number | string)[] = [1, '2']

let arry : Array<number | string> = [1, '2']

interface NumberArray {
  [index: number]: number // 只要 index 的类型是 number，那么值的类型必须是 number
}

let myArray : NumberArray = [1, 2]