interface Animal {
  alert(): any,
  age?: number
}

interface Message {
  gendor: string,
  name: 'Mr.Martin' | 'Mr.Cai'
}

interface Light extends Animal {
  birth: string | number
}

class Person implements Light, Message {
  alert() {
    console.log('animal')
  }
  gendor = 'womale'
  name
  birth
}