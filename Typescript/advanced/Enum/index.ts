enum Days {Sun = 7, Mon, Tue, Wen, Thu, Fri, Sat}

console.log(Days["Sun"] === 0);

const enum Color {Green = 1}

console.log(Color["Green"] === 1);

declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];