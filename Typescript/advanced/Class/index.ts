class Ts {
  state = 1
  static person = 'Mr.Martin'
  private name = 'Mr.Martin'
  protected age = 25
  public gendor = 'male'
}

const tsc = new Ts()
// console.log(tsc.age);
console.log(tsc.gendor);
// console.log(tsc.name);

class TsChildren extends Ts {
  constructor() {
    super()
    console.log(this.age);
  }
}