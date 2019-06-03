type Name = string;
type AgeFunc = () => number

let myName : Name = '123'
function myAge(age: AgeFunc) : Name {
  return '' + age
}

type EventName = 'click' | 'scroll' | 'aaa'
function handler(el: HTMLElement, event: EventName) : any {
  
}
handler(document.body, 'aaa')